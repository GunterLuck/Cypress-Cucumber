Feature: Test Sign In form from Sign Up page with negative scenario when all fields are left empty
    
    Scenario: Verify that "Required" message appears and user is not signed in after submitting Sign In form with invalid credentials, the "Sign In" form is triggered after clicking the "Log In" link button on the "Sign Up" page.
        Given I am on the Telnyx page and confirm the cookies
        And I click on "Sign Up" button
        When I scroll down to "Log In" link button
        And I click on "Log In" link button
        When I click on "Log In" button
        Then I should see "Required" message