import { Given } from "cypress-cucumber-preprocessor/steps";
import CoockiesPage from "../../Pages/CoockiesPage.page";

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})