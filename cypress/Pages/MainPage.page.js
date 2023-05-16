export default class MainPage{
    pricingDropdown() {
        return cy.get('button>div>span').contains('Pricing').first()
    }
    globalNumbersButton() {
        return cy.get('a>span').contains('Global Numbers').first()
    }
    productsDropdown() {
        return cy.get('button>div>span').contains('Products').first()
    }
    partnersButton() {
        return cy.get('a>span').contains('Partners')
    }
    whyTelnyxButton() {
        return cy.get('button>div>span').contains('Why Telnyx')
    }
    solutionsButton() {
        return cy.get('[href="/solutions"]>span').contains('Solutions').first()
    }
    missionControlButton() {
        return cy.get('[href="/mission-control"]>span')
    }
    smsApiButton() {
        return cy.get('[href="/products/sms-api"]>span')
    }
    contactUsButton() {
        return cy.get('[href="/contact-us"]').first()
    }
    signUpButton() {
        return cy.get('[id="header-sign-up"]')
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
    clickWhyTelnyxButton() {
        this.whyTelnyxButton().click()
    }
    clickPartnersButton() {
        this.partnersButton().click()
    }
    clickSolutionsButton() {
        this.solutionsButton().click()
    }
    clickMissionControlButton() {
        this.missionControlButton().click()
    }
    clickSmsApiButton() {
        this.smsApiButton().click()
    }
    clickContactUsButton() {
        this.contactUsButton().click()
    }
    clickSignUpButton() {
        this.signUpButton().click()
    }
}