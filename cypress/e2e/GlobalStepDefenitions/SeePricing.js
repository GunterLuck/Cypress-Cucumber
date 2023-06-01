import { Then, And } from "cypress-cucumber-preprocessor/steps"
import PrisingPage from "../../Pages/PrisingPage.page";

Then('I should see visibility of the "Pay as you go" window', () => {
    PrisingPage.checkPayAsYouGoWindowVisibility()
})
And('I should see visibility of the "Volume-based pricing" window', () => {
    PrisingPage.checkVolumeBasedPrisingVisibility()
})