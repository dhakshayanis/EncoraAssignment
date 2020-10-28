class Table{
    cellOfTable(row,col){
        let cellLocator = '.ant-table-tbody>tr:nth-child('+row+')>td:nth-child('+col+')>span'
        return cellLocator
    }
    isTableVisible(){
        const table = new Table
        cy.get(table.cellOfTable(1,2)).should('be.visible')
        return this
    }
}
export default Table