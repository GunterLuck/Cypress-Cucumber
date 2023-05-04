import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import MainPage from "../../Pages/MainPage.page";
import NumbersPricingPage from "../../Pages/NumbersPricing.page";
import CoockiesPage from "../../Pages/CoockiesPage.page";

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I Select "Global Numbers" option in "Pricing" dropdown', () => {
    MainPage.clickPricingDropdown()
    MainPage.clickGlobalNumbersButton()
})
Then('I scroll down to "Pay as you go" dropdown', () => {
    NumbersPricingPage.scrollDownPayAsYouGoDropdown()
})
And('I select "Canada" option in "Pay as you go" dropdown', () => {
    NumbersPricingPage.selectCanadaOptinInPayAsYouGoDropdown()
    
})
And('I check "Using an existing number" text visibility', () => {
    NumbersPricingPage.checkUsingAnExistingNumberTextVisibility()
})
Then('I select "Ukraine" option in "Pay as you go" dropdown', () => {
    NumbersPricingPage.selectUkraineOptinInpayAsYouGoDropdown()
})
And('I check "Using an existing number" text not visibile', () => {
    NumbersPricingPage.checkUsingAnExistingNumberTextNotVisible()
})