class SignInPage {
    emailField() {
        return cy.get('[name="email"]').first()
    }
    passwordField() {
        return cy.get('[name="password"]').first()
    }
    logInButton() {
        return cy.get('form>div~button[type="submit"]').first()
    }
    errorMesage() {
        return cy.get('div>div>div>span[class]').first()
    }
    emptyFieldErrorMesage() {
        return cy.get('[class*="TextField__Error"]').first()
    }
    enterEmailFieldValue(email) {
        this.emailField().type(email)
    }
    enterPasswordFieldValue(password) {
        this.passwordField().type(password)
    }
    clickLogInButton() {
        this.logInButton().click({force: true})
    }
    checkErrorMesageVisibility() {
        this.errorMesage().should('be.visible')
    }
    checkEmptyFieldErrorMesageVisibility() {
        this.emptyFieldErrorMesage().should('be.visible')
    }
}
module.exports = new SignInPage()