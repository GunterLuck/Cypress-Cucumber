const MainPage = require("./MainPage.page")

export default new class SignUpPage extends MainPage{
    submitButton() {
        return cy.get('[type="submit"]>span').contains('SIGN UP').first()
    }
    emailField() {
        return cy.get('#email')
    }
    firstNameField() {
        return cy.get('#first_name')
    }
    lastNameField() {
        return cy.get('#last_name')
    }
    passwordField() {
        return cy.get('#password')
    }
    agreeButton() {
        return cy.get('#terms_and_conditions')
    }
    submitTextMessage() {
        return cy.get('div[class]>p[class]')
    }
    errorTextMessage() {
        return cy.get('#first_name_message')
    }
    logInLinkButton() {
        return cy.get('p>a[href*="telnyx"]')
    }
    telnyxsTermsLinkButton() {
        return cy.get('[href="/terms-and-conditions-of-service"]').first()
    }
    privacyPolicyLinkButton() {
        return cy.get('[href="/privacy-policy"]').first()
    }
    titleText() {
        return cy.get('div>h1>span')
    }
    enterEmailFieldValue(Email) {
        this.emailField().type(Email, { force: true })
    }
    enterFirstNameFieldValue(Name) {
        this.firstNameField().type(Name)
    }
    enterLastNameFieldValue(Name) {
        this.lastNameField().type(Name)
    }
    enterPasswordFieldValue(Password) {
        this.passwordField().type(Password)
    }
    clickAgreeButton() {
        this.agreeButton().click()
    }
    clickSubmitButton() {
        this.submitButton().click()
    }
    checkSubmitMessageVisibility() {
        for(let i=0; i>2; i++) {
            this.submitTextMessage().eq(i).should('be.visible')
        }
    }
    checkErrorMessageVisibility() {
        this.errorTextMessage().scrollIntoView()
        this.errorTextMessage().should('be.visible')
    }
    scrollToLogInLinkButton() {
        this.logInLinkButton().scrollIntoView()
    }
    scrollTelnyxsTermsLinkButton() {
        this.telnyxsTermsLinkButton().scrollIntoView()
    }
    clickLogInLinkButton() {
        this.logInLinkButton().invoke('removeAttr', 'target').click()
    }
    clickTelnyxsTermsLinkButton() {
        this.telnyxsTermsLinkButton().invoke('removeAttr', 'target').click({force: true})
    }
    checkTitleTextVisibility() {
        this.titleText().should('be.visible')
    }
    clickPrivacyPolicyLinkButton() {
        this.privacyPolicyLinkButton().invoke('removeAttr', 'target').click()
    }
}