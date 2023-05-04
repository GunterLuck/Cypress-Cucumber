class PricingPage {
    payAsYouGoWindow() {
        return cy.get('section>div>div>strong').contains('Pay as you go')
    }
    volumeBasedPrising() {
        return cy.get('section>div>div>strong').contains('Volume-based pricing')
    }
    checkPayAsYouGoWindowVisibility() {
        this.payAsYouGoWindow().should('be.visible')
    }
    checkVolumeBasedPrisingVisibility() {
        this.volumeBasedPrising().should('be.visible')
    }
}
module.exports = new PricingPage()