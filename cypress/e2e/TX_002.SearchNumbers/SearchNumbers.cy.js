import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import GlobalNumbersPage from "../../Pages/GlobalNumbers.page";
import SignUpPage from "../../Pages/SignUpPage.page";
import TextGenerator from "../../Helper/TextGenerator";
import CoockiesPage from "../../Pages/CoockiesPage.page";

const Email = TextGenerator.randomEmail()
const Name = TextGenerator.randomName()
const Password = TextGenerator.randomPassword()

Given('I am on the Telnyx page and confirm the cookies', async() => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I Select "Global Numbers" option in "Products" dropdown', async() => {
    GlobalNumbersPage.clickProductsDropdown()
    GlobalNumbersPage.clickGlobalNumbersButton()
})
And('I click on "Search numbers" button', async() => {
    GlobalNumbersPage.clickSearchNumbersButton()
})
When('I type valid value in "Email" field', async() => {
    SignUpPage.enterEmailFieldValue(Email)
})
And('I type valid value in "Full Name" field', async() => {
    SignUpPage.enterFullNameFieldValue(Name)
})
And('I type valid value in "Password" field', async() => {
    SignUpPage.enterPasswordFieldValue(Password)
})
And('I click on "Agree" button', async() => {
    SignUpPage.clickAgreeButton()
})
And('I click on "Submit" button', async() => {
    SignUpPage.clickSubmitButton()
})
Then('I should see "one last step" message', async() => {
    SignUpPage.checkSubmitMessageVisibility()
})