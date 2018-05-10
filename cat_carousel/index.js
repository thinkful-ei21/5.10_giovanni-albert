'use strict';

function listenerFunction() {

  $('.thumbnail').on('click', function(event){

    const imageSrc = $(this).find('img').attr('src');
    const imageAlt = $(this).find('img').attr('alt');

    console.log(imageSrc);
    console.log(imageAlt);

    $('.hero img').attr('src', imageSrc)
                  .attr('alt', imageAlt);
  });

}

$(listenerFunction);