var events = require('events'); // Import events module
var eventEmitter = new events.EventEmitter(); // Create an eventEmitter object:

var connectHandler = function () {
  console.log('Connection succesful');
  eventEmitter.emit('data_received'); // Fire the data_received event
}

// Bind the connection event with the handler:
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function:
eventEmitter.on('data_received', function () {
  console.log('data received succesfully');
});

// Fire the connection event:
eventEmitter.emit('connection');

console.log('Program ended.');