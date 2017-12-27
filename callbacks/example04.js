function doSomething(callback) {
    // Call the callback
    callback('stuff', 'goes', 'here');
}

function foo(a, b, c) {
    // I am in the callback
    alert(a + ', ' + b + ', ' + c);
}

doSomething(foo);