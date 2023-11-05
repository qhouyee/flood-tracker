import { describe, it, expect, beforeEach } from 'vitest';

import { Attribution } from '../../src/ts/panel/attribution';

describe("DomTreeHelper", () => {
  let attributionElement: Attribution;
  let content: string = 'Attribution: Data sourced from <a href="https://environment.data.gov.uk/flood-monitoring/doc/reference">UK Environment Agency</a>';

  beforeEach(() => {
    attributionElement = new Attribution();
  });

  it("should create an HTML Div element with the attribution", () => {
    let attribution: HTMLDivElement = attributionElement.render();
    // Assert the attribution contens
    expect(attribution).toBeInstanceOf(HTMLDivElement);
    expect(attribution.id).toBe("attribution");
    expect(attribution.innerHTML).toBe(content);
  });
});