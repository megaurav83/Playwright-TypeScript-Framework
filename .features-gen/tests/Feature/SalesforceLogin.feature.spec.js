// Generated from: tests\Feature\SalesforceLogin.feature
import { test } from "../../../Support/fixtures.ts";

test.describe('Salesforce Login and Account Creation', () => {

  test('Valid Login', { tag: ['@firsttest'] }, async ({ Given, When, Then, salesforcePage }) => { 
    await Given('I am on the Salesforce login page', null, { salesforcePage }); 
    await When('I enter valid credentials', null, { salesforcePage }); 
    await Then('I should be logged in successfully', null, { salesforcePage }); 
  });

  test('Creating Person Account', { tag: ['@salesforcetest'] }, async ({ Given, When, Then, And, page, salesforcePage }) => { 
    await Given('I am logged into salesforce application', null, { salesforcePage }); 
    await When('I navigate to Accounts tab', null, { salesforcePage }); 
    await Then('I should be navigated to Accounts page', null, { page, salesforcePage }); 
    await When('I click on New button', null, { page, salesforcePage }); 
    await And('select type as Person Account', null, { page, salesforcePage }); 
    await Then('New Person account creation page should be displayed', null, { page, salesforcePage }); 
    await When('I provide mandatory fields like First Name, Last Name, Email', null, { page, salesforcePage }); 
    await And('I click save button', null, { salesforcePage }); 
    await Then('the Person Account should be created successfully', null, { salesforcePage }); 
    await And('Account detail page should be displayed', null, { salesforcePage }); 
    await And('I should see the correct account name'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Feature\\SalesforceLogin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@firsttest"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the Salesforce login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I enter valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@salesforcetest"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am logged into salesforce application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I navigate to Accounts tab","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to Accounts page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on New button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And select type as Person Account","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then New Person account creation page should be displayed","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I provide mandatory fields like First Name, Last Name, Email","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I click save button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the Person Account should be created successfully","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And Account detail page should be displayed","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"And I should see the correct account name","stepMatchArguments":[]}]},
]; // bdd-data-end