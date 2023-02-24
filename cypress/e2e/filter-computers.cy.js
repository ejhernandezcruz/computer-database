/// <reference types="cypress" />

import SearchComputerPage from "../pageobject/SearchComputerPage";

describe('Filter values on the computers page', () => {

    const searchPage = new SearchComputerPage();

    beforeEach(() => {
        searchPage.access();
    });

    it('Filter computer list by HP', () => {
        const computer = "HP"
        searchPage.filterValue(computer);
        searchPage.printTableMap();
        
    });

    it('Filter computer list by IBM and return a list of computer names on the LAST page', () => {
        const computer = "IBM"
        searchPage.filterValue(computer);
        searchPage.gotoLastPage();
        searchPage.printComputerNames();
    });
});