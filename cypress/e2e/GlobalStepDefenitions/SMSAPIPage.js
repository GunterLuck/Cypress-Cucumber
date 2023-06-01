import { And } from "cypress-cucumber-preprocessor/steps"
import SMSAPIPage from "../../Pages/SMSAPIPage.page";

And('I click on "portal" link button', () => {
    SMSAPIPage.clickPortalButton()
})