
<h1 align="center"> 
  Bug Bank Automation Tests with Cypress
</h1>

<h4 align="center">A bank website for study software testing</h4>

<p align="center">
  <a href="#About The Project">About The Project</a> •
  <a href="#Installation">Installation</a> •
  <a href="#Test Cases">Test Cases</a> •
  <a href="#Credits">Credits</a> •
  <a href="#QA Automation Engineer">QA Automation Engineer</a>
</p>

## About The Project


As a QA engineer, I created automated test cases for the BugBank website using Cypress. This was a good practice of Cypress commands, such as reusing existing code in other tests, adding multiple assertions in the test cases, and using the baseURL and tests ran independently from one another and still passed.

This project was a good learning experience for me, and I am now more proficient in using Cypress to automate test cases.


## Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/josenetoqa/Bugbank
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Execute Cypress to execute the tests


    * Execute the following comammnd to run Cypress in Hedless mode
   ```js
    npx cypress run 
   ```
    * Execute the following comammnd to open Runner Console
    ```js
    npx cypress open
    ```


## Test Cases

### Login

In the login test cases, I tested the login method of the application to ensure that it meets all of the requirements.

These test cases below provide a comprehensive coverage of the login method.

<details><summary><b>Login Test Cases</b></summary>

1. BDD :

    ```gherkin

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

      Scenario: Verify that the  password field is required
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

    ```

2. Login test Cases:

    **Test Case 1:**
    
    **Description:** Verify that the email  field is required.
    
    **Steps:**
    
    1. Go to the login page.
    2. Leave the email field empty.
    3. Leave the password field empty.
    4. Click on the "Login" button.
    5. Verify that the error message "Username and password must be filled in" is displayed.
    
    **Test Case 2:**
    
    **Description:** Verify that invalid or un-registered users will not be authorized to login.
    
    **Steps:**
    
    1. Go to the login page.
    2. Enter an invalid email address in the email field.
    3. Enter an invalid password in the password field.
    4. Click on the "Login" button.
    5. Verify that the error message "Invalid username or password.
    Please try again or verify your information!" is displayed.
    
    **Test Case 3:**
    
    **Description:** Verify that valid and registered users will be redirected to the home page.
    
    **Steps:**
    
    1. Go to the login page.
    2. Enter a valid email address in the email field.
    3. Enter a valid password in the password field.
    4. Click on the "Login" button.
    5. Verify that the user is authorized to login and is redirected to the home page.
    
    **Test Case 4:**
    
    **Description:** Verify that the email address field validates correctly.
    
    **Steps:**
    
    1. Go to the login page.
    2. Enter an invalid email address in the email field.
    3. Click on the "Login" button.
    4. Verify that the error message "Invalid email address" is displayed.
</details>

### Registration

The registration feature of the application allows users to create new accounts. I conducted tests to ensure that this feature meets all of the requirements. 

These test cases below provide a thorough coverage of the registration feature.

<details><summary><b>Registration Test Cases</b></summary>

1. BDD:

    ```gherkin
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
    ```

2. Registration 

    **Test Case 4:**

    **Description:** Verify that the name field is required.

    **Steps:**

    1. Go to the registration page.
    2. Leave the name field empty.
    3. Click on the "Register" button.
    4. Verify that the error message "Name cannot be empty" is displayed.

    **Test Case 5:**

    **Description:** Verify that the email field is required.

    **Steps:**

    1. Go to the registration page.
    2. Leave the email field empty.
    3. Click on the "Register" button.
    4. Verify that the error message "Email cannot be empty" is displayed.

    **Test Case 6:**

    **Description:** Verify that the password field is required.

    **Steps:**

    1. Go to the registration page.
    2. Leave the password field empty.
    3. Click on the "Register" button.
    4. Verify that the error message "Password cannot be empty" is displayed.

    **Test Case 7:**

    **Description:** Verify that the confirmation password field is required.

    **Steps:**

    1. Go to the registration page.
    2. Leave the confirmation password field empty.
    3. Click on the "Register" button.
    4. Verify that the error message "Confirm password cannot be empty" is displayed.

    **Test Case 2:**

    **Description:** Verify that the "Create account with balance" option creates an account with a balance of R$ 1,000.00.

    **Steps:**

    1. Go to the registration page.
    2. Check the "Create account with balance" option.
    3. Click on the "Register" button.
    4. Verify that the account balance is R$ 1,000.00.

    **Test Case 3:**

    **Description:** Verify that the "Create account with balance" option creates an account with a balance of R$ 0.00.

    **Steps:**

    1. Go to the registration page.
    2. Uncheck the "Create account with balance" option.
    3. Click on the "Register" button.
    4. Verify that the account balance is R$ 0.00.

    **Test Case 8:**

    **Description:** Verify that the password and confirmation password must be the same.

    **Steps:**

    1. Go to the registration page.
    2. Enter a password in the password field.
    3. Enter a different password in the confirmation password field.
    4. Click on the "Register" button.
    5. Verify that an error message is displayed indicating that the passwords do not match.

    **Test Case 1:**

    **Description:** Verify that a successfully registered account must display the account number that was created.

    **Steps:**

    1. Go to the registration page.
    2. Enter all of the required information and click on the "Register" button.
    3. Verify that the account number is displayed on the confirmation page.

    These are just a few examples of automation test cases that you could use to test the registration functionality. You can add more test cases to cover other scenarios, such as testing the validation of the email address field, the minimum length of the password field, and so on.

    **Test Case 9:**

    **Description:** Verify that the email address field validates correctly.

    **Steps:**

    1. Go to the registration page.
    2. Enter an invalid email address in the email field.
    3. Click on the "Register" button.
    4. Verify that an error message is displayed indicating that the email address is invalid.

