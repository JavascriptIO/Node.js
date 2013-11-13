var fs = require('fs');

fs.mkdir('./pepo', 0777, function(err) {
  if (err) throw err;

  fs.writeFile('./pepo/hola.txt', 'Hola Pepo', function(err) {
    if (err) throw err;
    console.log('Archivo creado con contenido:');

    fs.readFile('./pepo/hola.txt', 'UTF-8', function(err, data) {
      if (err) throw err;
      console.log(data);
    });
  });
  
  console.log(1)


});




