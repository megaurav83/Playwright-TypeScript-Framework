import { test as base } from 'playwright-bdd'; // Required for bddgen
import { APIRequestContext, Page } from '@playwright/test';
import salesforcepage from '../Pages/salesforce.page';

type Pages = {
    salesforcepage: salesforcepage;

};

export const test = base.extend<Pages>({

    async salesforcepage({ page }, use) {
        await use(new salesforcepage(page));
    }














})
export const expect = test.expect;

