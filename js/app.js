$(document).ready(function() {
  $('.read').on('click',showReadInput);
  $('.create').on('click',showCreateInput);

  $('#readButton').on('click',readMessage);
  $('#createButton').on('click',createMessage);

  $('.goBackButton').on('click',showHome);
  $('.close').on('click',closeResult);
});


function readMessage() {
  $('.result').html('');
  
  var message = document.getElementById('readMessage').value;
  var password = document.getElementById('readPassword').value;
  var result;

  result = readAlgorithm(message, password);

  $('.result').append(result);
  $('.app-result').show();
}

function createMessage() {
  $('.result').html('');
  
  var message = document.getElementById('createMessage').value;
  var password = document.getElementById('createPassword').value;
  var result;

  result = createAlgorithm(message, password);

  $('.result').append(result);
  $('.app-result').show();
}

function showReadInput() {
  $('.container-options').hide();
  $('.read-message').fadeIn();
}

function showCreateInput() {
  $('.container-options').hide();
  $('.create-message').fadeIn();
}

function showHome() {
  $('.result').html('');
  $('.app-result').hide();
  $('.tab').hide();
  $('.container-options').fadeIn();
}

function closeResult() {
  $('.app-result').hide();
}
