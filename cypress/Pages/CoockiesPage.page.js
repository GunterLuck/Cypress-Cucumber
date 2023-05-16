class CoockiesPage{
    submitButton() {
        return cy.get('[id="radix-:r0:"]>div>button:first-of-type')
    } 
    acceptCookies() {
        this.submitButton().click({force: true})
    }
}

module.exports = new CoockiesPage()