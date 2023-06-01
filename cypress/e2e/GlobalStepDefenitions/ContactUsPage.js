import { Then, And } from "cypress-cucumber-preprocessor/steps"
import ContactUsPage from "../../Pages/ContactUsPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Name = TextGenerator.randomName()
const Email = TextGenerator.randomEmail()
const Number = TextGenerator.randomNumber()
const Website = TextGenerator.randomWebsite()
const Text = TextGenerator.randomLongText()

And('I fill the "Contact Us" form with correct data', async() => {
    ContactUsPage.selectSupportOptionInReasonForContactDropdown()
    ContactUsPage.enterFirstNameFieldValue(Name)
    ContactUsPage.enterLastNameFieldValue(Name)
    ContactUsPage.enterEmailFieldValue(Email)
    ContactUsPage.selectCanadaOptionInCountryDropdown()
    ContactUsPage.enterPhoneNumberFieldValue(Number)
    ContactUsPage.enterCompanyWebsiteFieldValue(Website)
    ContactUsPage.enterDescribeYourRequestFieldValue(Text)
    ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
})
And('I click on "SUBMIT" button', () => {
    ContactUsPage.clickSubmitButton()
})
Then('I should see "Thank you." message text', () => {
    let text = 'Thank you.'
    ContactUsPage.checkSubmitMessageText(text)
})
