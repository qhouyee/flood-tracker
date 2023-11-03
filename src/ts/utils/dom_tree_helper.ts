/**
 * This component provides methods for retrieving and modifying the Html Elements in a DOM tree.
 */
export class DomTreeHelper {
  
  /**
  * Create and return a new div element.
  * @returns The created div element.
  */
  static createDiv(): HTMLDivElement {
    return <HTMLDivElement>this.createHtmlElement("div");
  }

  /**
  * Create and return a new HTML element of specified type.
  * @param elementType - The type of HTML element to create.
  * @returns The created HTML element.
  */
  static createHtmlElement(elementType: string): HTMLElement {
    let divElement = document.createElement(elementType);
    return divElement;
  }

  /**
  * Fetches an HTML element by its ID from the document.
  * @param id - The ID of the element to fetch.
  * @returns The HTML element with the specified ID.
  * @throws Error if the element is not found.
  */
  static getElementById(id: string): HTMLElement {
    let element = document.getElementById(id);
    if (element === null) {
      throw new Error(`Element with id '${id}' not found.`);
    }
    return element!;
  }
}
