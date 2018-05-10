'use strict';

function listenerFunction(){

  // function handleEvent(event) {
  //   let image = $(this).clone();
  //   $('.hero img').replaceWith(image);
  // }

  $('.thumbnail').on('click', 'img', function(event){
    let image = $(this).clone();
    $('.hero img').replaceWith(image);
  });

  $('.thumbnail').on('keypress', 'img', function(event){
    let image = $(this).clone();
    $('.hero img').replaceWith(image);
  });

}

$(listenerFunction);