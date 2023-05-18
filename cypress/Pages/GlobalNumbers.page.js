const MainPage = require("./MainPage.page")

export default new class GlobalNumbersPage extends MainPage{
    searchNumbersButton() {
        return cy.get('a[title="[Talk to sales] Global Numbers - Button"]>span').first()
    }
    askOurExpertsButton() {
        return cy.get('[href="/contact-us"]>span').first()
    }
    seePricingButton() {
        return cy.get('[href="https://telnyx.com/pricing/"]')
    }
    clickGlobalNumbersButton() {
        this.globalNumbersButton().click()
    }
    clickProductsDropdown() {
        this.productsDropdown().click()
    }
    clickSearchNumbersButton() {
        this.searchNumbersButton().click({force: true})
    }
    clickAskOurExpertsButton() {
        this.askOurExpertsButton().click({force: true})
    }
    scrollToSeePricingButton() {
        this.seePricingButton().scrollIntoView()
    }
    clickSeePricingButton() {
        this.seePricingButton().click({force: true})
    }
}