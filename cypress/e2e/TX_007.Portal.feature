Feature: Check that "Confirm email" page is loading after clicking "Submit" button on Sign Up page with filling the correct data in the required fields, form opened via link from the "SMS API" page
    
    Scenario: Verify that "The last one step" message appears and "Confirm email" page is loading after clicking "Submit" button,  the Sign up form is triggered after clicking the "portal" link button on the "SMS API" page.
        Given I am on the Telnyx page and confirm the cookies
        When I select "SMS API" option in "Products" dropdown
        And I click on "portal" link button
        Then I set valid value in "Email" field
        And I set valid value in "Full Name" field
        And I set valid value in "Password" field
        And I click on "Agree" button
        Then I click on "Submit" button
        And I check "one last step" message visibility