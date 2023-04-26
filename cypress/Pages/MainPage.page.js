class MainPage{
    pricingDropdown() {
        return cy.get('a>span').contains('Pricing').first()
    }
    globalNumbersButton() {
        return cy.get('a>span').contains('Global Numbers').first()
    }
    productsDropdown() {
        return cy.get('a>span').contains('Products').first()
    }
    clickPricingDropdown() {
        this.pricingDropdown().click()
    }
    clickGlobalNumbersButton() {
        this.globalNumbersButton().click()
    }
    clickProductsDropdown() {
        this.productsDropdown().click()
    }
}
module.exports = new MainPage()