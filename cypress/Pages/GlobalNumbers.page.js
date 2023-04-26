class GlobalNumbersPage{
    pushaseNumbersButton() {
        return cy.get('a>span').contains('Purchase Numbers').first()
    }
    clickPushaseNumbersButton() {
        this.pushaseNumbersButton().click()
    }
}

module.exports = new GlobalNumbersPage()