</details>


### Statement

The statement feature of the bank website allows users to view their account statements is a critical part of the bank website, as it allows users to track their spending and identify any potential fraudulent activity. I conducted tests to ensure that this feature meets all of the requirements. 

These test cases below provide a thorough coverage of the statement feature.

<details><summary><b>Statement Test Cases</b></summary>

1. BDD

    ```gherkin
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
    ```

2. Statements test cases

    **Test Case 1:**

    **Description:** Verify that the statement page displays the current available balance.

    **Steps:**

    1. Login to the application as a valid user.
    2. Click on the "Statement" link.
    3. Verify that the statement page displays the current available balance.

    **Test Case 2:**

    **Description:** Verify that each transaction displays the date it was made, the type of transaction, and the amount.

    **Steps:**

    1. Login to the application as a valid user.
    2. Click on the "Statement" link.
    3. Verify that each transaction displays the date it was made, the type of transaction, and the amount.

    **Test Case 3:**

    **Description:** Verify that the value of transactions that are out of the account is displayed in red and starts with the minus/negative sign (-).

    **Steps:**

    1. Login to the application as a valid user.
    2. Click on the "Statement" link.
    3. Verify that the value of transactions that are out of the account is displayed in red and starts with the minus/negative sign (-).

    **Test Case 4:**

    **Description:** Verify that the value of transactions that are in the account is displayed in green.

    **Steps:**

    1. Login to the application as a valid user.
    2. Click on the "Statement" link.
    3. Verify that the value of transactions that are in the account is displayed in green.

    **Test Case 5:**

    **Description:** Verify that transactions without a comment are displayed with the comment "-".

    **Steps:**

    1. Login to the application as a valid user.
    2. Click on the "Statement" link.
    3. Verify that transactions without a comment are displayed with the comment "-".

</details>


### Transfer

The transfer feature of a bank website allows users to easily transfer money between their own accounts or to other people's accounts. I conducted tests to ensure that this feature meets all of the requirements

These test cases provide a thorough coverage of the transfer feature, and I am confident that this feature meets the needs of bank customers.

<details><summary><b>Transfer Test Cases</b></summary>

1. BDD:

    ```gherkin
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
    ```

2. Trasfer test cases 

    **Test Case 2:**

    **Description:** Verify that transfer is only allowed when the balance is equal to or greater than the amount to be transferred.

    **Steps:**

    1. Login to the application as a valid user.
    2. Enter a valid account number in the "Account number" field.
    3. Enter an amount that is greater than the balance in the "Amount" field.
    4. Enter a description in the "Description" field.
    5. Click on the "Transfer" button.
    6. Verify that the error message "Insufficient balance" is displayed.

    **Test Case 4:**

    **Description:** Verify that an attempt to transfer to an invalid account will display an error message "Invalid or non-existent account".

    **Steps:**

    1. Login to the application as a valid user.
    2. Enter an invalid account number in the "Account number" field.
    3. Enter a valid amount in the "Amount" field.
    4. Enter a description in the "Description" field.
    5. Click on the "Transfer" button.
    6. Verify that the error message "Invalid or non-existent account" is displayed.

    **Test Case 5:**

    **Description:** Verify that the account number and digit accept only numbers.

    **Steps:**

    1. Login to the application as a valid user.
    2. Enter a letter in the "Account number" field.
    3. Enter a valid amount in the "Amount" field.
    4. Enter a description in the "Description" field.
    5. Click on the "Transfer" button.
    6. Verify that the error message "Account number must be numeric" is displayed.

    **Test Case 7:**

    **Description:** Verify that the description field is a required field.

    **Steps:**

    1. Login to the application as a valid user.
    2. Enter a valid account number in the "Account number" field.
    3. Enter a valid amount in the "Amount" field.
    4. Leave the "Description" field empty.
    5. Click on the "Transfer" button.
    6. Verify that the error message "Description is required" is displayed.

    **Test Case 6:**

    **Description:** Verify that the transfer value cannot be equal to or less than zero.

    **Steps:**

    1. Login to the application as a valid user.
    2. Enter a valid account number in the "Account number" field.
    3. Enter a value that is equal to or less than zero in the "Amount" field.
    4. Enter a description in the "Description" field.
    5. Click on the "Transfer" button.
    6. Verify that the error message "Transfer value must be greater than zero" is displayed.

    **Test Case 1:**

    **Description:** Verify that upon successful transfer, the amount from the account should be debited and the message "Transfer successfully completed" should be displayed.

    **Steps:**

    1. Login to the application as a valid user.
    2. Enter a valid account number in the "Account number" field.
    3. Enter a valid amount in the "Amount" field.
    4. Enter a description in the "Description" field.
    5. Click on the "Transfer" button.
    6. Verify that the amount from the account is debited.
    7. Verify that the message "Transfer successfully completed" is displayed.
    8. Verify that you are redirected to the statement.

</details>

## Next Changes


- Implement ```cy.session``` : This will allow you to run tests in the context of a specific user session. This is useful for testing features that require authentication or that depend on the user's state.

- Implement new test cases to second account: This will allow you to test the functionality of your application from the perspective of a different user. This is important for ensuring that your application is fair and equitable for all users.

- Implement faker to generate data: This will allow you to generate fake data for your tests. This is useful for testing features that depend on data, such as search and sorting.


## Credits

This software uses the following open source npm packages:

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Faker](https://www.npmjs.com/package/@faker-js/faker)
- [Mochawesome](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- [Cypress terminal report](https://www.npmjs.com/package/cypress-terminal-report)

## QA Automation Engineer

[Linkedin](https://www.linkedin.com/in/jdaneto/)

[Github](https://github.com/josenetoqa)


