import { describe, it, expect, beforeEach } from 'vitest';
import { format } from 'date-fns';

import { TableComponent } from '../../src/ts/panel/table';
import { WaterLevelReading } from '../../src/ts/panel/chart';

describe("TableComponent", () => {
  let tableComponent: TableComponent;
  let tableElement: HTMLTableElement;

  beforeEach(() => {
    tableComponent = new TableComponent();
    tableElement = tableComponent.render();
  });

  it("should render a table with headers", () => {
    expect(tableElement).not.toBeNull();
    let headerRow = tableElement.querySelectorAll("tr");
    expect(headerRow).toHaveLength(1);
    let headerCells = headerRow[0].querySelectorAll("th");
    expect(headerCells).toHaveLength(2);
    expect(headerCells[0].textContent).toBe("Time");
    expect(headerCells[1].textContent).toBe("Water Level [m]");
  });

  it("should update the table based on data inputs", () => {
    let readings: WaterLevelReading[] = [
      { dateTime: "2023-11-05T10:00:00", value: 5 },
      { dateTime: "2023-11-05T11:00:00", value: 7 },
    ];
    tableComponent.update(readings);
    let rows = tableElement.querySelectorAll('tr');
    // Expecting one header row and two data rows
    expect(rows).toHaveLength(3);

    // Check the content of the data rows
    let dataRow1 = rows[1].querySelectorAll("td");
    let dataRow2 = rows[2].querySelectorAll("td");

    expect(dataRow1).toHaveLength(2);
    expect(dataRow1[0].textContent).toBe(format(Date.parse(readings[0].dateTime), "PPpp"));
    expect(dataRow1[1].textContent).toBe(readings[0].value.toString());

    expect(dataRow2).toHaveLength(2);
    expect(dataRow2[0].textContent).toBe(format(Date.parse(readings[1].dateTime), "PPpp"));
    expect(dataRow2[1].textContent).toBe(readings[1].value.toString());
  });
});