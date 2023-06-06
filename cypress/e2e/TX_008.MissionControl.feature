Feature: Chech that "Mission Control" link navigate to "Mission Control" page from the "Why Telnyx" dropdown
    
    Scenario: Verify that "Mission Control Portal" topic text visibility on "Mission Control" page
        Given I am on the Telnyx page and confirm the cookies
        When I select "Mission Control" option in "Why Telnyx" dropdown
        Then I should see visibility of the "Mission Control Portal" topic text

    Scenario: Verify that "Mission Control Portal" "industry-leading platform" link-button visibility on "Mission Control" page
        Given I am on the Telnyx page and confirm the cookies
        When I select "Mission Control" option in "Why Telnyx" dropdown
        Then I should see the "industry-leading platform" link-button