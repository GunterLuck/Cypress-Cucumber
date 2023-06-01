import { Then, And } from "cypress-cucumber-preprocessor/steps";
import SignUpPage from "../../Pages/SignUpPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Email = TextGenerator.randomEmail()
const Name = TextGenerator.randomName()
const Password = TextGenerator.randomPassword()

And('I fill the "Sign Up" form with correct data', async() => {
    SignUpPage.enterEmailFieldValue(Email)
    SignUpPage.enterFirstNameFieldValue(Name)
    SignUpPage.enterLastNameFieldValue(Name)
    SignUpPage.enterPasswordFieldValue(Password)
    SignUpPage.clickAgreeButton()
})
And('I click on "SIGN UP" button', async() => {
    SignUpPage.clickSubmitButton()
})
Then('I should see "one last step" message', async() => {
    SignUpPage.checkSubmitMessageVisibility()
})
Then('I should see "This field is required." message', () => {
    SignUpPage.checkErrorMessageVisibility()
})
And('I scroll down to "Log In" link button', () => {
    SignUpPage.scrollToLogInLinkButton()
})
And('I click on "Log In" link button', () => {
    SignUpPage.clickLogInLinkButton()
})
And('I click on "Privacy Policy" button', () => {
    SignUpPage.clickPrivacyPolicyLinkButton()
})
And('I scroll down to "Telnyxs Terms & Conditions" link button', () => {
    SignUpPage.scrollTelnyxsTermsLinkButton()
})
And('I click on "Telnyxs Terms & Conditions" link button', () => {
    SignUpPage.clickTelnyxsTermsLinkButton()
})
Then('I should see topic text', () => {
    SignUpPage.checkTitleTextVisibility()
})
Then('I should see title text', () => {
    SignUpPage.checkTitleTextVisibility()
})