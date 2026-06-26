# Excel Utility Guide

A comprehensive Excel utility for managing test data and results in your Playwright test framework.

## Installation

The utility uses the `xlsx` library which is already added to your `package.json`.

Run:
```bash
npm install
```

## Features

- ✅ Read Excel files
- ✅ Get sheet data as JSON
- ✅ Find rows by criteria
- ✅ Write data to Excel
- ✅ Append rows to existing sheets
- ✅ Create new sheets
- ✅ Update cell values
- ✅ Delete rows
- ✅ Get column headers
- ✅ Extract specific columns
- ✅ Count rows in sheets

## Usage Examples

### 1. Read Excel File
```typescript
import { ExcelUtility } from './Support/excelUtility';

const excelUtil = new ExcelUtility();
excelUtil.readExcel('./testData/data.xlsx');
const data = excelUtil.getSheetData('Sheet1');
console.log(data);
```

### 2. Find Specific Test Data
```typescript
const testData = excelUtil.findRow('TestCases', { 
  TestName: 'Login Test',
  Status: 'Active' 
});
console.log(testData);
```

### 3. Get All Matching Rows
```typescript
const failedTests = excelUtil.findRows('TestResults', { 
  Result: 'FAILED' 
});
console.log(failedTests);
```

### 4. Write Test Results
```typescript
const results = [
  { TestName: 'Test1', Result: 'PASSED', Duration: '2s' },
  { TestName: 'Test2', Result: 'FAILED', Duration: '5s' }
];
excelUtil.writeToExcel(results, './output/results.xlsx', 'TestResults');
```

### 5. Append Rows to Existing Sheet
```typescript
excelUtil.readExcel('./output/results.xlsx');
excelUtil.appendRows('TestResults', [
  { TestName: 'Test3', Result: 'PASSED', Duration: '1s' }
]);
```

### 6. Get Sheet Information
```typescript
const sheetNames = excelUtil.getSheetNames();
console.log('Available sheets:', sheetNames);

const headers = excelUtil.getHeaders('TestCases');
console.log('Columns:', headers);

const rowCount = excelUtil.getRowCount('TestCases');
console.log('Total rows:', rowCount);
```

### 7. Extract Specific Columns
```typescript
const reportData = excelUtil.getSpecificColumns('TestResults', [
  'TestName',
  'Result',
  'Duration'
]);
console.log(reportData);
```

### 8. Update a Cell Value
```typescript
excelUtil.readExcel('./output/results.xlsx');
excelUtil.updateCell('TestResults', 0, 'Result', 'PASSED');
```

### 9. Delete a Row
```typescript
excelUtil.deleteRow('TestResults', 1);
```

### 10. Create a New Sheet
```typescript
const newData = [
  { Name: 'John', Score: 95 },
  { Name: 'Jane', Score: 88 }
];
excelUtil.createSheet('NewSheet', newData);
```

## API Reference

### Class: ExcelUtility

#### Methods

| Method | Parameters | Returns | Description |
|--------|-----------|---------|-------------|
| `readExcel(filePath)` | string | void | Load an Excel file |
| `getSheetNames()` | - | string[] | Get all sheet names |
| `getSheetData(sheetName?)` | string? | T[] | Get all data from a sheet |
| `getSpecificColumns(sheetName, columns)` | string, string[] | T[] | Get specific columns |
| `findRows(sheetName, criteria)` | string, object | T[] | Find all matching rows |
| `findRow(sheetName, criteria)` | string, object | T \| null | Find first matching row |
| `writeToExcel(data, filePath, sheetName?)` | T[], string, string? | void | Write data to new file |
| `appendRows(sheetName, newData)` | string, T[] | void | Append rows to sheet |
| `createSheet(sheetName, data)` | string, T[] | void | Create new sheet |
| `getRowCount(sheetName?)` | string? | number | Count rows in sheet |
| `getHeaders(sheetName?)` | string? | string[] | Get column headers |
| `updateCell(sheetName, rowIndex, columnName, newValue)` | string, number, string, any | void | Update single cell |
| `deleteRow(sheetName, rowIndex)` | string, number | void | Delete a row |
| `clearSheet(sheetName)` | string | void | Clear all data |
| `close()` | - | void | Close workbook |

## Best Practices

1. **Always close the workbook when done:**
   ```typescript
   excelUtil.close();
   ```

2. **Handle errors gracefully:**
   ```typescript
   try {
     excelUtil.readExcel('./data.xlsx');
   } catch (error) {
     console.error('Error reading file:', error);
   }
   ```

3. **Use meaningful sheet names:**
   ```typescript
   excelUtil.getSheetData('LoginTestData');
   excelUtil.getSheetData('TestResults');
   ```

4. **Create a singleton for consistency:**
   ```typescript
   import excelUtility from './Support/excelUtility';
   // Use the default instance throughout your tests
   ```

## Integration with Fixtures

You can integrate the Excel utility with your Playwright fixtures:

```typescript
// In fixtures.ts
import { ExcelUtility } from './excelUtility';

type TestData = {
    excelUtil: ExcelUtility;
};

export const test = base.extend<TestData>({
    async excelUtil(use) {
        const util = new ExcelUtility();
        await use(util);
        util.close();
    }
});
```

Then use it in your tests:

```typescript
test('Load test data from Excel', async ({ excelUtil }) => {
    excelUtil.readExcel('./testData/users.xlsx');
    const users = excelUtil.getSheetData('Users');
    // Use users in your test
});
```

## File Structure

```
Support/
├── fixtures.ts              # Playwright fixtures
├── excelUtility.ts          # Main Excel utility class
├── excelUtilityExamples.ts  # Usage examples
└── README_EXCEL.md          # This documentation
```

## Requirements

- Node.js >= 14
- xlsx library (already in package.json)
