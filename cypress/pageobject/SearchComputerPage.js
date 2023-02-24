class SearchComputerPage {

    access() {
        cy.visit('/computers');
    }

    addComputer() {
        cy.get('#add').click();
    }

    filterValue(value) {
        cy.get('#searchbox').type(value);
        cy.get('#searchsubmit').click();
    }

    chooseComputer(computer) {
        cy.contains("a", computer, { matchCase: true }).click();
    }

    getAlertMessage() {
        return cy.get('.alert-message');
    }

    gotoLastPage() {
        const resultsByPage = 10;
        cy.get("li[class='current'] a").invoke('text').then(text => {
            const total = text.split("of ")[1];
            const totalClicks = Math.floor(parseInt(total) / resultsByPage);
            for (let i = 0; i < totalClicks; i++) {
                cy.get('.next > a').click();
            }
        })
    }

    printComputerNames() {
        cy.get('tbody > tr >td:nth-child(1)').each(el => {
            const computerName = el.text().trim()
            cy.log(computerName);
            console.log(computerName);
        })
    }

    printTableMap() {
        cy.get('table tbody tr').then(rows => {
            const data = rows.map((index, row) => {
                const columns = Cypress.$(row).find('td');
                const rowData = {
                    computerName: columns.eq(0).text(),
                    Introduced: columns.eq(1).text(),
                    Discontinued: columns.eq(2).text(),
                    Company: columns.eq(3).text(),
                };
                return rowData;
            });
            //Printing the values using the log method and also the browser console.
            cy.log(JSON.stringify(data));
            console.log(data);
        });
    }


}

export default SearchComputerPage;