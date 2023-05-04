import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import MainPage from "../../Pages/MainPage.page";
import CoockiesPage from "../../Pages/CoockiesPage.page";
import MissionControlPage from "../../Pages/MissionControlPage.page";

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I select "Mission Control" option in "Why Telnyx" dropdown', () => {
    MainPage.clickWhyTelnyxButton()
    MainPage.clickMissionControlButton()
})
Then('I check visibility of the "Mission Control Portal" topic text', () => {
    MissionControlPage.checkTopicTextMaching()
})
And('I scroll down to the "industry-leading platform" link-button', () => {
    MissionControlPage.scrollToIndustryLeadingLincButton()
})
And('I check clickability of the "industry-leading platform" link-button', () => {
    MissionControlPage.checkIndustryLeadingLincButtonClickability()
})