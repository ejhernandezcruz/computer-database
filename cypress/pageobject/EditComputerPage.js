import ComputerFormComponent from "./ComputerFormComponent";

class EditComputerPage {

    getComputerForm(){
        return new ComputerFormComponent();
    }

    submitForm() {
        cy.get('.primary').click();
    }

    getErrorMessage(){
       return cy.get('.error > .input');
    }

}

export default EditComputerPage;