import { describe, it, expect, afterEach } from 'vitest';

import { DomTreeHelper } from '../../src/ts/utils/dom_tree_helper';
import { resetDOMTree } from '../test.utils';

describe("DomTreeHelper", () => {
  afterEach(() => {
    // Reset DOM Tree after each test run
   resetDOMTree()
  });

  it("createDiv() should create a div element with an id", () => {
    let id:string = "container"
    let divElement: HTMLDivElement = DomTreeHelper.createDiv(id);
    expect(divElement).toBeInstanceOf(HTMLDivElement);
    expect(divElement.getAttribute("id")).toBe(id);
  });

  it("createDiv() should create a div element with no id", () => {
    let divElement: HTMLDivElement = DomTreeHelper.createDiv();
    expect(divElement).toBeInstanceOf(HTMLDivElement);
    expect(divElement.getAttribute("id")).toBeNull();
  });

  it("createHtmlElement() should create an HTML element of specified type with id", () => {
    let id:string = "container"
    let elementType: string = 'span';
    let spanElement: HTMLElement = DomTreeHelper.createHtmlElement(elementType, id);
    expect(spanElement.tagName.toLowerCase()).toBe(elementType);
    expect(spanElement.getAttribute("id")).toBe(id);
  });
  
  it("createHtmlElement() should create an HTML element of specified type without id", () => {
    let elementType: string = "span";
    let spanElement: HTMLElement = DomTreeHelper.createHtmlElement(elementType);
    expect(spanElement.tagName.toLowerCase()).toBe(elementType);
    expect(spanElement.getAttribute("id")).toBeNull();
  });

  it("getElementById() should fetch an HTML element by ID", () => {
    let id: string = "testElement";
    // Create a sample element to use in the test
    let sampleElement: HTMLDivElement = DomTreeHelper.createDiv();
    sampleElement.id = id;
    document.body.appendChild(sampleElement);
    // Execute method
    let fetchedElement: HTMLElement = DomTreeHelper.getElementById(id);
    expect(fetchedElement).toBe(sampleElement);
  });

  it("getElementById() should throw an error if element is not found", () => {
    let id = "nonExistentElement";
    expect(() => DomTreeHelper.getElementById(id)).toThrowError(`Element with id '${id}' not found.`);
  });
});