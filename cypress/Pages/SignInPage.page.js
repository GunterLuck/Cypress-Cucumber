class SignInPage{
    emailField() {
        return cy.get('[name="email"]').first()
    }
    passwordField() {
        return cy.get('[name="password"]').first()
    }
    rememberMyEmailButton() {
        return cy.get('svg[data-icon]')
    }
    logInButton() {
        return cy.get('button[type="submit"]').contains('Log in').eq(0)
    }
    errorMesage() {
        return cy.get('div>div>div>span[class]').first()
    }
    emptyFieldErrorMesage() {
        return cy.get('label>div>div[class]').contains('Required')
    }
    telnyxsTermsLinkButton() {
        return cy.get('[href="/terms-and-conditions-of-service"]').first()
    }
    privacyPolicyLinkButton() {
        return cy.get('[href="/privacy-policy"]').first()
    }
    enterEmailFieldValue(Email) {
        this.emailField().type(Email)
    }
    enterPasswordFieldValue(Password) {
        this.passwordField().type(Password)
    }
    clickRememberMyEmailButton() {
        this.rememberMyEmailButton().click()
    }
    scrollToLogInButton() {
        this.logInButton().scrollIntoView()
    }
    clickLogInButton() {
        this.logInButton().click()
    }
    checkErrorTextMesageVisibility() {
        this.errorMesage().should('be.visible')
    }
    checkEmptyFieldErrorTextMesageVisibility() {
        this.emptyFieldErrorMesage().should('be.visible')
    }
    scrollToTelnyxsTermsLinkButton() {
        this.telnyxsTermsLinkButton().scrollIntoView()
    }
}
module.exports = new SignInPage()