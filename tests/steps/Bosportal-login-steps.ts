import { createBdd, test } from 'playwright-bdd';
import { expect } from '@playwright/test';
import salesforcePage from '../../Pages/salesforce.page';
const { Given, When, Then } = createBdd(test);



Given('I navigate to the Bosportal login page', async ({ page }) => {
    await page.goto("https://lmbc--boam2qa.sandbox.my.site.com/bosportal/s/login/");
    await page.waitForURL("https://lmbc--boam2qa.sandbox.my.site.com/bosportal/s/login/", { timeout: 2000 });
});

When('I register and enter details on the form', async ({ page }) => {
    expect(await page.getByText("Register Now").isVisible({ timeout: 2000 }));
    await page.getByText("Register Now").click();
    await page.getByRole('textbox').fill("abcnext123@yopmail.com");
    await page.getByRole('button', { name: 'Next' }).click();
    expect(await page.getByRole('link', { name: 'I want to create an account' }).isVisible({ timeout: 2000 }));
    await page.getByRole('link', { name: 'I want to create an account' }).click();
    await page.waitForTimeout(5000);
});

Then('I should get verification code in the email and I should be logged in successfully', async ({ page }) => {
    // Step: Then I should get verification code in the email and I should be logged in successfully
    // From: tests\Feature\Bosportallogin.feature:7:5
});
