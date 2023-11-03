import { DomTreeHelper } from './utils/dom-tree-helper';

/**
 * This component acts as an entry point to render a web application.
 */
class App {
  private containerElement: HTMLElement;

  /**
   * Standard constructor to set up the app.
   */
  constructor() {
    // Set up a default container
    this.containerElement = DomTreeHelper.createDiv();
    this.containerElement.textContent = 'Welcome to the Home Page!';
  }

  /**
    * Render the content onto the web page.
    */
  public render(): void {
    // Appends all created container to the root element
    let rootElement: HTMLElement = DomTreeHelper.getElementById('app');
    rootElement.appendChild(this.containerElement)
  }
}

// Instantiate a new App and render its contents
let app = new App();
app.render();