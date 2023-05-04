class SolutionsPage {
    seeIndustriesButton() {
        return cy.get('[href="#industries"]>span')
    }
    seeUseCasesButton() {
        return cy.get('[href="#use-cases"]>span')
    }
    healthcareButton() {
        return cy.get('[href="/solutions/healthcare"]')
    }
    accountNotificationWindow() {
        return cy.get('ul>li>div').eq(0)
    }
    clickSeeIndustriesButton() {
        this.seeIndustriesButton().click({force: true})
    }
    scrollToSeeIndustriesButton() {
        this.seeIndustriesButton().scrollIntoView()
    }
    clickSeeUseCasesButton() {
        this.seeUseCasesButton().click()
    }
    checkHealthcareButtonVisibility() {
        this.healthcareButton().should('be.visible')
    }
    checkAccountNotificationWindowVisibility() {
        this.accountNotificationWindow().should('be.visible')
    }
}
module.exports = new SolutionsPage()