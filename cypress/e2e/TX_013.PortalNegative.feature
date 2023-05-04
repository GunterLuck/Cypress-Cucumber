Feature: Test Sign up form from Contact Us page with negative scenario where all fields are filled with incorrect credentials
    
    Scenario: Verify that "Thank you for submitting your abuse complaint." message appears and user is not signed in after submitting Sign up form empty fields, the "Sign up" form is triggered after clicking the "portal" button on the "SMS API" page.
        Given I am on the Telnyx page and confirm the cookies
        When I select "SMS API" option in "Products" dropdown
        And I click on "portal" link button
        Then I click on "Submit" button
        And I check "This field is required." message visibility