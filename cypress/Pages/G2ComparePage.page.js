class G2ComparePage {
    talkToAnExpertButton() {
        return cy.get('[href="/contact-us"]>span').contains('Talk to an expert').first()
    }
    clickTalkToAnExpertButton() {
        this.talkToAnExpertButton().click({force: true})
    }
}
module.exports = new G2ComparePage()