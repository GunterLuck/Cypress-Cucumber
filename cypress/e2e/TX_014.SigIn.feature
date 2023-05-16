Feature: Test Sign In form from Sign Up page with negative scenario where all fields are filled with incorrect credentials
    
    Scenario: Verify that "That email and password combinations is not valid ..." message appears and user is not signed in after submitting Log In form with invalid credentials from Contuct Us page 
        Given I am on the Telnyx page and confirm the cookies
        And I click on "Sign Up" button
        When I scroll down to "Log In" link button
        And I click on "Log In" link button
        When I type invalid value in "Business Email" field
        And I type invalid value in "Password" field
        When I click on "Log In" button
        Then I should see "That email and password combinations is not valid ..." message