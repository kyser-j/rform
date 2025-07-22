import type { RForm } from '../types/FormComponents';
import { MultiDigraph, PageEdge, PageNode } from './MultiDigraph';

export class MultiDigraphFactory {
  #edges: PageEdge[];
  #pages: PageNode[];

  constructor(rform: RForm) {
    this.#edges = [];
    this.#pages = [];

    rform.pages.forEach((page) => {
      this.#pages.push(new PageNode(page.id, page.name));

      page.edges.forEach((edge) => {
        this.#edges.push(new PageEdge(edge.id, edge.name, page.id, edge.destinationPageId));
      });
    });
  }

  create(): MultiDigraph {
    const pageGraph = new MultiDigraph();

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
