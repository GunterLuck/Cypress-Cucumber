import { And } from "cypress-cucumber-preprocessor/steps"
import G2ComparePage from "../../Pages/G2ComparePage.page";

And('I click on "Talk to an expert" link button', () => {
    G2ComparePage.clickTalkToAnExpertButton()
})