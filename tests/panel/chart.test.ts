import { describe, it, expect, beforeEach } from 'vitest';
import Chart from 'chart.js/auto';

import { ChartComponent } from '../../src/ts/panel/chart';

describe("ChartComponent", () => {
  let chartComponent: ChartComponent;

  beforeEach(() => {
    chartComponent = new ChartComponent();
  });

  it("should initialise the chart with empty data", () => {
    let chartContainer: HTMLDivElement = chartComponent.render();
    // Assert the container's id is "chart"
    expect(chartContainer.id).toBe("chart");
    // Assert the canvas id is rendered as expected
    expect(chartContainer.querySelector("canvas")).not.toBeNull();
    expect(chartContainer.firstElementChild!.id).toBe("readings");
    // Assert only one chart instance is created
    expect(Object.keys(Chart.instances).length).toBe(1);
    // Verify that there is no data
    expect(Chart.instances[0].config.data.labels).toStrictEqual([]);
    expect(Chart.instances[0].config.data.datasets[0].data).toStrictEqual([]);
  });

  // WIP: Test of update method. Figuring out how to handle jsdom interaction with document
});