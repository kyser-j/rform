import { makeAutoObservable } from 'mobx';

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

  transitionToNextPage() {
    const edgeSet = this.graph.get(this.currentPageNodeId);

    if (!edgeSet) {
      return null;
    }

    for (const edgeId of edgeSet) {
      const edge = this.pageEdges.get(edgeId);

      if (!edge) {
        continue;
      }

      if (edge.evaluateCondition()) {
        const pageNode = this.pageNodes.get(edge.destinationPageId);

        if (pageNode) {
          this.pageHistory.push(this.currentPageNodeId);
          this.currentPageNodeId = pageNode.id;
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

  constructor(id: string, name: string, originPageId: string, destinationPageId: string) {
    this.id = id;
    this.name = name;
    this.originPageId = originPageId;
    this.destinationPageId = destinationPageId;
    makeAutoObservable(this);
  }

  evaluateCondition() {
    return true;
  }
}
