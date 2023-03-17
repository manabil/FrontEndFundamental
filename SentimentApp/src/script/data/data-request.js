'use strict';
import axios from 'axios';

/**
 * Class of Data Request
 */
class DataRequest {
  /**
   * Constructor of Axios class
   */
  constructor() {
    this.request = axios.create({
      baseURL: 'https://text-analysis12.p.rapidapi.com',
      headers: {
        'X-RapidAPI-Key': process.env.SENTIMENT_API_KEY,
        'X-RapidAPI-Host': process.env.SENTIMENT_API_HOST,
      },
    });
  }

  /**
   * Get sentiment of sentences
   * @param {string} textInput Input of sentences
   * @return {object} Object response
   */
  async sentimentIt(textInput) {
    const data = {
      language: 'english',
      text: `${textInput}`,
    };

    try {
      const isEnglish = await this.languageCheck(textInput);
      if (isEnglish === true) {
        const response = await this.request.post(
            '/sentiment-analysis/api/v1.1',
            data,
        );
        const sentiment = response.data.sentiment;
        if (sentiment === 'positive') {
          return {
            result: sentiment,
            emoji: '😄',
            desc: 'Yeay, your sentiment is positive',
          };
        } else if (sentiment === 'neutral') {
          return {
            result: sentiment,
            emoji: '😐',
            desc: 'Your sentiment is neutral',
          };
        }
        return {
          result: sentiment,
          emoji: '😠',
          desc: 'Why do you think that ?',
        };
      } else {
        throw isEnglish;
      }
    } catch (isEnglish) {
      return isEnglish;
    }
  }

  /**
   * Check language of sentences
   * @param {string} textInput Input of sentences
   * @return {boolean} Object of response
   */
  async languageCheck(textInput) {
    const data = {text: `${textInput}`};

    try {
      const response = await this.request.post(
          '/language-detection/api/v1.1',
          data,
      );
      const isEnglish = 'en' in response.data.language_probability;
      if (isEnglish) {
        if (response.data.language_probability.en <= 0.5) {
          return {
            emoji: '🇬🇧 ⁉️',
            desc: 'Is sentences in english ? Please check your sentences',
          };
        }
        return true;
      } else {
        return {emoji: '🇬🇧  ❗', desc: 'Please use english sentence instead'};
      }
    } catch (error) {
      return error;
    }
  }
}

export default DataRequest;
