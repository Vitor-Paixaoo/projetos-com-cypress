import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorList = {
   
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateCloseButton: ".--close",
    saveButton: ".oxd-button--secondary",
    buttonOption: ".oxd-select-text--arrow",
    genderSelection: ".oxd-input-group"
  }
  
  
  it.only('User info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.sectionDashboard()
    
    menuPage.acessMyInfo()
    
  
   cy.get(selectorList.firstNameField).clear().type('Vitor')
   cy.get(selectorList.lastNameField).clear().type('Paixão')
   cy.get(selectorList.genericField).eq(4).clear().type('Paixão') //Nickname
   cy.get(selectorList.genericField).eq(4).clear().type('26') // Employee Id
   cy.get(selectorList.genericField).eq(5).clear().type('2625') // Other ID
   cy.get(selectorList.genericField).eq(6).clear().type('Drive license teste') // Drive license
   cy.get(selectorList.genericField).eq(7).clear().type('2025-02-02') // License Expiry Date
   cy.get(selectorList.dateCloseButton).click()
   cy.get(selectorList.genericField).eq(8).clear().type('12345') //SSN Number
   cy.get(selectorList.buttonOption).eq(0).click() //Nationality
   cy.contains('American').click()
   cy.get(selectorList.buttonOption).eq(1).click() //Marital Status
   cy.contains('Married').click()
   cy.get(selectorList.genericField).eq(8).clear().type('1998-04-20') //Birthday
   cy.get(selectorList.dateCloseButton).click()
   cy.contains('Female').click()
   cy.get(selectorList.saveButton).eq(0).click()
   cy.get('.oxd-text--toast-message').should('be.visible').and('contain', 'Successfully Updated')
    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passowordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})