import { Then } from "cypress-cucumber-preprocessor/steps"
import MissionControlPage from "../../Pages/MissionControlPage.page";


Then('I should see visibility of the "Mission Control Portal" topic text', () => {
    let text = 'Mission Control Portal' 
    MissionControlPage.checkTopicTextMaching(text)
})
And('I scroll down to the "industry-leading platform" link-button', () => {
    MissionControlPage.scrollToIndustryLeadingLincButton()
})
Then('I should see clickability of the "industry-leading platform" link-button', () => {
    MissionControlPage.checkIndustryLeadingLincButtonClickability()
})
And('I click on "industry-leading platform" link-button', () => {
    MissionControlPage.clickIndustryLeadingLincButton()
})