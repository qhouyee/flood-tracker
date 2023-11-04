/**
 * This component provides methods for retrieving and modifying the Html Elements in a DOM tree.
*/
export class DomTreeHelper {
  
  /**
    * Create and return a new div element.
    * @param {string} id - An optional id attribute to set for the div element.
    * @returns {HTMLDivElement} The created div element.
  */
  static createDiv(id?: string): HTMLDivElement {
    return <HTMLDivElement>this.createHtmlElement("div", id);
  }

  /**
    * Create and return a new HTML element of specified type.
    * @param {string} elementType - The type of HTML element to create.
    * @param {string} id - An optional id attribute to set for the html element.
    * @returns {HTMLElement} The created HTML element.
  */
  static createHtmlElement(elementType: string, id?: string): HTMLElement {
    let htmlElement = document.createElement(elementType);
    if (id) { htmlElement.id = id; }
    return htmlElement;
  }

  /**
    * Fetches an HTML element by its ID from the document.
    * @param {string} id - The ID of the element to fetch.
    * @returns {HTMLElement} The HTML element with the specified ID.
    * @throws {Error} if the element is not found.
  */
  static getElementById(id: string): HTMLElement {
    let element = document.getElementById(id);
    if (element === null) {
      throw new Error(`Element with id '${id}' not found.`);
    }
    return element!;
  }
}
