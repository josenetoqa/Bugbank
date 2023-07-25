Feature: Transfer

  Scenario: Verify that only valid accounts are allowed to transfer
    Given I am logged in as a valid user
    When I try to transfer money to an invalid account
    Then I should see the error message "Invalid or non-existent account"

  Scenario: Verify that transfer is only allowed when the balance is equal to or greater than the amount to be transferred
    Given I am logged in as a valid user
    When I try to transfer more money than I have in my account
    Then I should see the error message "Insufficient balance"

  Scenario: Verify that an attempt to transfer to an invalid account will display an error message "Invalid or non-existent account"
    Given I am logged in as a valid user
    When I try to transfer money to an invalid account number
    Then I should see the error message "Invalid or non-existent account"

  Scenario: Verify that the account number and digit accept only numbers
    Given I am logged in as a valid user
    When I try to transfer money to an account number that contains letters
    Then I should see the error message "Account number must be numeric"

  Scenario: Verify that the description field is a required field
    Given I am logged in as a valid user
    When I try to transfer money without entering a description
    Then I should see the error message "Description is required"

  Scenario: Verify that the transfer value cannot be equal to or less than zero
    Given I am logged in as a valid user
    When I try to transfer money with a value that is equal to or less than zero
    Then I should see the error message "Transfer value must be greater than zero"

  Scenario: Verify that upon successful transfer, the amount from the account should be debited and the message "Transfer successfully completed" should be displayed
    Given I am logged in as a valid user
    When I transfer money to a valid account with a valid amount
    Then the amount should be debited from my account
    And I should see the message "Transfer successfully completed"

  Scenario: Verify that upon successful transfer, you should be redirected to the statement
    Given I am logged in as a valid user
    When I transfer money to a valid account with a valid amount
    Then I should be redirected to the statement