import { When, Then, And } from "cypress-cucumber-preprocessor/steps"
import SolutionsPage from "../../Pages/SolutionsPage.page";


And('I click on "See industries" button', () => {
    SolutionsPage.clickSeeIndustriesButton()
})
Then('I should see "Healthcare" button', () => {
    SolutionsPage.checkHealthcareButtonVisibility()
})
And('I scroll up to "See use cases" button', () => {
    SolutionsPage.scrollToSeeIndustriesButton()
})
And('I click on "See use cases" button', () => {
    SolutionsPage.clickSeeUseCasesButton()
})
Then('I should see "Account notifications" text and image', () => {
    SolutionsPage.checkAccountNotificationWindowVisibility
})