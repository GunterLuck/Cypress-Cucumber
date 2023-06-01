import { And } from "cypress-cucumber-preprocessor/steps";
import GlobalNumbersPage from "../../Pages/GlobalNumbers.page";

And('I click on "Search numbers" button', async() => {
    GlobalNumbersPage.clickSearchNumbersButton()
})
And('I scroll down to "See pricing" button', () => {
    GlobalNumbersPage.scrollToSeePricingButton()
})
And('I click on "See pricing" button', () => {
    GlobalNumbersPage.clickSeePricingButton()
})
And('I click on "Ask our experts" link button', () => {
    GlobalNumbersPage.clickAskOurExpertsButton()
})
