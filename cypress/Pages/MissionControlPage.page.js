class MissionControlPage {
    topicText() {
        return cy.get('div>h1')
    }
    industryLeadingLincButton() {
        return cy.get('header>p>a')
    }
    scrollToIndustryLeadingLincButton() {
        this.industryLeadingLincButton().scrollIntoView()
    }
    checkIndustryLeadingLincButtonClickability() {
        this.industryLeadingLincButton().should('have.attr','href')
    }
    checkTopicTextMaching() {
        this.topicText().should('have.text', 'Mission Control Portal')
    }
    clickIndustryLeadingLincButton() {
        this.industryLeadingLincButton().click({force: true})
    }
}
module.exports = new MissionControlPage()