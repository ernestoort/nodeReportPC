/**
 * Project reportsPOC
 * Created by ernesto on 12/19/17.
 */

var Excel = require('exceljs');
var workbook = new Excel.Workbook();
workbook.xlsx.readFile('./testFile2.xlsx')
    .then(function() {
        // use workbook
        var worksheet = workbook.getWorksheet('sheet second');
        console.log(worksheet.getCell('C6').value);
    });


