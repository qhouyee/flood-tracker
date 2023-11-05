import { DomTreeHelper } from '../utils/dom_tree_helper';

/**
 * This interface represents the data of measuring station that is relevant to our application.
*/
export interface MeasuringStation {
  id: string;
  name: any;
}

/**
 * This component sets up a dropdown component for users to select their choice.
*/
export class DropdownComponent {
  private selectElement: HTMLSelectElement;

  /**
    * Constructor.
    * @param {string} id - The selector's id.
    * @param {MeasuringStation[]} stations - An array of measuring stations.
  */ constructor(id: string, stations: MeasuringStation[]) {
    this.selectElement = <HTMLSelectElement>DomTreeHelper.createHtmlElement("select", id);
    // Adds a default placeholder option
    this.selectElement.appendChild(this.createOptionElement("", "Select your station", true));
    stations.forEach((station) => {
      this.selectElement.appendChild(this.createStationOption(station));
    });
  }

  /**
    * Renders the component for usage.
    * @returns {HTMLSelectElement} the dropdown menu.
  */ public render(): HTMLSelectElement {
    return this.selectElement;
  }

  /**
    * Creates an option for the measuring station within the select HTML element.
    * @param {MeasuringStation} station - The specific measuring station to create an option for.
    * @returns {HTMLOptionElement} the created option.
  */ private createStationOption(station: MeasuringStation): HTMLOptionElement {
    return this.createOptionElement(station.id, station.name);
  }

  /**
    * Creates an option for the select HTML element.
    * @param {string} value - The value of the option.
    * @param {string} label - The display label of the option users see.
    * @param {boolean} isDefault - An optional boolean indicating if this option is the default. Defaults to false if not indicated.
    * @returns {HTMLOptionElement} the created option.
  */ private createOptionElement(value: string, label: string, isDefault: boolean = false): HTMLOptionElement {
    let option: HTMLOptionElement = <HTMLOptionElement>DomTreeHelper.createHtmlElement("option");
    option.value = value;
    option.textContent = label; // The display name shown to users
    // If this is the default option, it should be disabled and the first label shown to users
    option.disabled = isDefault;
    option.selected = isDefault;
    return option;
  }
}