class NumbersPricing{
    payAsYouGoText() {
        return cy.get('h2#pay-as-you-go')
    }
    payAsYouGoDropdown() {
        return cy.get('div>button[type="button"]')
    }
    usingAnExistingNumberText(){
        return cy.get('tr>th').contains('Using an existing number')
    }
    scrollDownPayAsYouGoDropdown() {
        this.payAsYouGoDropdown().scrollIntoView()
    }
    selectCanadaOptinInpayAsYouGoDropdown() {
        this.payAsYouGoDropdown().select('Canada')
    }
    checkUsingAnExistingNumberTextVisibility() {
        this.usingAnExistingNumberText().should('be.visible')
    }
    selectUkraineOptinInpayAsYouGoDropdown() {
        this.payAsYouGoDropdown().select('Ukraine')
    }
    checkUsingAnExistingNumberTextNotVisible() {
        this.usingAnExistingNumberText().should('not.be.visible')
    }
}
module.exports = new NumbersPricing()