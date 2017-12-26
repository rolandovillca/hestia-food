var EventEmitter = require('events').EventEmitter

var ee = new EventEmitter();

ee.on('newListener', function(evtName, fn){ console.log('New listener ' + evtName); });
ee.on('removeListener', function(evtName){ console.log('Removed listener ' + evtName); });

function foo(){}

ee.on('save-user', foo);
ee.removeListener('save-user', foo)
