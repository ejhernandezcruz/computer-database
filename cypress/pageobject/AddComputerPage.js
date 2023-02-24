import ComputerFormComponent from "./ComputerFormComponent";

class AddComputerPage{

    setComputerName(name){
        cy.get('#name').type(name);
    }

    submitForm(){
        cy.get("input[type='submit']").click();
    }

    getComputerForm(){
        return new ComputerFormComponent();
    }


}

export default AddComputerPage;