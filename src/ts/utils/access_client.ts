import axios from 'axios';

/**
 * This component provides methods for accessing the API.
*/
export class AccessClient {
  public static floodApiUrl: string = "https://environment.data.gov.uk/flood-monitoring/id/stations";

  /**
    * Fetch data from the specified API endpoint using a get request.
    * @param {string} apiUrl - The target API endpoint.
    * @returns {Promise<any>}
  */ static async fetchData(apiUrl: string): Promise<any> {
    try {
      let response: axios.AxiosResponse = await axios.get(apiUrl);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Failed to fetch data. Status code: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
}