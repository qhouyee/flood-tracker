import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

import { DomTreeHelper } from '../utils/dom_tree_helper';

/**
 * This interface represents a reading for water level measures that is relevant to our application.
*/
export interface WaterLevelReading {
  dateTime: string;
  value: number;
}

/**
 * This component sets up a panel containing the web app's functionality.
*/
export class ChartComponent {
  private chartContainer: HTMLDivElement;
  private chart: Chart;

  /**
   * Constructor.
  */ constructor() {
    // Set up the panel container
    this.chartContainer = DomTreeHelper.createDiv("chart");
    this.initChart()
  }

  /**
   * Renders the component for usage.
   * @returns {HTMLDivElement} the chart element.
  */ public render(): HTMLDivElement {
    return this.chartContainer;
  }

  /**
   * Updates the chart based on data inputs.
   * @param {WaterLevelReading[]} readings - An array of the water level readings returned from API. 
   * @returns {void}.
  */ public update(readings: WaterLevelReading[]): void {
    // Parse the readings as date time values
    this.chart.data.labels = readings.map(reading => Date.parse(reading.dateTime));
    this.chart.data.datasets[0].data = readings.map(reading => reading.value);
    this.chart.update();
  }

  /**
   * Initialise a new empty chart.
   * @returns {void}
  */ private initChart(): void {
    // Create a canvas for the chart and append it to the container
    let chartElement: HTMLCanvasElement = <HTMLCanvasElement>DomTreeHelper.createHtmlElement("canvas", "readings");
    this.chartContainer.appendChild(chartElement);
    // Initialise an empty chart
    this.chart = new Chart(
      chartElement,
      {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              data: []
            }
          ]
        },
        options: {
          scales: {
            x: {
              type: "timeseries",
              time: {
                displayFormats: {
                  hour: 'PPpp',
                }
              }
            },
            y: {
              ticks: {
                callback: function (value) {
                  return value + " m";
                }
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: "Time series of water level"
            },
            legend: {
              display: false,
            }
          }
        }
      }
    );
  }
}

