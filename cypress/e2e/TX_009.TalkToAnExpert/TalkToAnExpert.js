import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import MissionControlPage from "../../Pages/MissionControlPage.page";
import G2ComparePage from "../../Pages/G2ComparePage.page";
import ContactUsPage from "../../Pages/ContactUsPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Name = TextGenerator.randomName()
const Email = TextGenerator.randomEmail()
const Number = TextGenerator.randomNumber()
const Website = TextGenerator.randomWebsite()
const Text = TextGenerator.randomLongText()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
And('I select "Mission Control" option in "Why Telnyx" dropdown', () => {
    MissionControlPage.clickWhyTelnyxButton()
    MissionControlPage.clickMissionControlButton()
})
When('I scroll down to the "industry-leading platform" link-button', () => {
    MissionControlPage.scrollToIndustryLeadingLincButton()
})
And('I click on "industry-leading platform" link-button', () => {
    MissionControlPage.clickIndustryLeadingLincButton()
})
When('I click on "Talk to an expert" link button', () => {
    G2ComparePage.clickTalkToAnExpertButton()
})
And('I select "Support" option in "Choose Reason For Contact" dropdown', () => {
    ContactUsPage.selectSupportOptionInReasonForContactDropdown()
})
And('I type valid value in "First Name" field', () => {
    ContactUsPage.enterFirstNameFieldValue(Name)
})
And('I type valid value in "Lust Name" field', () => {
    ContactUsPage.enterLastNameFieldValue(Name)
})
And('I type valid value in "Email" field', () => {
    ContactUsPage.enterEmailFieldValue(Email)
})
And('I select "Canada" option in "Country" dropdown', () => {
    ContactUsPage.selectCanadaOptionInCountryDropdown()
})
And('I type valid value in "Phone Number" field', () => {
    ContactUsPage.enterPhoneNumberFieldValue(Number)
})
And('I type valid value in "Company Website" field', () => {
    ContactUsPage.enterCompanyWebsiteFieldValue(Website)
})
And('I type valid value in "Describe Your Request" field', () => {
    ContactUsPage.enterDescribeYourRequestFieldValue(Text)
})
And('I type valid value in "How did you hear about Telnyx" field', () => {
    ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
})
When('I click on "Submit" button', () => {
    ContactUsPage.clickSubmitButton()
})
Then('I should see "Thank you." message', () => {
    ContactUsPage.checkSubmitMessageText('Thank you.')
})