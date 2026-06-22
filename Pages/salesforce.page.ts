import { expect, Page, BrowserContext as Context } from '@playwright/test';
import path from 'path';
// import fs, { stat } from 'fs';

//import { BrowserContext as Context } from '@playwright/test';
const SalesforcePageLocators = {
    username: '//input[@id="username"]',
    password: '//input[@id="password"]',
    loginButton: '//input[@id="Login"]',
    loginSalesForceHeading: '//span[@title="BAAS"]',
    accountsTab: 'a[title="Accounts"]',
    trainingWaitingListOption: '//span[text()="BAM Training Approval Waiting List"]',
    boamPersonAccount: '//span[text()="BOAM Person Account"]',
    allAccountsOption: '//span[text()="All Accounts"]',
    recentlyViewedOptions: '//span[text()="Recently Viewed Accounts"]',
    accountSearchBox: '//input[@name="Account-search-input"]',
    approveButton: '//div[@title="Approve"]',
    rejectButton: '//div[@title="Reject"]',
    selectCheckbox: 'span[part="input-checkbox"]',
    trainingEnrolmentTaskTab: '//a[text()="Training"] | //a[text()="Training Records"]',
    casesTabDropdown: 'button[title="Select a List View: Cases"]',
    globalSearchBox: '//button[contains(@aria-label,"Search")]',
    changeStatusButton: '//button[text()="Change Status"]',
    statusDropdown: '//select[@name="StatusApplicationOther"]',
    statusApproved: '//option[text()="Application Approved"]',
    nextButton: '//button[text()="Next"]',
    finishButton: '//button[text()="Finish"]',
    recentlyViewedTab: '//span[text()="Recently Viewed"]',
    appLauncherButton: 'button[title="App Launcher"]',
    BAASApp: 'a[data-label="BAAS"]',
    setUpMenu: 'a.menuTriggerLink',
    updateVFCButton: 'button[title="Edit VFC Complete"]',
    VFCCompleteCheckBox: 'input[name="BOAM_VFC_Completed__c"]',
    SEReviewCompleteCheckBox: 'input[name="BOAM_SE_Review_Completed__c"]',
    BAMReviewCompleteCheckBox: 'input[name="BOAM_BAM_Review_Completed__c"]',
    VFCNotesField: 'input[name="BOAM_VFC_Notes__c"]',
    SEReviewNotesField: 'input[name="BOAM_SE_Review_Notes__c"]',
    BAMReviewNotesField: 'input[name="BOAM_BAM_Review_Notes__c"]',
    creditDeadlineNotesField: 'textarea[part="textarea"]',
    saveButton: 'button[name="SaveEdit"]',
    file_NumberField: '//input[@name="File_Number__c"]',
    totalTrustDepositField: '//input[@name="Total_trust_deposit_Part_A__c"]',
    departmentCommentsField: '//textarea[@name="OEH_Comment__c"]',
    bsaNumberField: '//input[@name="BCT_BSA_Id__c"]',
    siteArea: '//input[@name="Site_area_ha__c"]',
    localGovernmentArea: '//input[@name="LGA__c"]',
    ibraRegionField: '//input[@name="IBRA_Region__c"]',
    ibraSubRegionField: '//input[@name="IBRA_sub_region__c"]',
    bctRegionDropdown: '//button[@name="BCT_Regional_Office__c"]',
    createButtonInPopup: '//button[text()="Create"]',
};

export default class salesforcePage {

    constructor(public page: Page) {

        this.page = page;

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

        await this.page.goto(process.env.SALESFORCE_URL!, { waitUntil: 'load' });
        expect(await this.page.locator('#username').isVisible({ timeout: 30000 }));

    };


};



