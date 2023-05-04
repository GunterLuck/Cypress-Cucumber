Feature: Test Sign In form from Sign Up page with negative scenario where all fields are filled with incorrect credentials
    
    Scenario: Verify that "That email and password combinations is not valid ..." message appears and user is not signed in after submitting Log In form with invalid credentials from Contuct Us page 
        Given I am on the Telnyx page and confirm the cookies
        When I click on "Sign Up" button
        And I scroll down to "Log In" link button
        And I click on "Log In" link button
        When I set valid value in "Business Email" field
        And I set valid value in "Password" field
        When I click on "Log In" button
        Then I check "That email and password combinations is not valid ..." message visibility