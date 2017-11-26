callBackFunction('data', function(err, response){
    console.log('Response:', response)
});

// callbackfunction
function callBackFunction(data, callback) {
    // Write your logic and return your result as
    callback('', 'result'); // if nor error
    callback('error', ''); // if error
};
