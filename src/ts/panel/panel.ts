import { Container } from '../utils/container';
import { DropdownComponent, MeasuringStation } from './dropdown';

/**
 * This component sets up a panel containing the web app's functionality.
*/
export class PanelComponent {
  private panelContainer: Container;

  /**
    * Constructor.
  */ constructor() {
    /// Set up the panel container
    this.panelContainer = new Container("panel", "h1", "UK Flood Tracker");
    // Create a nested dropdown container
    let dropdownContainer: Container = new Container("station-container", "p", "Select a station from the following to view their measures:");
    let dropdownElement: DropdownComponent = new DropdownComponent("station-selector", this.getStationData());
    dropdownContainer.renderContent(dropdownElement.render());
    this.panelContainer.renderContent(dropdownContainer.getContainer());
  }

  /**
    * Renders the panel component into the parent element.
    * @param {HTMLElement} parentElement - The parent element to attach this panel component.
    * @returns {void}
  */ public render(parentElement: HTMLElement): HTMLDivElement {
    return parentElement.appendChild(this.panelContainer.getContainer());
  }

  /**
    * Get and process the station data from API for this application.
    * @returns {MeasuringStation[]} an array of the stations' data.
  */ private getStationData(): MeasuringStation[] {
    // Hardcoded for now, but will be updated with API calls
    let measuringStations: MeasuringStation[] = [
      { id: '1', name: 'Station A' },
      { id: '2', name: 'Station B' },
      { id: '3', name: 'Station C' },
    ];
    return measuringStations;
  }
}