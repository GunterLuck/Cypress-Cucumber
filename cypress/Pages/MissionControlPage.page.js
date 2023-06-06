const MainPage = require("./MainPage.page")

export default new class MissionControlPage extends MainPage{
    topicText() {
        return cy.get('div>h1')
    }
    industryLeadingLincButton() {
        return cy.get('header>p>a')
    }
    scrollToIndustryLeadingLincButton() {
        this.industryLeadingLincButton().scrollIntoView()
    }
    checkIndustryLeadingLincButtonVisibility() {
        this.industryLeadingLincButton().should('be.visible')
    }
    checkTopicTextMaching(text) {
        this.topicText().should('have.text', text)
    }
    clickIndustryLeadingLincButton() {
        this.industryLeadingLincButton().click({force: true})
    }
}