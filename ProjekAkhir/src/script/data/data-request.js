'use strict';
import axios from 'axios';

class DataRequest {
  constructor() {
    this.request = axios.create({
      baseURL: 'https://text-analysis12.p.rapidapi.com',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST,
      },
    });
  }

  async sentimentIt() {
    const data = {
      language: 'english',
      text: 'Falcon 9s first stage has landed on the Of Course I Still Love You droneship - the 9th landing of this booster',
    };

    try {
      const response = await this.request.post('/sentiment-analysis/api/v1.1', data);
      return response;
    } catch (error) {
      return error;
    }
  }

  async languageCheck() {
    const data = { text: 'Hello how are you? Have you heard about SpaceX?' };

    try {
      const response = await this.request.post('/language-detection/api/v1.1', data);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default DataRequest;
