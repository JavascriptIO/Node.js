var EventEmitter = require('events').EventEmitter;

function pedirRecursos(n) {
  var emitter = new EventEmitter();

  process.nextTick(function() {
    emitter.emit('start');
    var contador = 0;
    var t = setInterval(function() {
      emitter.emit('item', ++contador);
      if (contador === n) {
        emitter.emit('end');
        clearInterval(t);
      }
    }, 10);
  });

  return emitter;
}

var r = pedirRecursos(9);

r.on('start', function() {
  console.log('He empezado');
});

r.on('item', function(i) {
  console.log('    Item ' + i + ' recibido');
});

r.on('end', function() {
  console.log('Proceso terminado ;)');
});
