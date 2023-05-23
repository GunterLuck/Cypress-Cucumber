import { When, Then, And } from "cypress-cucumber-preprocessor/steps"
import SignUpPage from "../../Pages/SignUpPage.page";
import SMSAPIPage from "../../Pages/SMSAPIPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Email = TextGenerator.randomEmail()
const Name = TextGenerator.randomName()
const Password = TextGenerator.randomPassword()

When('I select "SMS API" option in "Products" dropdown', () => {
    SMSAPIPage.clickProductsDropdown()
    SMSAPIPage.clickSmsApiButton()
})
And('I click on "portal" link button', () => {
    SMSAPIPage.clickPortalButton()
})
And('I fill the "Sign Up" form with correct data', async() => {
    SignUpPage.enterEmailFieldValue(Email)
    SignUpPage.enterFirstNameFieldValue(Name)
    SignUpPage.enterLastNameFieldValue(Name)
    SignUpPage.enterPasswordFieldValue(Password)
    SignUpPage.clickAgreeButton()
})
And('I click on "SIGN UP" button', () => {
    SignUpPage.clickSubmitButton()
})
Then('I should see "one last step" message', () => {
    SignUpPage.checkSubmitMessageVisibility()
})
Then('I should see "This field is required." message', () => {
    SignUpPage.checkErrorMessageVisibility()
})