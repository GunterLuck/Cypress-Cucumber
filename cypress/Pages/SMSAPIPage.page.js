const MainPage = require("./MainPage.page")

export default new class SMSAPIPage extends MainPage{
    portalButton() {
        return cy.get('[href="/sign-up"]>span').contains('portal')
    }
    clickPortalButton() {
        this.portalButton().click()
    }
}