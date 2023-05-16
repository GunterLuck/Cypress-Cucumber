const MainPage = require("./MainPage.page")

export default new class NumbersPricing extends MainPage{
    payAsYouGoText() {
        return cy.get('h2#pay-as-you-go')
    }
    payAsYouGoDropdown() {
        return cy.get('div>button[type="button"]')
    }
    canadaOption() {
        return cy.get('a[href="/pricing/numbers/ca"][id]')
    }
    ukraineOption() {
        return cy.get('a[href="/pricing/numbers/ua"][id]')
    }
    usingAnExistingNumberText(){
        return cy.get('tr>th').contains('Using an existing number')
    }
    scrollDownPayAsYouGoDropdown() {
        this.payAsYouGoDropdown().scrollIntoView()
    }
    selectCanadaOptionInPayAsYouGoDropdown() {
        this.payAsYouGoDropdown().click({force: true})
        this.canadaOption().click()
    }
    checkUsingAnExistingNumberTextVisibility() {
        this.usingAnExistingNumberText().should('be.visible')
    }
    selectUkraineOptionInPayAsYouGoDropdown() {
        this.payAsYouGoDropdown().click({force: true})
        this.ukraineOption().click()
    }
    checkUsingAnExistingNumberTextNotVisible() {
        this.usingAnExistingNumberText().should('not.exist')
    }
}