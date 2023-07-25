Feature: Registration

  Scenario: Verify that a successfully registered account must display the account number that was created
    Given I am on the registration page
    When I enter all of the required information and click on the "Register" button
    Then I should see the account number is displayed on the confirmation page  

  Scenario: Verify that the "Create account with balance" option creates an account with a balance of R$ 1,000.00
    Given I am on the registration page
    When I check the "Create account with balance" option
    And I click on the "Register" button
    Then I should see the account balance is R$ 1,000.00

  Scenario: Verify that the "Create account with no balance" option creates an account with a balance of R$ 0.00
    Given I am on the registration page
    When I uncheck the "Create account with no balance" option
    And I click on the "Register" button
    Then I should see the account balance is R$ 0.00
  Scenario: Verify that the name field is required
    Given I am on the registration page
    When I leave the name field empty
    And I click on the "Register" button
    Then I should see the error message "Name cannot be empty"

  Scenario: Verify that the email field is required
    Given I am on the registration page
    When I leave the email field empty
    And I click on the "Register" button
    Then I should see the error message "Email cannot be empty"

  Scenario: Verify that the password field is required
    Given I am on the registration page
    When I leave the password field empty
    And I click on the "Register" button
    Then I should see the error message "Password cannot be empty"

  Scenario: Verify that the confirmation password field is required
    Given I am on the registration page
    When I leave the confirmation password field empty
    And I click on the "Register" button
    Then I should see the error message "Confirm password cannot be empty"

  Scenario: Verify that the password and confirmation password must be the same
    Given I am on the registration page
    When I enter a password in the password field
    And I enter a different password in the confirmation password field
    And I click on the "Register" button
    Then I should see an error message indicating that the passwords do not match

  Scenario: Verify that the email address field validates correctly
    Given I am on the registration page
    When I enter an invalid email address in the email field
    And I click on the "Register" button
    Then I should see an error message indicating that the email address is invalid
