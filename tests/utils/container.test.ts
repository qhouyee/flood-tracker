import { describe, it, expect, beforeEach } from 'vitest';

import { Container } from '../../src/ts/utils/container';

describe("Container", () => {
  let container: Container;
  let containerId: string = "test-container";
  let h2Type: string = "h2";
  let title: string = "Hello World";

  beforeEach(() => {
    // Set up a container for testing
    container = new Container(containerId, h2Type, title);
  });

  it("should render the container with the correct title", () => {
    // Execute method
    let containerElement: HTMLDivElement = container.getContainer();
    // Assert that title is accurate
    let titleElement: HTMLElement = <HTMLElement>containerElement.firstElementChild;
    expect(containerElement).not.toBeNull();
    expect(titleElement).not.toBeNull();
    expect(titleElement.tagName.toLowerCase()).toBe(h2Type);
    expect(titleElement.textContent).toBe(title);
  });

  it("should render content correctly", () => {
    // Set up a content element
    let sampleText: string = "Illasop";
    let contentElement: HTMLParagraphElement = document.createElement("p");
    contentElement.textContent = sampleText;
    // Execute method
    container.renderContent(contentElement);
    // Assert that content element has been added to container element
    let containerElement: HTMLElement = container.getContainer();
    let renderedContent: HTMLParagraphElement = containerElement.querySelector("p")!;
    expect(renderedContent).not.toBeNull();
    expect(renderedContent.textContent).toBe(sampleText);
  });

  it("should throw an error for an invalid title type", () => {
    expect(() => {
      new Container(containerId, "invalid-type", "Invalid Title");
    }).toThrowError(SyntaxError);
  });
});