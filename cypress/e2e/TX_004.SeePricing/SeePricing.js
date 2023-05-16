import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import GlobalNumbersPage from "../../Pages/GlobalNumbers.page";
import PrisingPage from "../../Pages/PrisingPage.page";

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
And('I select "Global Numbers" option in "Products" dropdown', () => {
    GlobalNumbersPage.clickProductsDropdown()
    GlobalNumbersPage.clickGlobalNumbersButton()
})
When('I scroll down to "See pricing" button', () => {
    GlobalNumbersPage.scrollToSeePricingButton()
})
And('I click on "See pricing" button', () => {
    GlobalNumbersPage.clickSeePricingButton()
})
Then('I should see visibility of the "Pay as you go" window', () => {
    PrisingPage.checkPayAsYouGoWindowVisibility()
})
And('I should see visibility of the "Volume-based pricing" window', () => {
    PrisingPage.checkVolumeBasedPrisingVisibility()
})