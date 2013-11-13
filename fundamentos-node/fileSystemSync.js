var fs = require('fs');

fs.mkdirSync('./pepo', 0777);
fs.writeFileSync('./pepo/hola.txt', 'Hola Pepo');
var data = fs.readFileSync('./pepo/hola.txt', 'UTF-8');
console.log('Archivo creado con contenido:');
console.log(data);
