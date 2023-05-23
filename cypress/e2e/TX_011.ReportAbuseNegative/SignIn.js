import { When, Then, And } from "cypress-cucumber-preprocessor/steps"
import SignUpPage from "../../Pages/SignUpPage.page";

When('I click on "Sign Up" button', () => {
    SignUpPage.clickSignUpButton()
})
When('I scroll down to "Telnyxs Terms & Conditions" link button', () => {
    SignUpPage.scrollTelnyxsTermsLinkButton()
})
And('I click on "Privacy Policy" button', () => {
    SignUpPage.clickPrivacyPolicyLinkButton()
})
And('I click on "Telnyxs Terms & Conditions" link button', () => {
    SignUpPage.clickTelnyxsTermsLinkButton()
})
Then('I should see topic text', () => {
    SignUpPage.checkTitleTextVisibility()
})