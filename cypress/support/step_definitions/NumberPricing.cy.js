import { When, Then } from "cypress-cucumber-preprocessor/steps"
import MainPage from "../../Pages/MainPage.page";
import NumbersPricingPage from "../../Pages/GlobalNumbers.page";

When('I Select "Global Numbers" option in "Pricing" dropdown', () => {
    MainPage.clickPricingDropdown()
    MainPage.clickGlobalNumbersButton()
})
Then('I scroll down to "Pay as you go" dropdown', () => {
    NumbersPricingPage.scrollDownPayAsYouGoDropdown()
})
Then('I select "Canada" option in "Pay as you go" dropdown', () => {
    NumbersPricingPage.selectCanadaOptinInpayAsYouGoDropdown()
})
Them('I check "Using an existing number" text visibility', () => {
    NumbersPricingPage.checkUsingAnExistingNumberTextVisibility()
})
Then('I select "Ukraine" option in "Pay as you go" dropdown', () => {
    NumbersPricingPage.selectUkraineOptinInpayAsYouGoDropdown()
})
Then('I check "Using an existing number" text visibility', () => {
    NumbersPricingPage.checkUsingAnExistingNumberTextVisibility()
})