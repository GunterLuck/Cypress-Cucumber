import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import MainPage from "../../Pages/MainPage.page";
import GlobalNumbersPage from "../../Pages/GlobalNumbers.page";
import SignUpPage from "../../Pages/SignUpPage.page";
import TextGenerator from "../../Helper/TextGenerator";
import CoockiesPage from "../../Pages/CoockiesPage.page";

const Email = TextGenerator.randomEmail()
const Name = TextGenerator.randomName()
const Password = TextGenerator.randomPassword()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I Select "Global Numbers" option in "Products" dropdown', async() => {
    MainPage.clickProductsDropdown()
    MainPage.clickGlobalNumbersButton()
})
Then('I click on "Puchase numbers" button', async() => {
    GlobalNumbersPage.clickPushaseNumbersButton()
})
Then('I set valid value in "Email" field', async() => {
    SignUpPage.enterEmailFieldValue(Email)
})
And('I set valid value in "Full Name" field', async() => {
    SignUpPage.enterFullNameFieldValue(Name)
})
And('I set valid value in "Password" field', async() => {
    SignUpPage.enterPasswordFieldValue(Password)
})
And('I click on "Agree" button', async() => {
    SignUpPage.clickAgreeButton()
})
Then('I click on "Submit" button', async() => {
    SignUpPage.clickSubmitButton()
})
And('I check "one last step" message visibility', async() => {
    SignUpPage.checkSubmitTextMessageVisibility()
})