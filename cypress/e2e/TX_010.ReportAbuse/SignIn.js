import { When, Then, And } from "cypress-cucumber-preprocessor/steps"
import SignUpPage from "../../Pages/SignUpPage.page";

When('I click on "Sign Up" button', () => {
    SignUpPage.clickSignUpButton()
})
And('I click on "Telnyxs Terms and Conditions" link button', () => {
    SignUpPage.clickTelnyxsTermsLinkButton()
})
Then('I should see title text', () => {
    SignUpPage.checkTitleTextVisibility()
})