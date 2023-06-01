import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import SignUpPage from "../../Pages/SignUpPage.page";

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I click on "Sign Up" button', () => {
    SignUpPage.clickSignUpButton()
})
And('I scroll down to "Telnyxs Terms & Conditions" link button', () => {
    SignUpPage.scrollTelnyxsTermsLinkButton()
})
And('I click on "Privacy Policy" button', () => {
    SignUpPage.clickPrivacyPolicyLinkButton()
})
Then('I should see topic text', () => {
    SignUpPage.checkTitleTextVisibility()
})