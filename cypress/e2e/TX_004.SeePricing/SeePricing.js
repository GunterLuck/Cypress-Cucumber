import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import MainPage from "../../Pages/MainPage.page";
import CoockiesPage from "../../Pages/CoockiesPage.page";
import GlobalNumbersPage from "../../Pages/GlobalNumbers.page";
import PrisingPage from "../../Pages/PrisingPage.page";

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I select "Global Numbers" option in "Products" dropdown', () => {
    MainPage.clickProductsDropdown()
    MainPage.clickGlobalNumbersButton()
})
Then('I scroll down to "See pricing" button', () => {
    GlobalNumbersPage.scrollToSeePricingButton()
})
And('I click on "See pricing" button', () => {
    GlobalNumbersPage.clickSeePricingButton()
})
Then('I check visibility of the "Pay as you go" window', () => {
    PrisingPage.checkPayAsYouGoWindowVisibility()
})
And('I check visibility of the "Volume-based pricing" window', () => {
    PrisingPage.checkVolumeBasedPrisingVisibility()
})