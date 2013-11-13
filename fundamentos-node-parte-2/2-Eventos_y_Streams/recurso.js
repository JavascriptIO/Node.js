var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Recurso = function(n) {
  var self = this;

  process.nextTick(function() {
    self.emit('start');
    var contador = 0;
    var t = setInterval(function() {
      self.emit('item', ++contador);
      if (contador === n) {
        self.emit('end');
        clearInterval(t);
      }
    }, 10);
  });
};

util.inherits(Recurso, EventEmitter);
module.exports = Recurso;
