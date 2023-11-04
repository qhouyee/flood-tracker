import { DomTreeHelper } from './dom_tree_helper';

/**
 * This component offer a reusable container element with a title and content subelement. 
 * Users can modify the contents with additional subelements to fit their needs.
*/
export class Container {
  private container: HTMLDivElement;
  private contentContainer: HTMLDivElement;
  private validTypes: string[] = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];

  /**
    * Constructor.
    * @param {string} id - The container's id.
    * @param {string} titleType - The HTML element for title type. Options: h1-h6 and p.
    * @param {string} title - The title to display.
  */ constructor(id: string, titleType: string, title: string) {
    // Set up the container element
    this.container = DomTreeHelper.createDiv(id);
    // Validate title type
    if (!this.validTypes.includes(titleType)) {
      throw new SyntaxError(`Title type '${titleType}' is invalid. Only h1, h2, h3, h4, h5, h6, and p are permissible.`);
    }
    // Set up the title
    let titleElement: HTMLElement = DomTreeHelper.createHtmlElement(titleType, id + "-title");
    titleElement.textContent = title;
    // Set up the content
    this.contentContainer = DomTreeHelper.createDiv();
    // Append them as children
    this.container.appendChild(titleElement);
    this.container.appendChild(this.contentContainer);
  }

  /**
    * Renders the input content to the content container.
    * @param {HTMLElement} contentElement - The content element to be inserted into this container.
    * @returns {void}
  */ public renderContent(contentElement: HTMLElement): void {
    this.contentContainer.appendChild(contentElement);
  }

  /**
    * Retrieves the root container element.
    * @returns {HTMLDivElement} the container.
  */ public getContainer(): HTMLDivElement {
    return this.container;
  }
}
