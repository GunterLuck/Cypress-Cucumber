Feature: Test the "Contact Us" form with positive scenario, form opened via link from the Global Numbers page

    Scenario: Verify that "Thank you." message appears after submitting Contact Us form with valid credentials, the "Contact Us" form is triggered after clicking the "Ask our experts" button on the "Global Numbers" page.
        Given I am on the Telnyx page and confirm the cookies
        And I select "Global Numbers" option in "Products" dropdown
        When I click on  "Ask our experts" link button
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
        Then I should see "Thank you." message text
