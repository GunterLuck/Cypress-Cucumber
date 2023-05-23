import { When, Then, And } from "cypress-cucumber-preprocessor/steps"
import SignUpPage from "../../Pages/SignUpPage.page";
import SMSAPIPage from "../../Pages/SMSAPIPage.page";

When('I select "SMS API" option in "Products" dropdown', () => {
    SMSAPIPage.clickProductsDropdown()
    SMSAPIPage.clickSmsApiButton()
})
And('I click on "portal" link button', () => {
    SMSAPIPage.clickPortalButton()
})
And('I click on "Agree" button', () => {
    SignUpPage.clickAgreeButton()
})
And('I click on "SIGN UP" button', () => {
    SignUpPage.clickSubmitButton()
})
Then('I should see "This field is required." message', () => {
    SignUpPage.checkErrorMessageVisibility()
})