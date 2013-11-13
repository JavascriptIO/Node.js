var peticion = require('request');

peticion('http://es.wikipedia.org/wiki/Nodejs').pipe(process.stdout);
