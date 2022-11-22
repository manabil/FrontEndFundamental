'use strict';
import DataRequest from '../data/data-request.js';
import $ from 'jquery';

/**
 * Main function to request API
 */
function main() {
  const request = new DataRequest();

  $('#formText').on('submit', function(event) {
    event.preventDefault();
    const sentences = $('textarea').val();
    getSentiment(sentences);
  });

  /**
   * Render result from response
   * @param {object} result Object of respone
   */
  function render(result) {
    $('.icon').text(result.emoji);
    $('.description').text(result.desc);
  }

  /**
   * Get response of sentiment
   * @param {string} text Input sentences
   * @return {void} error or render()
   */
  async function getSentiment(text) {
    try {
      const response = await request.sentimentIt(text);
      render(response);
    } catch (error) {
      return error;
    }
  }
}

export default main;
