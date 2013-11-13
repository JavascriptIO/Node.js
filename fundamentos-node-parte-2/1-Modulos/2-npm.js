var request = require('request');

 request('http://www.orioltorras.cat', function(err, response, body) {
     if (!err && response.statusCode === 200){
         console.log(body);
     }
 });
