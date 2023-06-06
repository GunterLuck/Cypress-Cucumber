class G2ComparePage {
    talkToAnExpertButton() {
        return cy.get('div>a[href="https://telnyx.com/contact-us"]').first()
    }
    clickTalkToAnExpertButton() {
        this.talkToAnExpertButton().click({force: true})
    }
}
module.exports = new G2ComparePage()