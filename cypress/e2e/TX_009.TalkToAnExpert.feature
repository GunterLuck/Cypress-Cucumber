Feature: Test the "Contact Us" form with positive scenario, form opened via "Talk to an expert" link button from the "g2-compare" page
    
    Scenario: Verify that "Thank you." message appears after submitting Contact Us form with valid credentials, the "Contact Us" form is triggered after clicking the "Talk to an expert" link button on the "g2-compare" page.
        Given I am on the Telnyx page and confirm the cookies
        When I select "Mission Control" option in "Why Telnyx" dropdown
        And I scroll down to the "industry-leading platform" link-button
        And I click on "industry-leading platform" link-button
        When I click on "Talk to an expert" link button
        When I select "Support" option in "Choose Reason For Contact" dropdown
        And I set valid value in "First Name" field
        And I set valid value in "Lust Name" field
        And I set valid value in "Email" field
        And I select "Canada" option in "Country" dropdown
        And I set valid value in "Phone Number" field
        And I set valid value in "Company Website" field
        And I set valid value in "Describe Your Request" field
        And I set valid value in "How did you hear about Telnyx" field
        And I click on "Submit" button
        Then I check "Thank you." message visibility