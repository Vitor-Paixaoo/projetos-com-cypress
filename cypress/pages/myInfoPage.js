class MyInforPage {
    selectorsList () {
        const selectors  = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            dateCloseButton: ".--close",
            buttonOption: ".oxd-select-text--arrow",
            genderSelection: ".oxd-input-group",
            saveButton: ".oxd-button--secondary",
          
} 
        return selectors
    }
         fillPersonalDetails (firstName, lastName, nickName) {
            cy.get(this.selectorsList().firstNameField).clear().type(firstName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
            //cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
         }
        
         fillEmployeeDetails (employeeId, otherid, driverLicenseNumber, driverLicenseDate, ssnNumber, sinNumber) {
            cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(otherid)
            cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicenseNumber)
            cy.get(this.selectorsList().genericField).eq(7).clear().type(driverLicenseDate)
            cy.get(this.selectorsList().dateCloseButton).click()
           
           
         }

         fillStatus () {
            cy.get(this.selectorsList().buttonOption).eq(0).click()
            cy.contains('American').click()
            cy.get(this.selectorsList().buttonOption).eq(1).click()
            cy.contains('Married').click()
            cy.get(this.selectorsList().genderSelection).contains('Female').click()
         }

         saveForm () {
            cy.get(this.selectorsList().saveButton).eq(0).click()
            cy.get('.oxd-text--toast-message').should('be.visible').and('contain', 'Successfully Updated')
         }
}

export default  MyInforPage