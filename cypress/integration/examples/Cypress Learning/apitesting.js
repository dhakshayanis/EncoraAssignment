context('User automation test',()=>{
    it('date_filter_report',()=>{
        var query =
            {"elasticQueryName":"date_filter_report","filters":[],"dynamicColumns":[]}
             cy.request('POST','https://disd-i360-k12-dev.uc.r.appspot.com/data/search',query).then((response)=>{
            expect(response.status).equal(200)
        })
    })
    it('student_not_logged_percent_tile1',()=>{
        var query =
        {"elasticQueryName":"student_not_logged_percent_tile1","filters":[],"dynamicColumns":[{"columnName":"#{startDate}","columnValue":["2020-04-06"]},{"columnName":"#{endDate}","columnValue":["2020-07-11"]}]}
             cy.request('POST','https://disd-i360-k12-dev.uc.r.appspot.com/data/search',query).then((response)=>{
            expect(response.status).equal(200)
        })
    })






    
})