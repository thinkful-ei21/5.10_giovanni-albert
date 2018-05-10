'use strict';

function listenerFunction(){
  $('.thumbnail').on('click', 'img', function(event){
    
    let image = $(this).clone();
    
    console.log(image)
 //   $(this)
    $('.hero img').replaceWith(image);

  });

}


$(listenerFunction);