var Recurso = require('./recurso');

var r = new Recurso(9);

r.on('start', function() {
  console.log('He empezado');
});

r.on('item', function(i) {
  console.log('    Item ' + i + ' recibido');
});

r.on('end', function() {
  console.log('Proceso terminado ;)');
});
