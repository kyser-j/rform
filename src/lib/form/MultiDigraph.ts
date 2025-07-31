import { makeAutoObservable } from 'mobx';
import type { EdgeNavigationCondition, EdgeNavigationRule } from '../types/Rules';
import type { RFormValues } from './RFormValues';

/*
 *  Class representing the connections between pages in the form using a
 *  directed multigraph
 */
export class MultiDiGraph {
  // key = page node id; value = set of edge ids where origin page node is the key
  graph = new Map<string, Set<string>>();

  currentPageNodeId: string = '';
  pageHistory: string[] = [];
  pageNodes = new Map<string, PageNode>();
  pageEdges = new Map<string, PageEdge>();

  constructor() {
    makeAutoObservable(this);
  }

  addPageEdge(pageEdge: PageEdge) {
    const edgeSet = this.graph.get(pageEdge.originPageId);

    if (!edgeSet || !this.graph.has(pageEdge.destinationPageId)) {
      return;
    }

    edgeSet.add(pageEdge.id);
    this.pageEdges.set(pageEdge.id, pageEdge);
  }

  addPageNode(pageNode: PageNode) {
    if (!this.graph.has(pageNode.id)) {
      this.graph.set(pageNode.id, new Set<string>());
    }

    if (!this.pageNodes.has(pageNode.id)) {
      this.pageNodes.set(pageNode.id, pageNode);
    }
  }

  setInitialPageNode(pageId: string) {
    if (!this.graph.has(pageId)) {
      return;
    }

    this.currentPageNodeId = pageId;
  }

  transitionToNextPage(values: RFormValues) {
    const edgeSet = this.graph.get(this.currentPageNodeId);

    if (!edgeSet) {
      return;
    }

    for (const edgeId of edgeSet) {
      const edge = this.pageEdges.get(edgeId);

      if (!edge) {
        continue;
      }

      if (edge.evaluateCondition(values)) {
        const pageNode = this.pageNodes.get(edge.destinationPageId);

        if (pageNode) {
          this.pageHistory.push(this.currentPageNodeId);
          this.currentPageNodeId = pageNode.id;
          return;
        }
      }
    }
  }

  transitionToPreviousPage() {
    if (this.pageHistory.length === 0) {
      return;
    }

    const previousPageNodeId = this.pageHistory[this.pageHistory.length - 1];

    if (this.graph.has(previousPageNodeId)) {
      this.pageHistory.pop();
      this.currentPageNodeId = previousPageNodeId;
    }
  }
}

export class PageNode {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    makeAutoObservable(this);
  }
}

export class PageEdge {
  id: string;
  name: string;
  originPageId: string;
  destinationPageId: string;
  edgeNavigationRule?: EdgeNavigationRule;

  constructor(id: string, name: string, originPageId: string, destinationPageId: string, edgeNavigationRule?: EdgeNavigationRule) {
    this.id = id;
    this.name = name;
    this.originPageId = originPageId;
    this.destinationPageId = destinationPageId;
    this.edgeNavigationRule = edgeNavigationRule;
    makeAutoObservable(this);
  }

  // Use a depth-first search for the EdgeNavigationRule since it is a tree data structure
  // and we are evaluating and/or conditions from left to right
  evaluateCondition(values: RFormValues): boolean {
    if (!this.edgeNavigationRule) {
      return true;
    }

    if (this.edgeNavigationRule.type === 'condition') {
      return this.#evaluateNodeCondition(this.edgeNavigationRule, values);
    }

    const results = this.edgeNavigationRule.conditions.map((condition) => this.#recursiveEvaluateCondition(condition, values));

    if (this.edgeNavigationRule.operator === 'and') {
      return results.reduce((prev, current) => prev && current);
    } else if (this.edgeNavigationRule.operator === 'or') {
      return results.reduce((prev, current) => prev || current);
    } else {
      return false;
    }
  }

  #recursiveEvaluateCondition(edgeNavigationRule: EdgeNavigationRule, values: RFormValues): boolean {
    if (edgeNavigationRule.type === 'condition') {
      return this.#evaluateNodeCondition(edgeNavigationRule, values);
    }

    const results = edgeNavigationRule.conditions.map((condition) => this.#recursiveEvaluateCondition(condition, values));

    if (edgeNavigationRule.operator === 'and') {
      return results.reduce((prev, current) => prev && current);
    } else if (edgeNavigationRule.operator === 'or') {
      return results.reduce((prev, current) => prev || current);
    } else {
      return false;
    }
  }

  #evaluateNodeCondition(edgeCondition: EdgeNavigationCondition, values: RFormValues): boolean {
    if (edgeCondition.operator === 'equals') {
      return values.getValue(edgeCondition.targetValueRFormId) === edgeCondition.configuredValue;
    } else if (edgeCondition.operator === 'not-equals') {
      return values.getValue(edgeCondition.targetValueRFormId) !== edgeCondition.configuredValue;
    }

    // TODO: +'' evaluates to 0 and will pass through this check. Will this be allowed?
    if (isNaN(+values.getValue(edgeCondition.targetValueRFormId)) || isNaN(+edgeCondition.configuredValue)) {
      return false;
    }

    switch (edgeCondition.operator) {
      case 'greater-or-equal': {
        return values.getValue(edgeCondition.targetValueRFormId) >= edgeCondition.configuredValue;
      }
      case 'greater-than': {
        return values.getValue(edgeCondition.targetValueRFormId) > edgeCondition.configuredValue;
      }
      case 'less-or-equal': {
        return values.getValue(edgeCondition.targetValueRFormId) <= edgeCondition.configuredValue;
      }
      case 'less-than': {
        return values.getValue(edgeCondition.targetValueRFormId) < edgeCondition.configuredValue;
      }
      default: {
        return false;
      }
    }
  }
}
