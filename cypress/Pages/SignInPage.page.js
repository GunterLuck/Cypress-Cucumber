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
        return cy.get('label>div>div[class]').contains('Required')
    }
    enterEmailFieldValue(Email) {
        this.emailField().type(Email)
    }
    enterPasswordFieldValue(Password) {
        this.passwordField().type(Password)
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