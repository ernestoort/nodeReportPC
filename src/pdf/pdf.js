/**
 * Project indicatorImporter
 * Created by ernesto on 12/18/17.
 */

var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./hello.html', 'utf8');
var options = { format: 'Letter' };

pdf.create(html, options).toFile('./hello.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});