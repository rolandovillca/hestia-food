// They all attach this into function (or object) and the difference
// is in the function invocation.

// EXAMPLE 1:
// =============================================================================
// call attaches "this" into function and executes the function immediately:

var person = {
  name: 'James Smith',
  hello: function (arg) {
    console.log(this.name + ' says hello ' + arg);
  }
}

person.hello.call(person, 'world'); // output: 'James Smith says hello world'

// EXAMPLE 2:
// =============================================================================
// bind attaches "this" into function and it needs to be invoked separately:

var person = {
  name: 'James Smith',
  hello: function (arg) {
    console.log(this.name + ' says hello ' + arg);
  }
}

var helloFunc1 = person.hello.bind(person);
helloFunc1('world'); // output: 'James Smith says hello world'

// Or like this:

var helloFunc2 = person.hello.bind(person, 'world');
helloFunc2(); // output: 'James Smith says hello world'

// EXAMPLE 3:
// =============================================================================
// apply is similar to call except that it takes an array-like object
// instead of listing the arguments out one at a time:

function PersonContainer () {
  var person = {
    name: 'James Smith',
    hello: function () {
      console.log(this.name + ' says hello ' + arguments[1]);
    }
  }

  person.hello.apply(person, arguments);
}

PersonContainer('world', 'mars');
// output: 'James Smith says hello mars'
// note: arguments[0] = "world" , arguments[1] = "mars"