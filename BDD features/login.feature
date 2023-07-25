Feature: Login
  
  Scenario: Verify that valid and registered users will be redirected to the home page
    Given I am on the login page
    When I enter a valid email address in the email field
    And I enter a valid password in the password field
    And I click on the "Login" button
    Then I should be redirected to the home page

  Scenario: Verify that invalid or un-registered users will not be authorized to login
    Given I am on the login page
    When I enter an invalid email address in the email field
    And I enter an invalid password in the password field
    And I click on the "Login" button
    Then I should not be authorized to login

  Scenario: Verify that the email and password fields are required
    Given I am on the login page
    When I leave the email field empty
    And I leave the password field empty
    And I click on the "Login" button
    Then I should see the error message "Username and password must be filled in"

  Scenario: Verify that the email address field validates correctly
    Given I am on the login page
    When I enter an invalid email address in the email field
    And I click on the "Login" button
    Then I should see the error message "Invalid email address"

  Scenario: Verify that the login page is secure
    Given I am on the login page
    When I scan the login page for vulnerabilities
    Then I should not find any vulnerabilities in the login page