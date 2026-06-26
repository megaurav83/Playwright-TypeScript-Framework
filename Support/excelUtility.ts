import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

export class ExcelUtility {
  private workbook: XLSX.WorkBook | null = null;
  private filePath: string = '';

  /**
   * Read an Excel file
   * @param filePath - Path to the Excel file
   */
  public readExcel(filePath: string): void {
    try {
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }
      this.filePath = filePath;
      this.workbook = XLSX.readFile(filePath);
      console.log(`✓ Excel file loaded: ${filePath}`);
    } catch (error) {
      throw new Error(`Failed to read Excel file: ${error}`);
    }
  }

  /**
   * Get all sheet names from the workbook
   * @returns Array of sheet names
   */
  public getSheetNames(): string[] {
    if (!this.workbook) {
      throw new Error('No workbook loaded. Call readExcel() first.');
    }
    return this.workbook.SheetNames;
  }

  /**
   * Get data from a specific sheet as JSON
   * @param sheetName - Name of the sheet (defaults to first sheet)
   * @returns Array of objects representing rows
   */
  public getSheetData<T = any>(sheetName?: string): T[] {
    if (!this.workbook) {
      throw new Error('No workbook loaded. Call readExcel() first.');
    }

    const sheet = sheetName || this.workbook.SheetNames[0];
    const worksheet = this.workbook.Sheets[sheet];

    if (!worksheet) {
      throw new Error(`Sheet "${sheet}" not found in workbook.`);
    }

    const data: T[] = XLSX.utils.sheet_to_json<T>(worksheet);
    console.log(`✓ Retrieved ${data.length} rows from sheet: ${sheet}`);
    return data;
  }

  /**
   * Get specific columns from a sheet
   * @param sheetName - Name of the sheet
   * @param columns - Array of column names to extract
   * @returns Array of objects with only specified columns
   */
  public getSpecificColumns<T = any>(sheetName: string, columns: string[]): T[] {
    const data = this.getSheetData<any>(sheetName);
    return data.map((row) => {
      const filteredRow: any = {};
      columns.forEach((col) => {
        if (col in row) {
          filteredRow[col] = row[col];
        }
      });
      return filteredRow as T;
    });
  }

  /**
   * Find rows matching specific criteria
   * @param sheetName - Name of the sheet
   * @param criteria - Object with column name and value to match
   * @returns Array of matching rows
   */
  public findRows<T = any>(sheetName: string, criteria: Record<string, any>): T[] {
    const data = this.getSheetData<any>(sheetName);
    return data.filter((row) => {
      return Object.entries(criteria).every(([key, value]) => row[key] === value);
    });
  }

  /**
   * Find first row matching criteria
   * @param sheetName - Name of the sheet
   * @param criteria - Object with column name and value to match
   * @returns First matching row or null
   */
  public findRow<T = any>(sheetName: string, criteria: Record<string, any>): T | null {
    const rows = this.findRows<T>(sheetName, criteria);
    return rows.length > 0 ? rows[0] : null;
  }

  /**
   * Write data to a new Excel file
   * @param data - Array of objects to write
   * @param filePath - Output file path
   * @param sheetName - Name for the sheet (optional)
   */
  public writeToExcel<T = any>(data: T[], filePath: string, sheetName: string = 'Sheet1'): void {
    try {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const newWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(newWorkbook, worksheet, sheetName);
      XLSX.writeFile(newWorkbook, filePath);
      console.log(`✓ Excel file created: ${filePath}`);
    } catch (error) {
      throw new Error(`Failed to write Excel file: ${error}`);
    }
  }

  /**
   * Append rows to an existing sheet
   * @param sheetName - Name of the sheet to append to
   * @param newData - Array of objects to append
   */
  public appendRows<T = any>(sheetName: string, newData: T[]): void {
    if (!this.workbook) {
      throw new Error('No workbook loaded. Call readExcel() first.');
    }

    const existingData = this.getSheetData<any>(sheetName);
    const combinedData = [...existingData, ...newData];

    const worksheet = XLSX.utils.json_to_sheet(combinedData);
    this.workbook.Sheets[sheetName] = worksheet;
    XLSX.writeFile(this.workbook, this.filePath);
    console.log(`✓ ${newData.length} rows appended to sheet: ${sheetName}`);
  }

  /**
   * Create a new sheet in the workbook
   * @param sheetName - Name for the new sheet
   * @param data - Initial data for the sheet
   */
  public createSheet<T = any>(sheetName: string, data: T[]): void {
    if (!this.workbook) {
      throw new Error('No workbook loaded. Call readExcel() first.');
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(this.workbook, worksheet, sheetName);
    XLSX.writeFile(this.workbook, this.filePath);
    console.log(`✓ New sheet created: ${sheetName}`);
  }

  /**
   * Get the count of rows in a sheet
   * @param sheetName - Name of the sheet
   * @returns Number of rows
   */
  public getRowCount(sheetName?: string): number {
    const data = this.getSheetData(sheetName);
    return data.length;
  }

  /**
   * Get headers (column names) from a sheet
   * @param sheetName - Name of the sheet
   * @returns Array of column names
   */
  public getHeaders(sheetName?: string): string[] {
    const data = this.getSheetData(sheetName);
    if (data.length === 0) {
      return [];
    }
    return Object.keys(data[0]);
  }

  /**
   * Update a specific cell value
   * @param sheetName - Name of the sheet
   * @param rowIndex - Row index (0-based)
   * @param columnName - Column name
   * @param newValue - New value
   */
  public updateCell(sheetName: string, rowIndex: number, columnName: string, newValue: any): void {
    if (!this.workbook) {
      throw new Error('No workbook loaded. Call readExcel() first.');
    }

    const data = this.getSheetData<any>(sheetName);
    if (rowIndex >= data.length) {
      throw new Error(`Row index ${rowIndex} out of bounds.`);
    }

    data[rowIndex][columnName] = newValue;

    const worksheet = XLSX.utils.json_to_sheet(data);
    this.workbook.Sheets[sheetName] = worksheet;
    XLSX.writeFile(this.workbook, this.filePath);
    console.log(`✓ Cell updated - Sheet: ${sheetName}, Row: ${rowIndex}, Column: ${columnName}`);
  }

  /**
   * Delete a row from the sheet
   * @param sheetName - Name of the sheet
   * @param rowIndex - Row index to delete (0-based)
   */
  public deleteRow(sheetName: string, rowIndex: number): void {
    if (!this.workbook) {
      throw new Error('No workbook loaded. Call readExcel() first.');
    }

    const data = this.getSheetData<any>(sheetName);
    if (rowIndex >= data.length) {
      throw new Error(`Row index ${rowIndex} out of bounds.`);
    }

    data.splice(rowIndex, 1);

    const worksheet = XLSX.utils.json_to_sheet(data);
    this.workbook.Sheets[sheetName] = worksheet;
    XLSX.writeFile(this.workbook, this.filePath);
    console.log(`✓ Row deleted - Sheet: ${sheetName}, Row: ${rowIndex}`);
  }

  /**
   * Clear all data from a sheet but keep headers
   * @param sheetName - Name of the sheet
   */
  public clearSheet(sheetName: string): void {
    if (!this.workbook) {
      throw new Error('No workbook loaded. Call readExcel() first.');
    }

    const worksheet = XLSX.utils.json_to_sheet([]);
    this.workbook.Sheets[sheetName] = worksheet;
    XLSX.writeFile(this.workbook, this.filePath);
    console.log(`✓ Sheet cleared: ${sheetName}`);
  }

  /**
   * Close the workbook
   */
  public close(): void {
    this.workbook = null;
    this.filePath = '';
    console.log('✓ Workbook closed');
  }
}

export default new ExcelUtility();
