const maxApi = require('max-api');

// httpモジュールを読み込み、インスタンスを生成
var http = require('http');
// netモジュールを読み込み、インスタンスを作成
var net = require('net');

var util = require('util');

maxApi.addHandler('open', (port) => {
  // var address = require(adr);

  http.createServer(function (req, res) {
    
    console.log('Request received: ' + port + req.url);
    
        // maxApi.outlet('number: ' + bool1 + req.url);
        maxApi.outlet(req.url);
    res.end('callback(\'{\"msg\": \"OK\"}\')' + req.url);
  
  }).listen(port);
  // console.log('Server running on port ' + port);
});

