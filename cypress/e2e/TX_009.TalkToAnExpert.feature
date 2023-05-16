Feature: Test the "Contact Us" form with positive scenario, form opened via "Talk to an expert" link button from the "g2-compare" page
    
    Scenario: Verify that "Thank you." message appears after submitting Contact Us form with valid credentials, the "Contact Us" form is triggered after clicking the "Talk to an expert" link button on the "g2-compare" page.
        Given I am on the Telnyx page and confirm the cookies
        And I select "Mission Control" option in "Why Telnyx" dropdown
        When I scroll down to the "industry-leading platform" link-button
        And I click on "industry-leading platform" link-button
        When I click on "Talk to an expert" link button
        And I select "Support" option in "Choose Reason For Contact" dropdown
        And I type valid value in "First Name" field
        And I type valid value in "Lust Name" field
        And I type valid value in "Email" field
        And I select "Canada" option in "Country" dropdown
        And I type valid value in "Phone Number" field
        And I type valid value in "Company Website" field
        And I type valid value in "Describe Your Request" field
        And I type valid value in "How did you hear about Telnyx" field
        When I click on "Submit" button
        Then I should see "Thank you." message