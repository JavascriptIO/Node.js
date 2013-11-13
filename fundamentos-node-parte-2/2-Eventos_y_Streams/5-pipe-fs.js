var peticion = require('request');
var fs = require('fs');

var url = 'https://raw.github.com/jashkenas/underscore/master/underscore.js';
peticion(url).pipe(fs.createWriteStream('underscore.js'));
