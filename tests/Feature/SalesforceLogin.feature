Feature: Salesforce Login

  @firsttest
  Scenario: Valid Login
    Given I am on the Salesforce login page
    When I enter valid credentials
    Then I should be logged in successfully
