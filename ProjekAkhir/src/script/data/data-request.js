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

  async sentimentIt(textInput = 'Im very happy to be with you') {
    const data = {
      language: 'english',
      text: `${textInput}`,
    };

    try {
      const response = await this.request.post('/sentiment-analysis/api/v1.1', data);
      const sentiment = response.data.sentiment;
      if (sentiment == 'positive') {
        return { result: sentiment, desc: 'Yeay, your sentiment is positive' };
      } else if (sentiment == 'neutral') {
        return { result: sentiment, desc: 'Your sentiment is neutral' };
      }
      return { result: sentiment, desc: 'Why do you think that ?' };
    } catch (error) {
      return error;
    }
  }

  async languageCheck(textInput = 'I want to be senior programmer in google') {
    const data = { text: `${textInput}` };

    try {
      const response = await this.request.post('/language-detection/api/v1.1', data);
      const isEnglish = 'en' in response.data.language_probability;
      if (isEnglish) {
        if (response.data.language_probability.en <= 0.5) {
          throw 'Is sentences in english ? Please check your sentences';
        }
        return true;
      } else {
        throw 'Your sentences not in english, please change english instead';
      }
    } catch (error) {
      return error;
    }
  }
}

export default DataRequest;
