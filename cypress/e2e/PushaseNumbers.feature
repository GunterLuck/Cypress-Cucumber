Feature: Verify "Puchase numbers" button functionality on "Numbers pricing" page of Telnyx
    
    Scenario: Verify "Puchase numbers" button functionality on "Numbers pricing" page of Telnyx
        Given I am on the Telnyx page and confirm the cookies
        When I Select "Global Numbers" option in "Products" dropdown
        Then I click on "Puchase numbers" butto
        Then I set valid value in "Email" field
        Then I set valid value in "Full Name" field
        Then I set valid value in "Password" field
        Then I click on "Agree" button
        Then I click on "Submit" button
        Then I check "The last one step" message visibility