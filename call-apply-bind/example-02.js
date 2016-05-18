// It allows to set the value for this independent of how the function is called
// This is very useful when working with callbacks:

function sayHello(){
  alert(this.message);
}

var obj = {
   message : "hello"
};

setTimeout(sayHello.bind(obj), 1000);

// To achieve the same result with call would look like this:

function sayHello(){
  alert(this.message);
}

var obj = {
  message : "hello"
};

setTimeout(function(){sayHello.call(obj)}, 1000);