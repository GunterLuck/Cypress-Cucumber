Feature: Numbers pricing page
    
    Scenario: Verify "Numbers pricing" page of Telnyx
        Given I am on the Telnyx page and confirm the cookies
        When I Select "Global Numbers" option in "Pricing" dropdown
        Then I scroll down to "Pay as you go" dropdown
        Then I select "Canada" option in "Pay as you go" dropdown
        Then I check "Using an existing number" text visibility
        Then I select "Ukraine" option in "Pay as you go" dropdown
        Then I check "Using an existing number" text visibilit