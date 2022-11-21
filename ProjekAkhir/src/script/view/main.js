'use strict';
import DataRequest from '../data/data-request.js';

function main() {
  const request = new DataRequest();
  async function getSentiment() {
    try {
      const response = await request.sentimentIt();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  async function getLanguage() {
    try {
      const response = await request.languageCheck();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  getLanguage();
  getSentiment();
}

export default main;
