import { Container } from '../utils/container';
import { Notification } from '../utils/notification';
import { AccessClient } from '../utils/access_client';
import { DropdownComponent, MeasuringStation } from './dropdown';

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
      let loadingNotice: Notification = new Notification("Retrieving station data from API...");
      this.dropdownContainer.renderContent(loadingNotice.render());
      let stations = await this.getStationData();
      loadingNotice.hideNotification();
      let dropdownElement: DropdownComponent = new DropdownComponent("station-selector", stations);
      this.dropdownContainer.renderContent(dropdownElement.render());
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
        name: item.label,
      };
    });
    return measuringStations;
  }
}