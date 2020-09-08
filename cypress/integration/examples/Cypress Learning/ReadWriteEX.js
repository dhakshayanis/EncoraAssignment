describe('one',function()
{
    it('navigate to Tracking At a Glance',function()
    {
        //function GetData() {
            var excel = new ActiveXObject(“Excel.Application”);
            var excel_file = excel.Workbooks.Open(“H: /sample_Codes/sample.xls”);
            var excel_sheet = excel.Worksheets(“Sheet1″);
            var totalColCount = excel_sheet.UsedRange.Columns.Count;
            var totalRowCount = excel_sheet.UsedRange.Rows.Count;
            //var htmlStr = ” < table > ”;
            for (i = 0; i < totalRowCount; i++) {
              //htmlStr = htmlStr + “ < tr > ”;
              for (j = 0; j < totalColCount; j++)
                var cellVal = +excel_sheet.Cells(i, j).Text ;
                cy.log(cellVal)
                }
            }
            
        //}
    })
})