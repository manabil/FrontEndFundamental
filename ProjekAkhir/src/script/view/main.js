'use strict';
import DataRequest from '../data/data-request.js';
import $ from 'jquery';

function main() {
  const request = new DataRequest();

  $('#formText').on('submit', function (event) {
    event.preventDefault();
    let sentences = $('textarea').val();
    getSentiment(sentences);
  });

  function render(result) {
    $('.icon').text(result.emoji);
    $('.description').text(result.desc);
  }

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
