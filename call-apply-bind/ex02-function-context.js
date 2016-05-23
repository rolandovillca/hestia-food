// Assume we have a class named "Person" as below.
// The constructor accepts 2 parameters for the person's firstName and lastName:
var Person = function (firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;
};

Person.prototype.say = function (msg) {
  var message = this._firstName + ' ' + this._lastName + ' said ' + msg;
  return '[' + this + ']: ' + message;
};

Person.prototype.toString = function () {
  return '[object Person]'
};


// EXAMPLE 1:
// =============================================================================
// We assigned the value to the variants "_firstName" and "_lastName" without
// defined so that they will became members under the global context.
// The code only worked under the non-strict mode.
_firstName = 'Kun';
_lastName = 'Zhang';

var tom = new Person('Tom', 'Smith');
var func = tom['say'];
console.log(func('Hello World'));
console.log();