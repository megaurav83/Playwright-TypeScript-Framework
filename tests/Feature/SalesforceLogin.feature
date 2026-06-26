Feature: Salesforce Login and Account Creation

  @firsttest
  Scenario: Valid Login
    Given I am on the Salesforce login page
    When I enter valid credentials
    Then I should be logged in successfully

  @salesforcetest
  Scenario: Creating Person Account
    Given I am logged into salesforce application
    When I navigate to Accounts tab
    Then I should be navigated to Accounts page
    When I click on New button
    And select type as Person Account
    Then New Person account creation page should be displayed
    When I provide mandatory fields like First Name, Last Name, Email
    And I click save button
    Then the Person Account should be created successfully
    And Account detail page should be displayed
    And I should see the correct account name
