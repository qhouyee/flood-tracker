import { DomTreeHelper } from '../utils/dom_tree_helper';
import { LeafletMap } from './leaflet_map';

/**
 * This handler interacts with the map instance created.
*/
export class MapHandler {
  static MAP_CONTAINER: LeafletMap;

  /**
   * Initialise a new map. 
   * @returns {HTMLDivElement} the map container created.
  */ static initialiseMap(): HTMLDivElement {
    let mapElement: HTMLDivElement = DomTreeHelper.createDiv("map");
    this.MAP_CONTAINER = new LeafletMap(mapElement, 51.505, -0.09, 13);
    return mapElement;
  }
}

