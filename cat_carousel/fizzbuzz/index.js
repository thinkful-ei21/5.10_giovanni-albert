'use strict';

// function to handle user input
function handleChoice() {
  $('form').on('submit', function(event) {
    event.preventDefault();

    let userNum = Number($('#number-choice').val());
    let resultArray = fizzBuzz(userNum);

    generateHTML(resultArray);

    $('#number-choice').val(``);
  })
}


// implement fizzbuzz function
function fizzBuzz(num) {
  let resultArray = [];
  for(let i = 1; i <= num; i++) {
    if(i % 3 === 0 && i % 5 === 0) resultArray.push('fizzbuz');
    else if(i % 3 === 0) resultArray.push('fizz');
    else if(i % 5 === 0) resultArray.push('buzz');
    else resultArray.push(i);
  }
  return resultArray;
}


// implement function to generate result onto html
function generateHTML(resultArray) {
  resultArray.forEach(function(each) {

    if(each === 'fizz') {
      $('.js-results').append(`<div class="fizz-buzz-item fizz">
        <span>fizz</span>
      </div>`);
    }

    else if(each === 'buzz') {
      $('.js-results').append(`<div class="fizz-buzz-item buzz">
          <span>buzz</span>
        </div>`)}

    else if(each === 'fizzbuzz') {
      $('.js-results').append(`<div class="fizz-buzz-item fizzbuzz">
        <span>fizzbuzz</span>
      </div>`)
    }

    else {
      $('.js-results').append(`<div class="fizz-buzz-item">
        <span>${each}</span>
      </div>`);
    }
  });


}


// push result to html

$(handleChoice);