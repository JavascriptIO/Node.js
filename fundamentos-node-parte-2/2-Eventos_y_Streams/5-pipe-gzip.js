var peticion = require('request');
var fs = require('fs');
var zlib = require('zlib');

var url = 'https://raw.github.com/jashkenas/underscore/master/underscore.js';
peticion(url).pipe(zlib.createGzip()).pipe(fs.createWriteStream('underscore.js.gz'));
