import { describe, it, expect, beforeEach } from 'vitest';

import { PanelComponent } from '../../src/ts/panel/panel';

describe("PanelComponent", () => {
  let panelComponent: PanelComponent;
  let parentElement: HTMLDivElement;

  beforeEach(() => {
    panelComponent = new PanelComponent();
    parentElement = document.createElement("div");
  });

  // WIP: Verify if the async function works to set up a dropdown
  it("should render the panel component with a title and dropdown", () => {
    // Render the component to parent element
    panelComponent.render(parentElement);
    assertPanelContents(parentElement);
  });
});

export function assertPanelContents(parentElement: HTMLElement) {
  // Assert that there is a panel container
  let panelContainer = parentElement.querySelector("#panel");
  expect(panelContainer).not.toBeNull();
  // Assert that there is a title
  let titleElement = panelContainer?.querySelector("h1");
  expect(titleElement).not.toBeNull();
  expect(titleElement!.textContent).toBe("UK Flood Tracker");
  // Assert that there is a dropdown container
  let dropdownContainer = panelContainer?.querySelector("#station-container");
  expect(dropdownContainer).not.toBeNull();
  // Assert that there is a selector text
  let selectorTextElement = panelContainer?.querySelector("p");
  expect(selectorTextElement).not.toBeNull();
  expect(selectorTextElement!.textContent).toBe("Select a station from the following to view their measures:");
}