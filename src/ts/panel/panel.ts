import { Container } from '../utils/container';
import { Notification } from '../utils/notification';
import { AccessClient } from '../utils/access_client';
import { DropdownComponent, MeasuringStation } from './dropdown';
import { ChartComponent, WaterLevelReading } from './chart';

/**
 * This component sets up a panel containing the web app's functionality.
*/
export class PanelComponent {
  private panelContainer: Container;
  private dropdownContainer: Container;

  /**
   * Constructor.
  */ constructor() {
    // Set up the panel container
    this.panelContainer = new Container("panel", "h1", "UK Flood Tracker");
    // Create a nested dropdown container
    this.dropdownContainer = new Container("station-container", "p", "Select a station from the following to view their measures:");
    this.panelContainer.renderContent(this.dropdownContainer.getContainer());
    // Initialise the dropdown options with API data
    this.initialiseDropdown();
  }

  /**
   * Renders the panel component into the parent element.
   * @param {HTMLElement} parentElement - The parent element to attach this panel component.
   * @returns {void}
  */ public render(parentElement: HTMLElement): HTMLDivElement {
    return parentElement.appendChild(this.panelContainer.getContainer());
  }

  /**
   * Initialises the dropdown component with measuring station API data.
   *
   * This method fetches measuring station data asynchronously and then
   * populates the dropdown component with the retrieved data.
   *
   * @throws {Error} If there is an error during data retrieval or dropdown initialisation.
  */ private async initialiseDropdown(): Promise<void> {
    try {
      // Create a loading notification while waiting for data
      let loadingNotice: Notification = new Notification("Retrieving station data from API...");
      this.dropdownContainer.renderContent(loadingNotice.render());
      // Once data is retrieve, hide the notification
      let stations = await this.getStationData();
      loadingNotice.hideNotification();
      // Populate a new dropdown component with the retrieved data
      let dropdownElement: HTMLSelectElement = new DropdownComponent("station-selector", stations).render();
      // Render the dropdown component as the next child of the container
      this.dropdownContainer.renderContent(dropdownElement);
      // Create an empty chart element
      let chartElement: ChartComponent = new ChartComponent();
      this.dropdownContainer.renderContent(chartElement.render());
      // Add an event listener to populate the chart whenever users select the option
      dropdownElement.addEventListener("change", () => {
        let selectedOption: HTMLOptionElement = dropdownElement.options[dropdownElement.selectedIndex];
        this.populateChart(chartElement, selectedOption.value);
      });
    } catch (error) {
      throw new Error(`Error initialising dropdown: ${error}`);
    }
  }

  /**
    * An async method to get and process the station data from the API for this application.
    * @returns {Promise<MeasuringStation[]>} A promise that resolves to an array of measuring stations.
  */ private async getStationData(): Promise<MeasuringStation[]> {
    // Fetch the data and await for it to return results
    let result = await AccessClient.fetchData(AccessClient.floodApiUrl);
    console.log("List of measurement station have been successfully retrieved.")
    // Note that the API return the station metadata in the "items" key
    // Parse the results into an array of measuring station
    let measuringStations: MeasuringStation[] = result.items.map(item => {
      return {
        id: item.notation,
        name: this.transformString(item.label) + " [" + item.notation + "]",
      };
    });
    return measuringStations;
  }

  /**
   * Transform the string to a PascalCase syntax with space between them.
   * @param {any} input - The input element to transform. Can be either an array or string.
   * @returns {string} A label of the string.
  */ private transformString(input: any): string {
    if (typeof input === "string") {
      // Split the input string into words using spaces as a delimiter
      let words: string[] = input.toLowerCase().split(' ');
      // Capitalise the first character of each word
      let capitalisedWords: string[] = words.map(word => {
        if (word.length === 0) {
          return ''; // Handle multiple spaces
        }
        return word[0].toUpperCase() + word.slice(1);
      });
      // Join the capitalised words back together with spaces
      return capitalisedWords.join(' ');
    } // If the input is not a string, but rather an array, return its first value
    else { return input[0]; }
  }

    /**
    * An async method to populate the chart with the readings of the specified station from the API.
    * @returns {Promise<void>}
  */ private async populateChart(chartElement: ChartComponent, stationId: string): Promise<void> {
    // Dynamically generate the url for the water level readings
    let apiUrl: string = `${AccessClient.floodApiUrl}/${stationId}/readings?_sorted&_limit=50&parameter=level`;
    // Fetch the data and await for it to return results
    console.log(`Retrieving readings from API for ${stationId}...`);
    let result = await AccessClient.fetchData(apiUrl);
    console.log("Readings have been successfully retrieved.")
    // Process the readings into an array and update the chart
    let readings: WaterLevelReading[] = result.items.map(item => {
      return {
        dateTime: item.dateTime,
        value: item.value,
      };
    });
    chartElement.update(readings)
  }
}

