$(document).ready(function() {
  $('.read').on('click',showReadInput);
  $('.create').on('click',showCreateInput);

  $('#readButton').on('click',readMessage);
  $('#createButton').on('click',createMessage);

  $('.goBackButton').on('click',showHome);
});


function readMessage() {
  var message = document.getElementById('readMessage').value;
  var password = document.getElementById('readPassword').value;
  var result;

  result = readAlgorithm(message, password);

  $('.read-result').html(result);
}

function createMessage() {
  var message = document.getElementById('createMessage').value;
  var password = document.getElementById('createPassword').value;
  var result;

  result = createAlgorithm(message, password);

  $('.create-result').html(result);
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
