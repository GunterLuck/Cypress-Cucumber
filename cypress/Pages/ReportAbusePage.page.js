class ReportAbusePage {
    reportingField() {
        return cy.get('#shortDescription')
    }
    phoneCausingNumberField() {
        return cy.get('#abusivePhoneNumber')
    }
    countryCausingAbuseDropdown() {
        return cy.get('[id="Select country"]').first()
    }
    countryReceivingNumberField() {
        return cy.get('#abusedPhoneNumber')
    }
    countryReceivingAbuseDropdown() {
        return cy.get('[id="Select country"]').eq('1')
    }
    dateAndTimeField() {
        return cy.get('#dateTime')
    }
    voiceButton() {
        return cy.get('#abusedServicesoption0')
    }
    messagingButton() {
        return cy.get('#abusedServicesoption1')
    }
    fullNameField() {
        return cy.get('#reporterName')
    }
    emailField() {
        return cy.get('#reporterEmail')
    }
    additionalDetails() {
        return cy.get('#longDescription')
    }
    submitButton() {
        return cy.get('button>span[class]').first()
    }
    submitMessageText() {
        return cy.get('h1>span')
    }
    errorMessageText() {
        return cy.get('#shortDescription_message')
    }
    enterInReportingFieldValue(Text) {
        this.reportingField().click({force: true})
        this.reportingField().type(Text)
    }
    enterInPhoneCausingNumberFieldValue(Number) {
        this.phoneCausingNumberField().type(Number)
    }
    selectAlbaniaOptionInCountryCausingAbuseDropdown() {
        this.countryCausingAbuseDropdown().select('Albania')
    }
    enterInPhoneReceivingNumberFieldValue(Number) {
        this.phoneReceivingNumberField().type(Number)
    }
    selectAustrealiaOptionInCountryReceivingAbuseDropdown() {
        this.countryReceivingAbuseDropdown().select('Austrealia')
    }
    enterInDateAndTimeFieldValue(Date, Time) {
        this.dateAndTimeField().type(Date)
        this.dateAndTimeField().type({leftArrow})
        this.dateAndTimeField().type(Time)
    }
    clickVoiceButton() {
        this.voiceButton().click()
    }
    clickMessagingButton() {
        this.messagingButton().click()
    }
    enterInFullNameFieldValue(Name) {
        this.fullNameField().type(Name)
    }
    enterInEmailFieldValue(Email) {
        this.emailField().type(Email)
    }
    enterInAdditionalDetailsValue(Text) {
        this.additionalDetails().type(Text)
    }
    scrollToSubmitButton() {
        this.submitButton().scrollIntoView()
    }
    clickSubmitButton() {
        this.submitButton().click({force: true})
    }
    checkSubmitMessageTextVisibility() {
        this.submitMessageText().should('be.visible')
    }
    checkErrorMessageTextVisibility() {
        this.errorMessageText().should('be.visible')
    }
}
module.exports = new ReportAbusePage()