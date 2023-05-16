import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import PartnershipsPage from "../../Pages/PartnershipsPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Name = TextGenerator.randomName()
const Email = TextGenerator.randomEmail()
const Number = TextGenerator.randomNumber()
const Text = TextGenerator.randomLongText()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I select "Why Telnyx" option in "Partners" dropdown', () => {
    PartnershipsPage.clickWhyTelnyxButton()
    PartnershipsPage.clickPartnersButton()
})
And('I click on "Become a partner" button', () => {
    PartnershipsPage.clickBecomeAPartnerButton()
})
And('I type valid value in "First Name" field', () => {
    PartnershipsPage.enterFirstNameFieldValue(Name)
})
And('I type valid value in "Last Name" field', () => {
    PartnershipsPage.enterLastNameFieldValue(Name)
})
And('I type valid value in "Company" field', () => {
    PartnershipsPage.enterCompanyFieldValue(Name)
})
And('I type valid value in "Business email" field', () => {
    PartnershipsPage.enterEmailFieldValue(Email)
})
And('I select "Canada (+1)" option in "Country" dropdown', () => {
    PartnershipsPage.selectCanadaOptionInCountryDropdown()
})
And('I type valid value in "Phone Number" field', () => {
    PartnershipsPage.enterPhoneNumberFieldValue(Number)
})
And('I select "Reseller" option in "Partner type" dropdown', () => {
    PartnershipsPage.selectResellerOptionInPartnerTypeDropdown()
})
And('I type valid value in "Tell us" field', () => {
    PartnershipsPage.enterTellUsFieldValue(Text)
})
And('I click on "Apply Now" button', () => {
    PartnershipsPage.clickApplyNowButton()
})
Then('I should see "Thank you." message', () => {
    PartnershipsPage.checkSubmitMessageVisibility()
})
Then('I should see "This field is required." message', () => {
    PartnershipsPage.checkErrorMessageVisibility()
})