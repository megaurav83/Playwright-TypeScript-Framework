// Generated from: tests\Feature\Bosportallogin.feature
import { test } from "playwright-bdd";

test.describe('Bosportal Login', () => {

  test('Valid Bos Portal Login', { tag: ['@firstBosPortaltest'] }, async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the Bosportal login page', null, { page }); 
    await When('I register and enter details on the form', null, { page }); 
    await Then('I should get verification code in the email and I should be logged in successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Feature\\Bosportallogin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@firstBosPortaltest"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the Bosportal login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I register and enter details on the form","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should get verification code in the email and I should be logged in successfully","stepMatchArguments":[]}]},
]; // bdd-data-end