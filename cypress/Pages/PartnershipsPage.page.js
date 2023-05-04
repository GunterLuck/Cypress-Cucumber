class PartnershipPage {
    becomeAPartnerButton() {
        return cy.get('div>a>span').contains('BECOME A PARTNER').first()
    }
    firstNameField() {
        return cy.get('#FirstName')
    }
    lastNameField() {
        return cy.get('#LastName')
    }
    companyField() {
        return cy.get('#Company')
    }
    emailField() {
        return cy.get('#Email')
    }
    countryDropdown() {
        return cy.get('#Phone_Number_Extension__c')
    }
    phoneNumberField() {
        return cy.get('#Phone_Number_Base__c')
    }
    partnerTypeDropdown() {
        return cy.get('#Partner_Type__c')
    }
    tellUsField() {
        return cy.get('#Form_Additional_Information__c')
    }
    applyNowButton() {
        return cy.get('[type="submit"]')
    }
    submitMessageText() {
        return cy.get('h1>span')
    }
    errorMessageText() {
        return cy.get('#ValidMsgFirstName')
    }
    clickBecomeAPartnerButton() {
        this.becomeAPartnerButton().click({force: true})
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
    enterCompanyFieldValue(Name) {
        this.companyField().type(Name)
    }
    selectResellerOptionInPartnerTypeDropdown() {
        this.partnerTypeDropdown().select('Reseller')
    }
    enterTellUsFieldValue(Text) {
        this.tellUsField().type(Text)
    }
    clickApplyNowButton() {
        this.applyNowButton().click()
    }
    checkSubmitMessageTextVisibility() {
        this.submitMessageText().should('have.text', 'Thank you.')
    }
    checkErrorMessageTextVisibility() {
        this.submitMessageText().should('be.visible')
    }
}
module.exports = new PartnershipPage()