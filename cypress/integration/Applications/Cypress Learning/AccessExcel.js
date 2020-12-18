import { writeFileSync } from "fs";
import { readFileSync } from "fs";
import * as XLSX from "xlsx";
//import { parse } from "papaparse";

describe('one',function()
{

   it('accessing excel',function()
   {
    const XLSX = require('xlsx');
    const fs = require('fs-extra')

// read file
let workbook = XLSX.readFile('Report (19)');

// read first sheet (identified by first of SheetNames)
let sheet = workbook.Sheets[workbook.SheetNames[0]];


// convert to JSON
let json = XLSX.utils.sheet_to_json(sheet);
   })

    it('accessing excel',function()
    {
        const fs = require('fs-extra')
        try {
            const csvFile = readFileSync("./cypress/fixtures/Report (19)-Copy.csv", "utf8");
            const csvResults = parse(csvFile, {
              header: true,
              complete: csvData => csvData.data
            }).data;
            writeFileSync(
              "./cypress/fixtures/testDataFromCSV.json",
              JSON.stringify(csvResults, null, 4),
              "utf-8"
            );
          } catch (e) {
            throw Error(e);
          }
    })
    it('accessing excel',function()
    {
        cy.readFile("./cypress/fixtures/Report (19).xlsx").then((val)=>{
            cy.log(val)
            cy.writeFile(
                "./cypress/fixtures/testDataFromCSV.json",
                JSON.stringify(val, null, 4),
                "utf-8"
              );
        })
        cy.readFile("./cypress/fixtures/testDataFromCSV.json").then((jsd)=>{
            var str = "Report"
            cy.log(jsd.indexOf("Report"))
            str = jsd.substring(jsd.indexOf("Report"));
            cy.writeFile(
                "./cypress/fixtures/testDataFromCSV.json", JSON.stringify(str))

        })
    })
})