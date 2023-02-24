class ComputerFormComponent{

    setIntroducedDate(date) {
        cy.get('#introduced').clear().type(date);
    }

    setDiscontinuedDate(date) {
        cy.get('#discontinued').clear().type(date);
    }

    setCompany(company) {
        cy.get('#company').select(company);
    }

}

export default ComputerFormComponent;