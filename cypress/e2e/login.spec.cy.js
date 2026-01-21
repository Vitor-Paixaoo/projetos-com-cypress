import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passowordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleDashboard: ".oxd-text--h6",
    wrongCredentialAlert: ".oxd-alert-content--error"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passowordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleDashboard).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passowordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})