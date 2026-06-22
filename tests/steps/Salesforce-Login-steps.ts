
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);
import { test, expect } from '../../Support/fixtures';



Given('I am on the Salesforce login page', async ({ page, salesforcepage }) => {
  console.log('Salesforce URL:', process.env.SALESFORCE_URL!);
  await salesforcepage.navigateToSalesforceURL();
});

When('I enter valid credentials', async ({ page, salesforcepage }) => {
  await page.locator('#username').fill(process.env.SALESFORCE_USERNAME!);
  await page.locator('#password').fill(process.env.SALESFORCE_PASSWORD!);
  await page.locator('#Login').click();
});

Then('I should be logged in successfully', async ({ page, salesforcepage }) => {
  await salesforcepage.verifySuccessfulLogin();
});