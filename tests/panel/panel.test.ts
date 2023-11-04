import { describe, it, expect, beforeEach } from 'vitest';

import { PanelComponent } from '../../src/ts/panel/panel';

describe("PanelComponent", () => {
  let panelComponent: PanelComponent;
  let parentElement: HTMLDivElement;

  beforeEach(() => {
    panelComponent = new PanelComponent();
    parentElement = document.createElement("div");
  });

  it("should render the panel component with a title and dropdown", () => {
    // Render the component to parent element
    panelComponent.render(parentElement);
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
    // Assert that there is a selector component with three options
    let dropdownOptions = dropdownContainer?.querySelector("#station-selector")?.querySelectorAll("option");
    expect(dropdownOptions).toHaveLength(3); // Assuming 3 stations from the getStationData function
  });
});