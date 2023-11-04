import { describe, it, expect, afterEach } from 'vitest';

import { App } from '../src/ts/app';
import { resetDOMTree } from './test.utils';
import { assertPanelContents } from './panel/panel.test';

describe("App", () => {
  afterEach(() => {
    // Reset DOM Tree after each test run
    resetDOMTree()
  });

  it("should render a container element with the welcome text", () => {
    // Create an instance of the App class
    let app = new App();
    // Simulate rendering
    app.render();
    // Get the root element
    let rootElement = document.getElementById("app");
    // Assert that the elements exist and have the expected content
    expect(rootElement).not.toBeNull();
    expect(rootElement?.firstChild).not.toBeNull();
    expect(rootElement?.firstChild).toBe(document.getElementById("panel"));
    assertPanelContents(rootElement!)
  });
});