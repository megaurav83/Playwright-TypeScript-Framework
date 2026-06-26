import { BrowserContext, Page, Locator, expect } from '@playwright/test';

export default class BasePage {
    public page: Page;
    constructor(page: Page) {

        this.page = page;
    }

    async goTo(url: string) {

        await this.page.goto(url);
    }

    async click(locator: string) {

        await this.page.locator(locator).click();
    }

    async fill(locator: string, value: string) {
        await this.page.locator(locator).fill(value);
    }

    async isVisible(locator: string) {

        await this.page.locator(locator).isVisible({ timeout: 3000 });
    }

    async waitforVisiblity(locator: string) {

        await this.page.locator(locator).waitFor({
            state: 'visible',
            timeout: 5000
        })
    }

    async waitForpageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');

    }

    getTodayDate(format: string): String {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return format === 'dd/mm/yyyy' ? `${dd}/${mm}/${yyyy}` : '';

    }

}

