var os = require('os');

var obtenerMb = function(bytes) {
    return Math.round(bytes / 1024 / 1024 * 100) / 100;
};

console.log('Host: ' + os.hostname());
console.log(obtenerMb(os.freemem()) + ' de ' + obtenerMb(os.totalmem()) + ' Mb libres');
