// Use .bind() when you want that function to later be called with a certain
// context, useful in events.
//
// Use .call() or .apply() when you want to invoke the funciton immediately,
// and modify the context.
//
// Call/apply call the function immediately, whereas bind returns a function
// that when later executed will have the correct context set for calling the
// original function. This way you can maintain context in async callbacks,
// and events.

function MyObject(element) {
  this.elem = element;
  element.addEventListener('click', this.onClick.bind(this), false);
};

MyObject.prototype.onClick = function (e) {
  var e = this; // do something with [t]...

  //without bind the context of this function wouldn't be a MyObject
  //instance as you would normally expect.
}

// I use it extensively in node.js for async callbacks that I want to pass
// a member method for, but still want the context to be the instance that
// started the async action.

// A simple, naive implementation of bind would be like:

Function.prototype.bind = function (context) {
  var fn = this;
  return function () {
    fn.apply(context, arguments);
  };
};