Feature: Bosportal Login

  @firstBosPortaltest
  Scenario: Valid Bos Portal Login
    Given I navigate to the Bosportal login page
    When I register and enter details on the form
    Then I should get verification code in the email and I should be logged in successfully
