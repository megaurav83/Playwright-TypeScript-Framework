import { test as base } from 'playwright-bdd'; // Required for bddgen
import salesforcePage from '../Pages/salesforce.page';
import BasePage from '../Pages/base.page';
import { ExcelUtility } from './excelUtility';


type Pages = {
    salesforcePage: salesforcePage;
    basePage: BasePage;
    excelUtility: ExcelUtility;

};

export const test = base.extend<Pages>({

    async salesforcePage({ page }, use) {
        await use(new salesforcePage(page));
    },
    async basePage({ page }, use) {
        await use(new BasePage(page));
    },
    async excelUtility({ page }, use) {
        await use(new ExcelUtility());
    }
});
export const expect = test.expect;

