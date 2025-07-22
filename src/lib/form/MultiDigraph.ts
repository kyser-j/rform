/*
 *  Class representing the connections between pages in the form using a
 *  directed multigraph
 */
export class MultiDigraph {
  #currentPageNodeId: string;

  // key = page node id; value = set of edge ids where origin page node is the key
  #graph: Map<string, Set<string>>;

  #pageNodes: Map<string, PageNode>;
  #pageEdges: Map<string, PageEdge>;

  constructor() {
    this.#currentPageNodeId = '';
    this.#graph = new Map<string, Set<string>>();
    this.#pageNodes = new Map<string, PageNode>();
    this.#pageEdges = new Map<string, PageEdge>();
  }

  addPageEdge(pageEdge: PageEdge) {
    const edgeSet = this.#graph.get(pageEdge.originPageId);

    if (!edgeSet || !this.#graph.has(pageEdge.destinationPageId)) {
      return;
    }

    edgeSet.add(pageEdge.id);
    this.#pageEdges.set(pageEdge.id, pageEdge);
  }

  addPageNode(pageNode: PageNode) {
    if (!this.#graph.has(pageNode.id)) {
      this.#graph.set(pageNode.id, new Set<string>());
    }

    if (!this.#pageNodes.has(pageNode.id)) {
      this.#pageNodes.set(pageNode.id, pageNode);
    }
  }

  deletePageEdge(pageEdge: PageEdge) {
    this.#pageEdges.delete(pageEdge.id);
    const edgeSet = this.#graph.get(pageEdge.originPageId);

    if (edgeSet) {
      edgeSet.delete(pageEdge.id);
    }
  }

  deletePageNode(pageNode: PageNode) {
    this.#pageNodes.delete(pageNode.id);
    this.#graph.delete(pageNode.id);
  }

  getCurrentPageNodeId() {
    return this.#currentPageNodeId;
  }

  getNextPageNode(currentPageNode: PageNode): PageNode | null {
    const edgeSet = this.#graph.get(currentPageNode.id);

    if (!edgeSet) {
      return null;
    }

    for (const edgeId of edgeSet) {
      const edge = this.#pageEdges.get(edgeId);

      if (!edge) {
        continue;
      }

      if (edge.evaluateCondition()) {
        const pageNode = this.#pageNodes.get(edge.destinationPageId);

        if (pageNode) {
          return pageNode;
        }
      }
    }

    return null;
  }

  setInitialPageNode(pageId: string) {
    if (!this.#graph.has(pageId)) {
      return;
    }

    this.#currentPageNodeId = pageId;
  }
}

export class PageNode {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
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
  }

  evaluateCondition() {
    return true;
  }
}
