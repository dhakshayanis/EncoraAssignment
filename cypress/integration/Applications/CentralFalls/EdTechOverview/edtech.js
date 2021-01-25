class edtech {


    hovernavfilter() {
      cy.xpath("(//i[@class='material-icons'])[1]").trigger('mouseover')
      cy.wait(3000);
      cy.xpath("//div[text()='Ed Tech Overview']").click({ force: true })
    }
  
    verifytiles() {
      const alltiles = '//div[@class="b-dashboard-card "]'
      const tileprefix = '(//div[@class="b-dashboard-card "])['
      const tilesuffix = ']'
      const tileheader1prefix = '(//*[@class="b-dashboard-card "])['
      const tileheader1suffix = ']//div[@class="b-headerTitle"]/span'
      const tilevalue1prefix = '(//*[@class="b-dashboard-card "])['
      const tilevalue1suffix = ']//div[@class="b-title"]/span'
      const tileheader2 = '((//*[@class="basic-container-child b-col-12"])[5]//div[@class="external-generic-component-child2"])[2]'
      const tilevalue2 = '((//*[@class="basic-container-child b-col-12"])[5]//div[@class="external-generic-component-child2"])[3]'
      const closeButton = '(//div[@class="ReactModal__Content ReactModal__Content--after-open"]//*[@fill="currentColor"])[1]'
  
      cy.xpath(alltiles).as('data')
      cy.get('@data')
        .then(($alltiles) => {
          const listcount = $alltiles.length;
          var i;
          for (i = 1; i < (listcount -35); i++) {
            const headerlist = tileheader1prefix + i + tileheader1suffix
            const valuelist = tilevalue1prefix + i + tilevalue1suffix
            const list = tileprefix + i + tilesuffix
            cy.invoketext('result1', headerlist, 'tileheader' + i)
            cy.invoketext('result1', valuelist, 'tilevalue' + i)
  
            cy.xpath(list).as('data1')
            cy.get('@data1').click()
            cy.wait(10000)
            cy.invoketext('result2', tileheader2, 'tileheader' + i)
            cy.invoketext('result2', tilevalue2, 'tilevalue' + i)
            const et = new edtech
            et.verifytimetrending()
            et.verifystudentdimension()
            cy.wait(5000)
            cy.xpath(closeButton).click()
          }
        })
    }
    verifytimetrending() {
      const timetrendingtab = '(//div[@class="nav-tab active"])[1]'
      const timetrendingtabtext = '(//div[@class="nav-tab active"])[1]/div'
      const timetrendingwindowtext = '(//span[@class="toolbar-component-title test"])[1]'
      const timetrendingwindowsubtitle = '(//span[@class="toolbar-component-subtitle"])[1]'
      const graphvaluelist = 'div.amcharts-chart-div > svg > g:nth-child(8) >g >g >g'
      const graphvalueprefix = 'div.amcharts-chart-div > svg > g:nth-child(8) >g >g >g:nth-child('
      const graphvaluesuffix = ')'
      const timetrendingtitle = '(//*[@class="wrap-component-tile-info-popup"]//div[@class="external-generic-component-child2"])[2]'
  
      cy.invoketext('result1', timetrendingtitle, 'timetrendingtitle')
      cy.invoketextRL(timetrendingtabtext, 'Time Trending View')
      cy.invoketextRL(timetrendingwindowtext, 'Time Trending View')
      cy.invoketext('result1', timetrendingwindowsubtitle, 'timetrendingwindowsubtitle')
      cy.invoketextofattr(graphvaluelist, graphvalueprefix, graphvaluesuffix, 'result1', 'graphvalue')
  
  
    }
  
    verifystudentdimension() {
      const studentdimensiontab = '(//div[@class="nav-tab active"])[2]'
      const studentdimensiontabtext = '(//div[@class="nav-tab active"])[2]/div'
      const studentdimensionwindowtext = '(//span[@class="toolbar-component-title test"])[1]'
      const chart = '(//canvas)[1]'
      const dropdown1arrow = '(//*[@id="page-content"]//div[@class="elastic-prompt-component-selector"]//button//div)[1]'
      cy.invoketextRL(studentdimensiontabtext, 'Student Dimension View')
      cy.invoketextRL(studentdimensionwindowtext, 'Student Dimension View')
  cy.xpath(chart).should('be.visible')
  
    }
  }
  export default edtech