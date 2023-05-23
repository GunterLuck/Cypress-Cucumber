import { When, Then, And } from "cypress-cucumber-preprocessor/steps"
import TextGenerator from "../../Helper/TextGenerator";
import SignUpPage from "../../Pages/SignUpPage.page";
import SignInPage from "../../Pages/SignInPage.page";

const Email = TextGenerator.randomEmail()
const Password = TextGenerator.randomPassword()

When('I click on "Sign Up" button', () => {
    SignUpPage.clickSignUpButton()
})
And('I scroll down to "Log In" link button', () => {
    SignUpPage.scrollToLogInLinkButton()
})
And('I click on "Log In" link button', () => {
    SignUpPage.clickLogInLinkButton()
})
And('I fill the "Sign In" form with correct data', async() => {
    SignInPage.enterEmailFieldValue(Email)
    SignInPage.enterPasswordFieldValue(Password)
})
And('I click on "Log In" button', () => {
    SignInPage.clickLogInButton()
})
Then('I should see "That email and password combinations is not valid ..." message', () => {
    SignInPage.checkErrorMesageVisibility()
})
Then('I should see "Required" message', () => {
    SignInPage.checkEmptyFieldErrorMesageVisibility()
})