import { When } from "cypress-cucumber-preprocessor/steps";
import NumbersPricingPage from "../../Pages/NumbersPricing.page";
import GlobalNumbersPage from "../../Pages/GlobalNumbers.page";
import PartnershipsPage from "../../Pages/PartnershipsPage.page";
import SolutionsPage from "../../Pages/SolutionsPage.page";
import SMSAPIPage from "../../Pages/SMSAPIPage.page";
import MissionControlPage from "../../Pages/MissionControlPage.page";
import SignUpPage from "../../Pages/SignUpPage.page";


When('I select "Global Numbers" option in "Pricing" dropdown', () => {
    NumbersPricingPage.clickPricingDropdown()
    NumbersPricingPage.clickGlobalNumbersButton()
})
When('I select "Global Numbers" option in "Products" dropdown', async() => {
    GlobalNumbersPage.clickProductsDropdown()
    GlobalNumbersPage.clickGlobalNumbersButton()
})
When('I select "Partners" option in "Why Telnyx" dropdown', () => {
    PartnershipsPage.clickWhyTelnyxButton()
    PartnershipsPage.clickPartnersButton()
})
When('I click on "Solutions" button', () => {
    SolutionsPage.clickSolutionsButton()
})
When('I select "SMS API" option in "Products" dropdown', () => {
    SMSAPIPage.clickProductsDropdown()
    SMSAPIPage.clickSmsApiButton()
})
When('I select "Mission Control" option in "Why Telnyx" dropdown', () => {
    MissionControlPage.clickWhyTelnyxButton()
    MissionControlPage.clickMissionControlButton()
})
When('I click on "Sign Up" button', () => {
    SignUpPage.clickSignUpButton()
})