'use strict';
import axios from 'axios';

class DataSource {
  static async searchClub(keyword) {
    try {
      const response = await axios.get(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`);
      console.log(response);
      return response.data.teams;
    } catch (error) {
      return `${keyword} is not found`;
    }
  }
}

export default DataSource;
