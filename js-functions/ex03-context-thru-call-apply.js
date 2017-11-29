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


// EXAMPLE 1: Specify Context through Call() and Apply():
// =============================================================================
// Since the problem is that we lost the context of this function when invoked,
// we can use "call" and "apply" method of JavaScript Function to specify the
// right context then invoke. The first argument of "call" and "apply" is the
// context object, in this case it's our "shaunxu" variant. The following
// arguments are the calling parameters. The only different between "call" and
// "apply" is, you can pass parameters for following arguments to "call",
// while you can pass parameters as an array to "apply".

// Let's change our code to invoke "say" through "call" and "apply".

var tom = new Person('Tom', 'Smith');
var func = tom['say'];

console.log(func.call(tom, 'Hello World using Call function'));
console.log();

console.log(func.apply(tom, ['Hello World using Apply function']));
console.log();