Feature: Test "Pay as you go" dropdown functionality on "Numbers pricing" page
    
    Scenario: Verify "Number pricing" text changes when switching "Pay as you go" dropdown on "Numbers pricing" page
        Given I am on the Telnyx page and confirm the cookies
        When I Select "Global Numbers" option in "Pricing" dropdown
        And I select "Canada" option in "Pay as you go" dropdown
        And I check "Using an existing number" text visibility
        Then I select "Ukraine" option in "Pay as you go" dropdown
        And I check "Using an existing number" text not visibile