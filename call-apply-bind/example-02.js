// It allows to set the value for this independent of how the function is called
// This is very useful when working with callbacks:

// EXAMPLE 1:
// =============================================================================

function sayHello1 () {
  console.log(this.message);
}

var obj1 = {
  message: 'Hello1'
}

setTimeout(sayHello1.bind(obj1), 1000);


// EXAMPLE 2:
// =============================================================================
// To achieve the same result with call would look like this:

function sayHello2 () {
  console.log(this.message);
}

var obj2 = {
  message: 'Hello2'
}

setTimeout(function () { sayHello2.call(obj2); }, 1000)