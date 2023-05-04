Feature: Test the "Become a Telnyx Partner" form with positive scenario, form opened via link from the Partnerships page

    Scenario: Verify that "Thank you." message appears after submitting "Become a Telnyx Partner" form with valid credentials, the "Become a Telnyx Partner" form is triggered after clicking the "Become a partner" button on the "Partnerships" page.
        Given I am on the Telnyx page and confirm the cookies
        When I select "Why Telnyx" option in "Partners" dropdown
        And I click on "Become a partner" button
        Then I set valid value in "First Name" field
        And I set valid value in "Last Name" field
        And I set valid value in "Company" field
        And I set valid value in "Business email" field
        And I select "Canada" option in "Country" dropdown
        And I set valid value in "Phone Number" field
        And I select "Reseller" option in "Partner type" dropdown
        And I set valid value in "Tell us" field
        Then I click on "Apply Now" button
        And I check "Thank you." message visibility