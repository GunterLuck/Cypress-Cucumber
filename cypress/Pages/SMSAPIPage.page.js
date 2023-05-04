class SMSAPIPage {
    portalButton() {
        return cy.get('[href="/sign-up"]>span').contains('portal')
    }
    clickPortalButton() {
        this.portalButton().click()
    }
}
module.exports = new SMSAPIPage()