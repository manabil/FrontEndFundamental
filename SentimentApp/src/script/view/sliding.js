'use strict';
import $ from 'jquery';

let clicked = true;

$('.hamburger').on('click', () => {
  $('.menu-list').slideToggle();
  $('.menu a').on('click', () => {
    animationToggle();
    $('.menu-list').slideUp();
  });
  animationToggle();

  /**
   * Transition hamburger menu
   */
  function animationToggle() {
    if (clicked) {
      clicked = false;
      $('.hamburger')
          .children()
          .first()
          .css({rotate: '45deg', translate: '-5px 10px'});
      $('.hamburger').children().eq(1).css('scale', '0');
      $('.hamburger')
          .children()
          .last()
          .css({'transform-origin': '0 0', 'rotate': '-45deg'});
    } else {
      clicked = true;
      $('.hamburger')
          .children()
          .first()
          .css({rotate: '0deg', translate: '0px 0px'});
      $('.hamburger').children().eq(1).css('scale', '1');
      $('.hamburger')
          .children()
          .last()
          .css({'transform-origin': '0 0', 'rotate': '0deg'});
    }
  }
});
