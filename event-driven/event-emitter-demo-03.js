var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var http = require('http');

emitter.on('get_page', function(url){
  http.get(url, function(res){
    emitter.emit('page_get_successful');
  }).on('error', function(){
    emitter.emit('page_get_fail');
  });
});

emitter.on('page_get_successful', function(data){
  console.log('page get was succesful');
});

emitter.on('page_get_fail', function(){
  console.log('page get failed');
});

emitter.emit('get_page', 'http://kapoor.io');