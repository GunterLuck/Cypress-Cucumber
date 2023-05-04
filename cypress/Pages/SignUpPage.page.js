class SignUpPage{
    submitButton() {
        return cy.get('[type="submit"]>span').contains('SIGN UP').first()
    }
    emailField() {
        return cy.get('#email')
    }
    fullNameField() {
        return cy.get('#full_name')
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
        return cy.get('#email_message')
    }
    applyPromoCodeButton() {
        return cy.get('a[aria-hidden]>span')
    }
    promoCodeField() {
        return cy.get('#promo_code')
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
    enterFullNameFieldValue(Name) {
        this.fullNameField().type(Name)
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
    checkSubmitTextMessageVisibility() {
        for(let i=0; i>2; i++) {
            this.submitTextMessage().eq(i).should('be.visible')
        }
    }
    checkErrorTextMessageVisibility() {
        this.errorTextMessage().should('be.visible')
    }
    clickApplyPromoCodeButton() {
        this.applyPromoCodeButton().click()
    }
    enterPromoCodeFieldValue(Number) {
        this.promoCodeField().type(Number)
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
    clickPrivacyPolicyLinkButton() {
        this.privacyPolicyLinkButton().invoke('removeAttr', 'target').click({force: true})
    }
    checkTitleTextVisibility() {
        this.titleText().should('be.visible')
    }
}

module.exports = new SignUpPage()