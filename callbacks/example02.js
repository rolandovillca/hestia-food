function myNew(next) {
    console.log('I am the one who initiates callback');
    next('next', 'success');
}

myNew(function(err, res) {
    console.log('I got back from callback', err, res);
})