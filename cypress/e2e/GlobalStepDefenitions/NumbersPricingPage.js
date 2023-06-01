import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import NumbersPricingPage from "../../Pages/NumbersPricing.page";

And('I scroll down to "Pay as you go" dropdown', () => {
    NumbersPricingPage.scrollDownPayAsYouGoDropdown()
})
And('I select "Canada" option in "Pay as you go" dropdown', () => {
    NumbersPricingPage.selectCanadaOptionInPayAsYouGoDropdown()   
})
Then('I should see "Using an existing number" text', () => {
    NumbersPricingPage.checkUsingAnExistingNumberTextVisibility()
})
When('I select "Ukraine" option in "Pay as you go" dropdown', () => {
    NumbersPricingPage.selectUkraineOptionInPayAsYouGoDropdown()
})
Then('I shouldn`t see "Using an existing number" text', () => {
    NumbersPricingPage.checkUsingAnExistingNumberTextNotVisible()
})