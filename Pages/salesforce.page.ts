import { expect, Page, BrowserContext as Context } from '@playwright/test';
import BasePage from '../Pages/base.page';
import dotenv from 'dotenv';
// import fs, { stat } from 'fs';

//import { BrowserContext as Context } from '@playwright/test';
const SalesforcePageLocators = {
    username: '#username',
    password: '#password',
    loginButton: '#Login',

};

export default class salesforcePage extends BasePage {

    constructor(page: Page) {

        super(page);

    }

    async verifySuccessfulLogin() {

        if (await this.page.locator('#tc').isVisible()) {
            await this.page.locator('#tc').fill(process.env.SALESFORCE_2FA_CODE!);
            await this.page.locator('#save').click();
        }
        await this.page.waitForSelector("svg[data-key='setup']", { timeout: 10000 });
        expect(await this.page.locator("svg[data-key='setup']").isVisible());

    };

    async navigateToSalesforceURL() {

        await this.goTo(process.env.SALESFORCE_URL!);
        expect(await this.page.locator(SalesforcePageLocators.username).isVisible({ timeout: 30000 }));

    };

    async inputUserName() {
        await this.fill(SalesforcePageLocators.username, process.env.SALESFORCE_USERNAME!);
    };

    async inputpassword() {
        await this.fill(SalesforcePageLocators.password, process.env.SALESFORCE_PASSWORD!);

    };
    async clickLogIn() {

        await this.click(SalesforcePageLocators.loginButton);
    };


};



