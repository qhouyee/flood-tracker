import { DomTreeHelper } from './dom_tree_helper';

/**
 * This reusable component displays a notification message when required.
*/
export class Notification {
  private notice: HTMLElement;

  /**
   * Constructor.
   * @param {string} displayText - The notification text.
  */ constructor(displayText: string) {
    // Set up the container element
    this.notice = DomTreeHelper.createHtmlElement("h5");
    this.notice.classList.add("notification");
    this.notice.textContent = displayText;
    this.showNotification();
  }

  /**
   * Shows the notification when executed.
   * @returns {void}
  */ public showNotification(): void {
    this.notice.style.display = "block";
  }

  /**
   * Hides the notification when executed.
   * @returns {void}
  */ public hideNotification(): void {
    this.notice.style.display = "none";
  }

  /**
   * Renders the notice.
   * @returns {HTMLElement} this element.
  */ public render(): HTMLElement {
    return this.notice;
  }
}
