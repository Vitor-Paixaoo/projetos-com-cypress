import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = reqire('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {  
  
  it('User info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.sectionDashboard()
    
    menuPage.acessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.firts(), chance.last())
    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', '10101010', '1998-04-20', '123456', '09871010')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
  })
})