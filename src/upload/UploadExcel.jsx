import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const UploadExcel = () => {
  const [data, setData] = useState([]); // Stores the uploaded Excel data
  const [fileName, setFileName] = useState("");

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });

      // Assuming the first sheet contains the relevant data
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert sheet to JSON format
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  // Function to generate and download updated Excel file
  const handleDownload = () => {
    if (data.length === 0) {
      alert("No data to export!");
      return;
    }

    // Convert the updated data back to worksheet format
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "UpdatedSheet");

    // Generate and trigger download
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "MidTermUpdated.xlsx");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Upload Card */}
      <Card className="w-[500px] bg-white shadow-lg rounded-lg p-6">
        <CardContent className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Excel File</h2>

          <input type="file" accept=".xlsx" onChange={handleFileUpload} className="mb-4" />

          {fileName && <p className="text-gray-600 mb-2">Uploaded: {fileName}</p>}

          {/* Display Data Preview */}
          {data.length > 0 && (
            <div className="max-h-60 overflow-y-auto w-full border p-2 text-sm">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    {data[0].map((col, index) => (
                      <th key={index} className="border p-1">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, colIndex) => (
                        <td key={colIndex} className="border p-1">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Buttons */}
          <Button className="w-full bg-indigo-600 text-white mt-4" onClick={handleDownload}>
            Download Updated Excel
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadExcel;
