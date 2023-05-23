import { When, Then, And } from "cypress-cucumber-preprocessor/steps"
import PartnershipsPage from "../../Pages/PartnershipsPage.page";

When('I select "Partners" option in "Why Telnyx" dropdown', () => {
    PartnershipsPage.clickWhyTelnyxButton()
    PartnershipsPage.clickPartnersButton()
})
And('I click on "Become a partner" button', () => {
    PartnershipsPage.clickBecomeAPartnerButton()
})
And('I click on "Apply Now" button', () => {
    PartnershipsPage.clickApplyNowButton()
})
Then('I should see "This field is required." message in Partnerships', () => {
    PartnershipsPage.checkErrorMessageVisibility()
})