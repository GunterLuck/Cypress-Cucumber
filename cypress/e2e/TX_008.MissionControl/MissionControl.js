import { When, Then } from "cypress-cucumber-preprocessor/steps"
import MissionControlPage from "../../Pages/MissionControlPage.page";

When('I select "Mission Control" option in "Why Telnyx" dropdown', () => {
    MissionControlPage.clickWhyTelnyxButton()
    MissionControlPage.clickMissionControlButton()
})
Then('I should see visibility of the "Mission Control Portal" topic text', () => {
    let text = 'Mission Control Portal' 
    MissionControlPage.checkTopicTextMaching(text)
})
When('I scroll down to the "industry-leading platform" link-button', () => {
    MissionControlPage.scrollToIndustryLeadingLincButton()
})
Then('I should see clickability of the "industry-leading platform" link-button', () => {
    MissionControlPage.checkIndustryLeadingLincButtonClickability()
})