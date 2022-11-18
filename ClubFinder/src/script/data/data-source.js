'use strict';
import clubs from './clubs.js';

class DataSource {
  static async searchClub(keyword) {
    try {
      const response = await fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`);
      const responseJSON = await response.json();
      return responseJSON.teams;
    } catch (error) {
      return `${keyword} is not found`;
    }
  }
}

export default DataSource;
