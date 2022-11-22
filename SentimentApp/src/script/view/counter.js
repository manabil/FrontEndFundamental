'use strict';
import $ from 'jquery';

$('textarea').on('keydown', () => {
  const count = $('textarea').val().length + 1;
  $('.counter').text(`${count}/1000`);
  if (count >= 900) {
    $('.counter').css({'color': 'red', 'font-weight': '400'});
  } else if ((count >= 700) & (count < 900)) {
    $('.counter').css({'color': 'orange', 'font-weight': '400'});
  } else {
    $('.counter').css({'color': '#6b728e', 'font-weight': '400'});
  }
});
