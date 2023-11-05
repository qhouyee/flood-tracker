import { format } from 'date-fns';

import { DomTreeHelper } from '../utils/dom_tree_helper';
import { WaterLevelReading } from './chart';

/**
 * This component sets up a table for the panel.
*/
export class TableComponent {
  private tableElement: HTMLTableElement;

  /**
   * Constructor.
  */ constructor() {
    this.tableElement = <HTMLTableElement>DomTreeHelper.createHtmlElement("table");
    this.addHeader();
  }

  /**
   * Renders the component for usage.
   * @returns {HTMLTableElement} the table element.
  */ public render(): HTMLTableElement {
    return this.tableElement;
  }

  /**
   * Updates the table based on data inputs.
   * @param {WaterLevelReading[]} readings - An array of the water level readings returned from API. 
   * @returns {void}.
  */ public update(readings: WaterLevelReading[]): void {
    // Clear the existing table rows except for header
    // Get all rows in the table, excluding the header row
    let rows: HTMLTableRowElement[] = Array.from(this.tableElement.querySelectorAll("tr:not(:first-child)"));
    rows.map(row => this.tableElement.removeChild(row));
    // Attach response readings into the table
    readings.map(reading => {
      this.addRow(
        format(Date.parse(reading.dateTime), "PPpp"), // Format date time
        reading.value);
    });
  }

  /**
   * Add headers into the table.
   * @returns {void}
  */ private addHeader(): void {
    let newRow: HTMLElement = DomTreeHelper.createHtmlElement("tr");
    let timeCol: HTMLElement = DomTreeHelper.createHtmlElement("th");
    timeCol.textContent = "Time";
    let valueCol: HTMLElement = DomTreeHelper.createHtmlElement("th");
    valueCol.textContent = "Water Level [m]";
    newRow.appendChild(timeCol);
    newRow.appendChild(valueCol);
    this.tableElement.appendChild(newRow);
  }

  /**
   * Add a row into the table based on measure inputs.
   * @param {string} time - Date time for the measure.
   * @param {string} value - Value of the measure.
   * @returns {void}
  */ private addRow(time: string, value: number): void {
    let newRow: HTMLElement = DomTreeHelper.createHtmlElement("tr");
    let timeCol: HTMLElement = DomTreeHelper.createHtmlElement("td");
    timeCol.textContent = time;
    let valueCol: HTMLElement = DomTreeHelper.createHtmlElement("td");
    valueCol.textContent = value.toString();
    newRow.appendChild(timeCol);
    newRow.appendChild(valueCol);
    this.tableElement.appendChild(newRow);
  }
}