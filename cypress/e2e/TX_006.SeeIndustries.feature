Feature: Test "See use cases" and "See industries" buttons functionality on "Solutions" page
    
    Scenario: Verify "See industries" button scroll to "Healthcare" button and "See use cases" button scroll to "Account notifications" text and image on the "Solutions" page
        Given I am on the Telnyx page and confirm the cookies
        When I click on "Solutions" button
        Then I click on "See industries" button
        And I check "Healthcare" button visibility
        And I scroll up to "See use cases" button
        Then I click on "See use cases" button
        And I check "Account notifications" text and image visibility