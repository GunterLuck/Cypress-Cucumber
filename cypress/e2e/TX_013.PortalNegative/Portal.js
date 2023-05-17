import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
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
    SMSAPIPage.clickProductsDropdown()
    SMSAPIPage.clickSmsApiButton()
})
And('I click on "portal" link button', () => {
    SMSAPIPage.clickPortalButton()
})
Then('I type valid value in "Email" field', () => {
    SignUpPage.enterEmailFieldValue(Email)
})
And('I type valid value in "Full Name" field', () => {
    SignUpPage.enterFullNameFieldValue(Name)
})
And('I type valid value in "Password" field', () => {
    SignUpPage.enterPasswordFieldValue(Password)
})
And('I click on "Agree" button', () => {
    SignUpPage.clickAgreeButton()
})
And('I click on "Submit" button', () => {
    SignUpPage.clickSubmitButton()
})
Then('I should see "one last step" message', () => {
    SignUpPage.checkSubmitMessageVisibility()
})
Then('I should see "This field is required." message', () => {
    SignUpPage.checkErrorMessageVisibility()
})