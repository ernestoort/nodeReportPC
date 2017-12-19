/**
 * Project indicatorImporter
 * Created by ernesto on 12/18/17.
 */
var Excel = require('exceljs');

var workbook = new Excel.Workbook();

var sheet1 = workbook.addWorksheet('sheet first');
sheet1.getCell('C3').value = 10;
sheet1.getCell('C3').name = 'FIRST';
sheet1.getCell('C4').value = 20;
sheet1.getCell('C4').name = 'SECOND';
sheet1.getCell('C5').value = {formula: 'C3+C4', result: 30};

console.log(sheet1.id);

var sheet2 = workbook.addWorksheet('sheet second');
sheet2.getCell('C5').value = {formula: "FIRST+SECOND", result: 30};
sheet2.getCell('C6').value = {formula: "\'sheet first\'!C4+\'sheet first\'!C3", result: 30};

workbook.xlsx.writeFile("testFile.xls")
    .then(function (value) {
        console.log("Done");
    });