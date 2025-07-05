// src/components/ExportExcel.js
import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import './ExportExcel.css';

const ExportExcel = ({ data, fileName = 'isar-data.xlsx', sheetName = 'Sheet1' }) => {
  const exportToExcel = () => {
    if (!data || data.length === 0) {
      alert('No data available to export.');
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const fileData = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(fileData, fileName);
  };

  return (
    <div className="export-btn-wrapper">
      <button onClick={exportToExcel} className="export-btn">📤 Export to Excel</button>
    </div>
  );
};

export default ExportExcel;
