var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringBell = function () {
  console.log('ring ring ring');
};

eventEmitter.on('doorOpen1', ringBell);

eventEmitter.on('doorOpen2', function (ring) {
  console.log(ring);
});

eventEmitter.emit('doorOpen1'); //No needed the second argument.

eventEmitter.emit('doorOpen2', 'rong rong rong rong'); //We just pass the arguments in the emit() method.