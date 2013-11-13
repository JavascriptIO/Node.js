var peticion = require('request');

var streamDeLectura = peticion('http://www.desarrolloweb.com');

streamDeLectura.on('data', function(trozo) {
  console.log('>>>Datos>>> ' + trozo);
});

streamDeLectura.on('end', function() {
  console.log('Fin de la transmisión')
})
