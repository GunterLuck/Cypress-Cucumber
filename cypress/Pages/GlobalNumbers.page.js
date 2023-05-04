class GlobalNumbersPage{
    pushaseNumbersButton() {
        return cy.get('a[title="[Talk to sales] Global Numbers - Button"]>span').first()
    }
    askOurExpertsButton() {
        return cy.get('[href="/contact-us"]>span')
    }
    seePricingButton() {
        return cy.get('[href="https://telnyx.com/pricing/"]')
    }
    clickPushaseNumbersButton() {
        this.pushaseNumbersButton().click()
    }
    clickAskOurExpertsButton() {
        this.askOurExpertsButton().click()
    }
    scrollToSeePricingButton() {
        this.seePricingButton().scrollIntoView()
    }
    clickSeePricingButton() {
        this.seePricingButton().click()
    }
}

module.exports = new GlobalNumbersPage()