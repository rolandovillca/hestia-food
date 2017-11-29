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

// EXAMPLE 1: Then I initialized this class and invoke "say" as below:
// =============================================================================
var tom = new Person('Tom', 'Smith');
console.log(tom.say('Hello'));
console.log();


// EXAMPLE 2: Pass Function as a Variant:
// =============================================================================
// Now let's do something different. As you should know we can pass a function
// as a variant, just like string, number and Boolean, etc. So I will retrieve
// "say" function by its name (which is "say") and set into a local variant,
// then invoke this variant.
var func = tom['say'];
console.log(func('Hello again'));
console.log();

// The executing result was unexpected. Even I retrieved this function from the
// instance of my class "Person", when invoked you will find "_firstName" and
// "_lastName" were all undefined, and "this" was not my "Person" instance,
// instead it's "[object global]".