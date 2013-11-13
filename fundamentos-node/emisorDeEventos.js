var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('eventoDeLaMuerte', function(nombre){
    console.log(nombre + ' me ha llamado!');
});

emitter.emit('eventoDeLaMuerte', 'Oriol');


function Gato(nombre) {
    this.nombre = nombre;
    EventEmitter.call(this);
}

Gato.prototype.__proto__ = EventEmitter.prototype;

var ramon = new Gato('Ramon');

ramon.on('maulla', function() {
  console.log(this.nombre + ' maulla');
});

// setInterval(function(){
//     ramon.emit('maulla');
// }, 500);
