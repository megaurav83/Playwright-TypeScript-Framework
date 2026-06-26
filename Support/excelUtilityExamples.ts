import { ExcelUtility } from './excelUtility';

/**
 * Example usage of ExcelUtility for test data management
 */

// Example 1: Read test data from Excel
export function readTestData(filePath: string, sheetName: string) {
    const excelUtil = new ExcelUtility();
    excelUtil.readExcel(filePath);
    const testData = excelUtil.getSheetData(sheetName);
    return testData;
}

// Example 2: Find specific test case
export function findTestCase(filePath: string, sheetName: string, testName: string) {
    const excelUtil = new ExcelUtility();
    excelUtil.readExcel(filePath);
    const testCase = excelUtil.findRow(sheetName, { TestName: testName });
    return testCase;
}

// Example 3: Write test results to Excel
export function writeTestResults(data: any[], outputPath: string) {
    const excelUtil = new ExcelUtility();
    excelUtil.writeToExcel(data, outputPath, 'TestResults');
}

// Example 4: Append test execution results
export function appendTestResults(filePath: string, newResults: any[]) {
    const excelUtil = new ExcelUtility();
    excelUtil.readExcel(filePath);
    excelUtil.appendRows('TestResults', newResults);
}

// Example 5: Get test data by criteria
export function getTestDataByCriteria(
    filePath: string,
    sheetName: string,
    criteria: Record<string, any>
) {
    const excelUtil = new ExcelUtility();
    excelUtil.readExcel(filePath);
    const data = excelUtil.findRows(sheetName, criteria);
    return data;
}

// Example 6: Get specific columns for report
export function getColumnsForReport(
    filePath: string,
    sheetName: string,
    columns: string[]
) {
    const excelUtil = new ExcelUtility();
    excelUtil.readExcel(filePath);
    return excelUtil.getSpecificColumns(sheetName, columns);
}
