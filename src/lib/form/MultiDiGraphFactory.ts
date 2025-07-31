import type { RForm } from '../types/FormComponents';
import { MultiDiGraph, PageEdge, PageNode } from './MultiDiGraph';

export class MultiDiGraphFactory {
  #edges: PageEdge[];
  #pages: PageNode[];

  constructor(rform: RForm) {
    this.#edges = [];
    this.#pages = [];

    rform.pages.forEach((page) => {
      this.#pages.push(new PageNode(page.rFormId, page.name));

      page.edges.forEach((edge) => {
        this.#edges.push(new PageEdge(edge.rFormId, edge.name, page.rFormId, edge.destinationPageRFormId, edge.edgeNavigationRule));
      });
    });
  }

  create(): MultiDiGraph {
    const pageGraph = new MultiDiGraph();

    for (const page of this.#pages) {
      pageGraph.addPageNode(page);
    }

    for (const edge of this.#edges) {
      pageGraph.addPageEdge(edge);
    }

    pageGraph.setInitialPageNode(this.#pages[0]?.id ?? '');

    return pageGraph;
  }
}
