class CoockiesPage{
    submitButton() {
        return cy.get('[id="radix-:r0:"]>div>button:first-of-type')
    } 
    acceptCookies() {
        this.submitButton().click({force: true})
    }
    // acceptCookies() {
    //     this.submitButton().then(($pass) => {
    //         if (expect($pass).to.be.visible) {
    //             this.clickSubmitButton()
    //         } else {}
    //     })
    // }
}

module.exports = new CoockiesPage()