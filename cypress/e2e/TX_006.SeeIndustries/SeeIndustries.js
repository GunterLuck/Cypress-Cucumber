import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import MainPage from "../../Pages/MainPage.page";
import CoockiesPage from "../../Pages/CoockiesPage.page";
import SolutionsPage from "../../Pages/SolutionsPage.page";

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I click on "Solutions" button', () => {
    MainPage.clickSolutionsButton()
})
Then('I click on "See industries" button', () => {
    SolutionsPage.clickSeeIndustriesButton()
})
And('I check "Healthcare" button visibility', () => {
    SolutionsPage.checkHealthcareButtonVisibility()
})
And('I scroll up to "See use cases" button', () => {
    SolutionsPage.scrollToSeeIndustriesButton()
})
Then('I click on "See use cases" button', () => {
    SolutionsPage.clickSeeUseCasesButton()
})
And('I check "Account notifications" text and image visibility', () => {
    SolutionsPage.checkAccountNotificationWindowVisibility
})