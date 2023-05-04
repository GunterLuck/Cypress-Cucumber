import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import MainPage from "../../Pages/MainPage.page";
import CoockiesPage from "../../Pages/CoockiesPage.page";
import SignUpPage from "../../Pages/SignUpPage.page";
import SMSAPIPage from "../../Pages/SMSAPIPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Email = TextGenerator.randomEmail()
const Name = TextGenerator.randomName()
const Password = TextGenerator.randomPassword()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I select "SMS API" option in "Products" dropdown', () => {
    MainPage.clickProductsDropdown()
    MainPage.clickSmsApiButton()
})
And('I click on "portal" link button', () => {
    SMSAPIPage.clickPortalButton()
})
Then('I set valid value in "Email" field', () => {
    SignUpPage.enterEmailFieldValue(Email)
})
And('I set valid value in "Full Name" field', () => {
    SignUpPage.enterFullNameFieldValue(Name)
})
And('I set valid value in "Password" field', () => {
    SignUpPage.enterPasswordFieldValue(Password)
})
And('I click on "Agree" button', () => {
    SignUpPage.clickAgreeButton()
})
Then('I click on "Submit" button', () => {
    SignUpPage.clickSubmitButton()
})
And('I check "one last step" message visibility', () => {
    SignUpPage.checkSubmitTextMessageVisibility()
})
And('I check "This field is required." message visibility', () => {
    SignUpPage.checkErrorTextMessageVisibility()
})