$(document).ready(function() {
  $('.read').on('click',showReadInput);
  $('.create').on('click',showCreateInput);

  $('#readButton').on('click',readMessage);
  $('#createButton').on('click',createMessage);

  $('.goBackButton').on('click',showHome);
});


function readMessage() {
  $('.read-result').html('message read');
}

function createMessage() {
  $('.create-result').html('message created');
}

function showReadInput() {
  $('.container-options').hide();
  $('.read-message').show();
}

function showCreateInput() {
  $('.container-options').hide();
  $('.create-message').show();
}

function showHome() {
  $('.app-result').html('');
  $('.tab').hide();
  $('.container-options').show();
}
