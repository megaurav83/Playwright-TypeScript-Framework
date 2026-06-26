import { test } from './fixtures';
import path from 'path';


test('readdatafromexcel', async ({ excelUtility }) => {
    const filePath = path.join(process.cwd(), 'TestData', 'User-Details.xlsx');
    excelUtility.readExcel(filePath);
    const testData = excelUtility.getSheetData();
    console.log(testData)







})

