import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import MainPage from "../../Pages/MainPage.page";
import CoockiesPage from "../../Pages/CoockiesPage.page";
import TextGenerator from "../../Helper/TextGenerator";
import SignUpPage from "../../Pages/SignUpPage.page";
import SignInPage from "../../Pages/SignInPage.page";

const Email = TextGenerator.randomEmail()
const Password = TextGenerator.randomPassword()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I click on "Sign Up" button', () => {
    MainPage.clickSignUpButton()
})
And('I scroll down to "Log In" link button', () => {
    SignUpPage.scrollToLogInLinkButton()
})
And('I click on "Log In" link button', () => {
    SignUpPage.clickLogInLinkButton()
})
When('I set valid value in "Business Email" field', () => {
    SignInPage.enterEmailFieldValue(Email)
})
And('I set valid value in "Password" field', () => {
    SignInPage.enterPasswordFieldValue(Password)
})
When('I click on "Log In" button', () => {
    SignInPage.clickLogInButton()
})
Then('I check "That email and password combinations is not valid ..." message visibility', () => {
    SignInPage.checkErrorTextMesageVisibility()
})
Then('I check "Required" message visibility', () => {
    SignInPage.checkEmptyFieldErrorTextMesageVisibility()
})