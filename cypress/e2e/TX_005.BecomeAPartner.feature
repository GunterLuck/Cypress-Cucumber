Feature: Test the "Become a Telnyx Partner" form with positive scenario, form opened via link from the Partnerships page

    Scenario: Verify that "Thank you." message appears after submitting "Become a Telnyx Partner" form with valid credentials, the "Become a Telnyx Partner" form is triggered after clicking the "Become a partner" button on the "Partnerships" page.
        Given I am on the Telnyx page and confirm the cookies
        And I select "Why Telnyx" option in "Partners" dropdown
        When I click on "Become a partner" button
        And I type valid value in "First Name" field
        And I type valid value in "Last Name" field
        And I type valid value in "Company" field
        And I type valid value in "Business email" field
        And I select "Canada" option in "Country" dropdown
        And I type valid value in "Phone Number" field
        And I select "Reseller" option in "Partner type" dropdown
        And I type valid value in "Tell us" field
        And I click on "Apply Now" button
        Then I should see "Thank you." message