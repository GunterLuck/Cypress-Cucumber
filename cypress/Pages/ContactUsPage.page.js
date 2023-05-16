class ContactUsPage {
    firstNameField() {
        return cy.get('#FirstName')
    }
    lastNameField() {
        return cy.get('#LastName')
    }
    emailField() {
        return cy.get('#Email')
    }
    countryDropdown() {
        return cy.get('[name="Phone_Number_Extension__c"]')
    }
    canadaOption() {
        return cy.get('[value="+1"]').contains('Canada (+1)')
    }
    reasonForContactDropdown() {
        return cy.get('#Reason_for_Contact__c')
    }
    phoneNumberField() {
        return cy.get('#Phone_Number_Base__c')
    }
    companyWebsiteField() {
        return cy.get('#Website')
    }
    describeYourRequestField() {
        return cy.get('#Form_Additional_Information__c')
    }
    submitButton() {
        return cy.get('[type="Submit"]')
    }
    submitMessageText() {
        return cy.get('h1>span')
    }
    howDidYouHearAboutTelnyxField() {
        return cy.get('#How_did_you_hear_about_Telnyx_Open__c')
    }
    errorMesageText() {
        return cy.get('#ValidMsgReason_for_Contact__c')
    }
    reportAbuseLinkButton() {
        return cy.get('[href="https://telnyx.com/report-abuse"]>span').first()
    }
    selectSupportOptionInReasonForContactDropdown() {
        this.reasonForContactDropdown().select('Support', {force: true})
    }
    enterFirstNameFieldValue(Name) {
        this.firstNameField().type(Name)
    }
    enterLastNameFieldValue(Name) {
        this.lastNameField().type(Name)
    }
    enterEmailFieldValue(Email) {
        this.emailField().type(Email)
    }
    selectCanadaOptionInCountryDropdown() {
        this.countryDropdown().select('Canada (+1)')
    }
    enterPhoneNumberFieldValue(Number) {
        this.phoneNumberField().type(Number)
    }
    enterCompanyWebsiteFieldValue(Website) {
        this.companyWebsiteField().type(Website)
    }
    enterDescribeYourRequestFieldValue(Text) {
        this.describeYourRequestField().type(Text)
    }
    clickSubmitButton() {
        this.submitButton().click()
    }
    checkSubmitMessageText(text) {
        this.submitMessageText().should('have.text', text)
    }
    clickSupportCenterButton() {
        this.supportCenterButton().invoke('removeAttr', 'target').click()
    }
    enterHowDidYouHearAboutTelnyxFieldValue(Text) {
        this.howDidYouHearAboutTelnyxField().type(Text)
    }
    checkErrorMesageTextVisibility() {
        this.errorMesageText().should('be.visible')
    }
    scrollToReportAbuseLinkButton() {
        this.reportAbuseLinkButton().scrollIntoView()
    }
    clickReportAbuseLinkButton() {
        this.reportAbuseLinkButton().click()
    }
    
}

module.exports = new ContactUsPage()