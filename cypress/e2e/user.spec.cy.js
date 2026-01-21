import userData from '../fixtures/user/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passowordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleDashboard: ".oxd-text--h6",
    wrongCredentialAlert: ".oxd-alert-content--error",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateCloseButton: ".--close",
    saveButton: ".oxd-button--secondary"
  }
  
  
  it.only('User info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passowordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleDashboard).contains('Dashboard')
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('Vitor')
    cy.get(selectorList.lastNameField).clear().type('Paixão')
    cy.get(selectorList.genericField).eq(4).clear().type('26')
    cy.get(selectorList.genericField).eq(5).clear().type('2625')
    cy.get(selectorList.genericField).eq(6).clear().type('Drive license teste')
    cy.get(selectorList.genericField).eq(7).clear().type('2025-02-02')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.saveButton).eq(1).click()
    cy.get('.oxd-text--toast-message').should('be.visible').and('contain', 'Successfully Saved')
    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passowordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})