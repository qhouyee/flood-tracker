import { DomTreeHelper } from '../utils/dom_tree_helper';

/**
 * This component sets up an attribution for the panel.
*/
export class Attribution {
  private attributionElement: HTMLDivElement;

  /**
   * Constructor.
  */ constructor() {
    this.attributionElement = DomTreeHelper.createDiv("attribution");
    this.attributionElement.innerHTML = "Attribution: Data sourced from <a href='https://environment.data.gov.uk/flood-monitoring/doc/reference'>UK Environment Agency</a>";
  }

  /**
   * Renders the component for usage.
   * @returns {HTMLDivElement} the attribution.
  */ public render(): HTMLDivElement {
    return this.attributionElement;
  }
}