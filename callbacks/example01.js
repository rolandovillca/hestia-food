var myCallback = function(err, data) {
    if (err) throw err; // Check for the error and throw if it exists.
    console.log('got data: ', data); // Otherwise proceed as usual.
};

var usingItNow = function(callback){
	// I dont want to throw an error, so I pass null for the error argument.
    callback(null, 'get it?');
}

// If we want to simulate an error case, we can define usingItNow like this
var usingItNow = function(callback) {
    var myError = new Error('My custom error!')
    callback(myError, 'get it?')
};

// The final usage is exactly the same as in above
usingItNow(myCallback)
