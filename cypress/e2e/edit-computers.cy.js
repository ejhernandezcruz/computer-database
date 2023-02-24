/// <reference types="cypress" />

import SearchComputerPage from "../pageobject/SearchComputerPage";
import EditComputerPage from "../pageobject/EditComputerPage";

describe('Editing computer info', () => {

  const searchPage = new SearchComputerPage();
  const editPage = new EditComputerPage();

  before(() => {
    cy.fixture('edit_computer').then(data => {
      globalThis.data = data;
    })
  });

  beforeEach(() => {
    searchPage.access();
    searchPage.filterValue(data.computer);
    searchPage.chooseComputer(data.computer)
  });

  it.only('Edit the computer info successfully', () => {
    editPage.getComputerForm().setIntroducedDate(data.introducedDate);
    editPage.getComputerForm().setDiscontinuedDate(data.discontinuedDate);
    editPage.getComputerForm().setCompany(data.company);
    editPage.submitForm();
    searchPage.getAlertMessage().should('include.text', `Computer ${data.computer} has been updated`);
  })

  it('Editing a computer info using a invalid date', () => {
    const invalidDate = "1988-13-21";
    editPage.getComputerForm().setIntroducedDate(invalidDate);
    editPage.submitForm();
    editPage.getErrorMessage().should('include.text', 'Failed to decode date')
  });
})