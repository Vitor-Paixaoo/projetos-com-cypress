class LoginPage {
    selectorsList () {
        const selectors  = {
            usernameField: "[name='username']",
            passowordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: ".oxd-alert-content--error",
} 
        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passowordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        

    }
    
}

export default  LoginPage