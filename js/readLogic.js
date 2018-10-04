// var test1 = "Aa".charCodeAt(0);
function readAlgorithm(message, password) {

  var inputRead = new UserInput(message, password);

  inputRead.removeSpaces();
  inputRead.adjustPassword();
  inputRead.decrypt();

  return inputRead.result;
}
