var fs = require('fs');
var res = require('res');

var secrets = require('secrets');

secrets.getKeypair(function (error, keypair) {
  var indexHtml = fs.readFileSync('public_html/index.html');
  indexHtml = indexHtml.replace('%KEY%', keypair.public);

  res.write(indexHtml);
  res.end()
});
