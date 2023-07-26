
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

    ```

2. Add the `size-limit` section and the `size` script to your `package.json`:

    ```diff
    + "size-limit": [
    +   {
    +     "path": "dist/app-*.js"
    +   }
    + ],
      "scripts": {
        "build": "webpack ./webpack.config.js",
    +   "size": "npm run build && size-limit",
        "test": "jest && eslint ."
      }
    ```

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

2. Add the `size-limit` section and the `size` script to your `package.json`:

    ```gherkin
    + "size-limit": [
    +   {
    +     "path": "dist/app-*.js"
    +   }
    + ],
      "scripts": {
        "build": "webpack ./webpack.config.js",
    +   "size": "npm run build && size-limit",
        "test": "jest && eslint ."
      }
    ```

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

2. Add the `size-limit` section and the `size` script to your `package.json`:

    ```diff
    + "size-limit": [
    +   {
    +     "path": "dist/react.production-*.js"
    +   }
    + ],
      "scripts": {
        "build": "webpack ./scripts/rollup/build.js",
    +   "size": "npm run build && size-limit",
        "test": "jest && eslint ."
      }
    ```
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

2. Add the `size-limit` section and the `size` script to your `package.json`:

    ```diff
    + "size-limit": [
    +   {
    +     "path": "index.js"
    +   }
    + ],
      "scripts": {
    +   "size": "size-limit",
        "test": "jest && eslint ."
      }
    ```
</details>

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


