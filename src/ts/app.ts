import { DomTreeHelper } from './utils/dom_tree_helper';

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
    this.rootElement = DomTreeHelper.createDiv("app");
    this.rootElement.textContent = "Welcome to the Home Page!";
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