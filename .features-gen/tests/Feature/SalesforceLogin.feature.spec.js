// Generated from: tests\Feature\SalesforceLogin.feature
import { test } from "playwright-bdd";

test.describe('Salesforce Login', () => {

  test('Valid Login', { tag: ['@firsttest'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am on the Salesforce login page', null, { page }); 
    await When('I enter valid credentials', null, { page }); 
    await Then('I should be logged in successfully', null, { page }); 
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
]; // bdd-data-end