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


// EXAMPLE 01: Set Context through Bind():
// =============================================================================
// With "bind()" method, we can set the context of a function. So in the future
// we can invoke this function variant without specifying the context when invoked.

// In the code below I retrieved the function from its key ("say") and invoked
// the "bind" method to set "shaunxu" object as its context.
// Then invoke this function variant directly.

var tom = new Person('Tom', 'Smith');
var func = tom['say'].bind(tom);

console.log('Hello World');
console.log();