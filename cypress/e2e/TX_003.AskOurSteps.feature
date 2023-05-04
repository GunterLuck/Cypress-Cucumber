Feature: Test the "Contact Us" form with positive scenario, form opened via link from the Global Numbers page

    Scenario: Verify that "Thank you." message appears after submitting Contact Us form with valid credentials, the "Contact Us" form is triggered after clicking the "Ask our experts" button on the "Global Numbers" page.
        Given I am on the Telnyx page and confirm the cookies
        When I select "Global Numbers" option in "Products" dropdown
        And I click on  "Ask our experts" link button
        When I select "Support" option in "Choose Reason For Contact" dropdown
        And I set valid value in "First Name" field
        And I set valid value in "Lust Name" field
        And I set valid value in "Email" field
        And I select "Canada" option in "Country" dropdown
        And I set valid value in "Phone Number" field
        And I set valid value in "Company Website" field
        And I set valid value in "Describe Your Request" field
        And I set valid value in "How did you hear about Telnyx" field
        When I click on "Submit" button
        Then I check "Thank you." message visibility
