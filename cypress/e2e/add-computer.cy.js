/// <reference types="cypress" />
import { faker } from '@faker-js/faker/locale/en_US';
import AddComputerPage from '../pageobject/AddComputerPage';
import SearchComputerPage from '../pageobject/SearchComputerPage';


describe('Add computers', () => {

    const searchPage = new SearchComputerPage();
    const addPage = new AddComputerPage();

    before(() => {
        cy.fixture('add_computer').then(data => {
            globalThis.data = data;
        })
    });

    it('Add a computer to the list successfully', () => {
        const computerName = `${data.computer} ${faker.commerce.productName()}`
        searchPage.access();
        searchPage.addComputer();
        addPage.setComputerName(computerName);
        addPage.getComputerForm().setIntroducedDate(data.introducedDate);
        addPage.getComputerForm().setDiscontinuedDate(data.discontinuedDate);
        cy.log(data.company);
        addPage.getComputerForm().setCompany(data.company);
        addPage.submitForm();
        searchPage.getAlertMessage().should('include.text',`Computer ${computerName} has been created`);
    });
});