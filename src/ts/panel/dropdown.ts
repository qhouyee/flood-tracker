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
    stations.forEach((station) => {
      this.selectElement.appendChild(this.createOptionElement(station));
    });
  }

  /**
    * Renders the component for usage.
    * @returns {HTMLSelectElement} the dropdown menu.
  */ public render(): HTMLSelectElement {
    return this.selectElement;
  }

  /**
    * Creates an option for the select HTML element.
    * @param {MeasuringStation} station - The specific measuring station to create an option for.
    * @returns {HTMLOptionElement} the created option.
  */ private createOptionElement(station: MeasuringStation): HTMLOptionElement {
    let option: HTMLOptionElement = <HTMLOptionElement>DomTreeHelper.createHtmlElement("option");
    option.value = station.id;
    option.textContent = station.name; // The display name shown to users
    return option;
  }
}