'use strict';


function main(){

//console.log($('#js-shopping-list-form'))
  $('#js-shopping-list-form').submit(addItem);
  $('.shopping-list').on('click', '.shopping-item-delete', deleteItem );
  $('.shopping-list').on('click', '.shopping-item-toggle', toggleItem );

}


function toggleItem(event){
  $(event.currentTarget).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');
}


function deleteItem(event){
  $(event.currentTarget).parents('li').remove();
}


function addItem(event){
  event.preventDefault();
  //console.log($(event.currentTarget).find('input').val())
  let newItem = $(event.currentTarget).find('input').val();
  $('.shopping-list').append(
    `<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>`
  );
}




$(main);