Feature: Chech that "Mission Control" link navigate to "Mission Control" page from the "Why Telnyx" dropdown
    
    Scenario: Verify that "Mission Control Portal" topic text visibility and "industry-leading platform" link-button clickability on "Mission Control" page
        Given I am on the Telnyx page and confirm the cookies
        When I select "Mission Control" option in "Why Telnyx" dropdown
        Then I check visibility of the "Mission Control Portal" topic text
        And I scroll down to the "industry-leading platform" link-button
        And I check clickability of the "industry-leading platform" link-button