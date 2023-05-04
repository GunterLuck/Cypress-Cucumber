import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import MainPage from "../../Pages/MainPage.page";
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
    MainPage.clickWhyTelnyxButton()
    MainPage.clickPartnersButton()
})
And('I click on "Become a partner" button', () => {
    PartnershipsPage.clickBecomeAPartnerButton()
})
Then('I set valid value in "First Name" field', () => {
    PartnershipsPage.enterFirstNameFieldValue(Name)
})
And('I set valid value in "Last Name" field', () => {
    PartnershipsPage.enterLastNameFieldValue(Name)
})
And('I set valid value in "Company" field', () => {
    PartnershipsPage.enterCompanyFieldValue(Name)
})
And('I set valid value in "Business email" field', () => {
    PartnershipsPage.enterEmailFieldValue(Email)
})
And('I select "Canada (+1)" option in "Country" dropdown', () => {
    PartnershipsPage.selectCanadaOptionInCountryDropdown()
})
And('I set valid value in "Phone Number" field', () => {
    PartnershipsPage.enterPhoneNumberFieldValue(Number)
})
And('I select "Reseller" option in "Partner type" dropdown', () => {
    PartnershipsPage.selectResellerOptionInPartnerTypeDropdown()
})
And('I set valid value in "Tell us" field', () => {
    PartnershipsPage.enterTellUsFieldValue(Text)
})
Then('I click on "Apply Now" button', () => {
    PartnershipsPage.clickApplyNowButton()
})
And('I check "Thank you." message visibility', () => {
    PartnershipsPage.checkSubmitMessageTextVisibility()
})
And('I check "This field is required." message visibility', () => {
    PartnershipsPage.checkErrorMessageTextVisibility()
})