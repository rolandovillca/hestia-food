var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringBell = function () {
  console.log('ring ring ring');
};

eventEmitter.on('doorOpen1', ringBell);

eventEmitter.on('doorOpen2', function (ring) {
  console.log(ring);
});

// Here no needed the second argument.
eventEmitter.emit('doorOpen1');

// Here we need to pass the second argument in the emit() method.
eventEmitter.emit('doorOpen2', 'rong rong rong rong');