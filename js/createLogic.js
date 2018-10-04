function createAlgorithm(message, password) {

  var inputCreate = new UserInput(message, password);

  inputCreate.removeSpaces();
  inputCreate.adjustPassword();
  inputCreate.encrypt();

  return inputCreate.result;

  return 1;
}
