
import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../Support/fixtures';

const { Given, When, Then } = createBdd(test);




Given('I am on the Salesforce login page', async ({ salesforcePage }) => {
  console.log('Salesforce URL:', process.env.SALESFORCE_URL!);
  await salesforcePage.navigateToSalesforceURL();
});

When('I enter valid credentials', async ({ salesforcePage }) => {
  await salesforcePage.inputUserName();
  await salesforcePage.inputpassword();
  await salesforcePage.clickLogIn();
});

Then('I should be logged in successfully', async ({ salesforcePage }) => {
  await salesforcePage.verifySuccessfulLogin();
});
Given('I am logged into salesforce application', async ({ salesforcePage }) => {
  await salesforcePage.navigateToSalesforceURL();
  await salesforcePage.inputUserName();
  await salesforcePage.inputpassword();
  await salesforcePage.clickLogIn();
  await salesforcePage.verifySuccessfulLogin();

});

When('I navigate to Accounts tab', async ({ salesforcePage }) => {
  await salesforcePage.clickAccountTab();
});

Then('I should be navigated to Accounts page', async ({ page, salesforcePage }) => {
  page.waitForURL("https://lmbc--boam2qa.sandbox.lightning.force.com/lightning/o/Account/list?filterName=__Recent");
  expect(await page.getByRole('button', { name: 'new' })).toBeVisible();
  expect(await page.getByRole('button', { name: 'new' })).toBeEnabled();
});

When('I click on New button', async ({ page, salesforcePage }) => {
  await page.getByRole('button', { name: 'new' }).click();
});

When('select type as Person Account', async ({ page, salesforcePage }) => {
  await page.getByText('BOS Person Account').waitFor({ state: 'visible' });
  await page.getByText('BOS Person Account').click();
  await page.getByRole('button', { name: 'Next' }).click();

});

Then('New Person account creation page should be displayed', async ({ page, salesforcePage }) => {
  await page.getByPlaceholder('e.g. john.smith@email.com').waitFor({ state: 'visible' });
  await page.getByPlaceholder('e.g. john.smith@email.com').fill('rambo.rambo@yopmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
});

When('I provide mandatory fields like First Name, Last Name, Email', async ({ page, salesforcePage }) => {
  await page.getByRole('link', { name: 'Register to create an account' }).waitFor({ state: 'visible' });
  await page.getByRole('link', { name: 'Register to create an account' }).click();
  await page.waitForSelector('select.nsw-form__select', { state: 'visible' });
  await page.selectOption('select.nsw-form__select', 'Mr.')
  await page.getByRole('textbox', { name: 'First Name' }).fill('james')
  await page.getByRole('textbox', { name: 'Last Name' }).fill("Doe");
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill("04598598639");
});

When('I click save button', async ({ salesforcePage }) => {
  // Step: And I click save button
  // From: tests\Feature\SalesforceLogin.feature:18:5
});

Then('the Person Account should be created successfully', async ({ salesforcePage }) => {
  // Step: Then the Person Account should be created successfully
  // From: tests\Feature\SalesforceLogin.feature:19:5
});

Then('Account detail page should be displayed', async ({ salesforcePage }) => {
  // Step: And Account detail page should be displayed
  // From: tests\Feature\SalesforceLogin.feature:20:5
});

Then('I should see the correct account name', async ({ }) => {
  // Step: And I should see the correct account name
  // From: tests\Feature\SalesforceLogin.feature:21:5
});