class DashboardPage {
    selectorsList () {
        const selectors  = {
           sectionTitleDashboard: "[href='/web/index.php/dashboard/index']",
} 
        return selectors
    }
        sectionDashboard () {
            cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
            cy.wait (4000)

            cy.get(this.selectorsList().sectionTitleDashboard).contains('Dashboard').should('be.visible')
        }

}

export default  DashboardPage