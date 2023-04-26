import { When, Then } from "cypress-cucumber-preprocessor/steps";
import MainPage from "../../Pages/MainPage";
import GlobalNumbersPage from "../../Pages/GlobalNumbers.page";
import SignUpPage from "../../Pages/SignUpPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Email = TextGenerator.randomEmail()
const Name = TextGenerator.randomName()
const Password = TextGenerator.randomPassword()

When('I Select "Global Numbers" option in "Products" dropdown', async() => {
    MainPage.clickProductsDropdown()
})
Then('I click on "Puchase numbers" button', async() => {
    GlobalNumbersPage.clickPushaseNumbersButton()
})
Then('I set valid value in "Email" field', async() => {
    SignUpPage.enterEmailFieldValue(Email)
})
Then('I set valid value in "Full Name" field', async() => {
    SignUpPage.enterFullNameFieldValue(Name)
})
Then('I set valid value in "Password" field', async() => {
    SignUpPage.enterPasswordFieldValue(Password)
})
Then('I click on "Agree" button', async() => {
    SignUpPage.clickAgreeButton()
})
Then('I click on "Submit" button', async() => {
    SignUpPage.clickSubmitButton()
})
Then('I check "The last one step" message visibility', async() => {
    SignUpPage.checkSubmitTextMessageVisibility()
})