class MenuPage {
    selectorsList () {
        const selectors  = { 
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            adminButton:'[href="/web/index.php/admin/viewAdminModule"]',
            dashboardButton: '[href="/web/index.php/dashboard/index"]',
            pimButton: '[href="/web/index.php/pim/viewPimModule"]',
            leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
            timeButton: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            performaceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            maintenceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
            
} 
        return selectors
    }
         acessMyInfo() {
            cy.get(this.selectorsList().myInfoButton).click()
        }

        adminButton() {
            cy.get(this.selectorsList().adminButton).click()
        }

        dashboardButton() {
            cy.get(this.selectorsList().dashboardButton).click()
        }

        pimButton() {
            cy.get(this.selectorsList().pimButton).click()
        }

        leaveButton() {
            cy.get(this.selectorsList().leaveButton).click()
        }

        timeButton() {
            cy.get(this.selectorsList().timeButton).click()
        }

        recruitmentButton() {
            cy.get(this.selectorsList().recruitmentButton).click()
        }

        performaceButton() {
            cy.get(this.selectorsList().performaceButton).click()
        }

        directoryButton() {
            cy.get(this.selectorsList().directoryButton).click()
        }

        maintenceButton() {
            cy.get(this.selectorsList().maintenceButton).click()
        }

        claimButton() {
            cy.get(this.selectorsList().claimButton).click()
        }

        buzzButton() {
            cy.get(this.selectorsList().buzzButton).click()
        }

}

export default  MenuPage