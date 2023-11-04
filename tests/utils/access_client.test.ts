import { describe, expect, it, vi } from 'vitest';
import axios from 'axios';

import { AccessClient } from '../../src/ts/utils/access_client';

vi.mock('axios');

describe("AccessClient", () => {
  let apiUrl:string = 'https://example.com/api/data'; 

  describe("fetchData", () => {
    it("should fetch the mock data", async () => {
      // Define the data you want to mock in the response
      let dataMock = { key: "value" };
      // Mock the axios.get method to return the data you defined
      axios.get.mockResolvedValue({
        data: dataMock,
        status: 200,
      });

      // Call the fetchData method and check the result
      const result = await AccessClient.fetchData(apiUrl);
      // Assert that the result matches the data you mocked
      expect(result).toEqual(dataMock);
    })
  })
});