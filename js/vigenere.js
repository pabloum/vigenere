var UserInput = function(message, password) {
  this.message  = message;
  this.password = password;
  this.result   = "";
}

UserInput.prototype.encrypt = function () {
  var message  = this.message.toUpperCase();
  var password = this.password.toUpperCase();
  var result   = '';

  for (var i = 0; i < message.length; i++) {
    var xi = message.charCodeAt(i) - 65;
    var ki = password.charCodeAt(i) - 65;
    var zi = ((xi + ki) % 26) + 65;
    result = result + String.fromCharCode(zi);
  }
  this.result = result;
};

UserInput.prototype.decrypt = function () {
  var message  = this.message.toUpperCase();
  var password = this.password.toUpperCase();
  var result   = '';

  for (var i = 0; i < message.length; i++) {
    var ci = message.charCodeAt(i) - 64;
    var ki = password.charCodeAt(i) - 64;
    var zi;
    if ((ci - ki) >= 0) {
      zi = ((ci - ki) % 26) + 65;
    } else {
      zi = ((ci - ki + 26) % 26) + 65;
    }
    result = result + String.fromCharCode(zi);
  }
  this.result = result;
};

UserInput.prototype.removeSpaces = function () {
  this.message  = this.message.replace(/ /g, "");
  this.password = this.password.replace(/ /g, "");
};

UserInput.prototype.adjustPassword = function () {
  var message  = this.message;
  var password = this.password;

  if (password.length > message.length) {
    this.password = password.substring(0, message.length);
  } else if (password.length < message.length){
    var count = 0;
    for (var i = this.password.length; i < message.length; i++) {
      if (count === this.password.length) {
        count = 0;
      }
      password = password + password[count];
      count++;
    }
  }
  this.password = password;
};
