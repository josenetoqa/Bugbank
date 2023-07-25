Feature: Statement

  Scenario: Verify that the statement page displays the current available balance
    Given I am logged in as a valid user
    When I click on the "Statement" link
    Then I should see the current available balance

  Scenario: Verify that each transaction displays the date it was made, the type of transaction, and the amount
    Given I am logged in as a valid user
    When I click on the "Statement" link
    Then I should see the date, type, and amount for each transaction

  Scenario: Verify that the value of transactions that are out of the account is displayed in red and starts with the minus/negative sign (-)
    Given I am logged in as a valid user
    When I click on the "Statement" link
    And I select a transaction that is out of the account
    Then the value of the transaction should be displayed in red and start with the minus/negative sign (-)

  Scenario: Verify that the value of transactions that are in the account is displayed in green
    Given I am logged in as a valid user
    When I click on the "Statement" link
    And I select a transaction that is in the account
    Then the value of the transaction should be displayed in green

  Scenario: Verify that transactions without a comment are displayed with the comment "-"
    Given I am logged in as a valid user
    When I click on the "Statement" link
    And I select a transaction that does not have a comment
    Then the comment for the transaction should be "-"