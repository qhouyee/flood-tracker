import { describe, it, expect, beforeEach } from 'vitest';

import { Notification } from '../../src/ts/utils/notification';

describe("Notification", () => {
  let notification: Notification;
  let notificationText: string = "Test Notification";

  beforeEach(() => {
    notification = new Notification(notificationText);
  });

  it("should show the notification", () => {
    // Execute the method.
    notification.showNotification();
    // Assert that the notification is visible (display property is 'block').
    let displayStyle: string = notification.render().style.display;
    expect(displayStyle).toBe("block");
  });

  it("should hide the notification", () => {
    // Execute the method.
    notification.hideNotification();
    // Assert that the notification is hidden (display property is 'none').
    let displayStyle: string = notification.render().style.display;
    expect(displayStyle).toBe("none");
  });

  it("should render the notification element", () => {
    // Get the rendered element.
    let renderedElement: HTMLElement = notification.render();
    // Assert that the element is an HTMLElement.
    expect(renderedElement).toBeInstanceOf(HTMLElement);
    // Assert that the element has the correct text content.
    expect(renderedElement.textContent).toBe(notificationText);
    // Assert that the element has the correct class.
    expect(renderedElement.classList.contains("notification")).toBe(true);
  });
});