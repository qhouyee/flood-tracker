import '../css/style.css'
import { DomTreeHelper } from './utils/dom_tree_helper';
import { PanelComponent } from './panel/panel';

/**
 * This component acts as an entry point to render a web application.
*/
export class App {
  private rootElement: HTMLElement;

  /**
    * Standard constructor to set up the app.
  */
  constructor() {
    // Set up a default app container
    let panelElement: PanelComponent = new PanelComponent()
    this.rootElement = DomTreeHelper.createDiv("app");
    panelElement.render(this.rootElement);
  }

  /**
    * Render the content onto the web page.
    * @returns {void}
  */
  public render(): void {
    // Appends all created container to the document body
    document.body.appendChild(this.rootElement);
  }
}