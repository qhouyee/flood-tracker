import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * This component sets up a Leaflet Map for the map handler to modify.
*/
export class LeafletMap {
  private map: L.Map;

  /**
   * Constructor.
   * @param {HTMLElement} mapContainer - The map container for attaching the leaflet map.
   * @param {number} initialLat - The initial latitude of the map.
   * @param {number} initialLng - The initial longitude of the map.
   * @param {number} zoomLevel - The zoom level of the map.
  */ constructor(mapContainer: HTMLElement, initialLat: number, initialLng: number, zoomLevel: number) {
    // Create a map centered at a specific latitude and longitude
    this.map = L.map(mapContainer).setView([initialLat, initialLng], zoomLevel);
    // Add open street map as base layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }
}

