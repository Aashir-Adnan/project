import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import * as XLSX from "xlsx";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { getServerResponse } from "../../Helpers/getServerResponse";

const ImportFunction = ({ parameters,addSagaCommunication,onSuccess = (message) => console.log(message), onFailure = (error) => console.error(error) }) => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);  // Create a ref for the file input

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            handleFileImport(file);  // Call handleFileImport after file is selected
        }
    };

    // Handle file import and read it
    const handleFileImport = (file) => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const reader = new FileReader();
        
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "binary" });

            // Assuming the first sheet is the one we want to parse
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            
            // Convert the sheet to JSON format
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });  // header: 1 will make it an array of arrays
            
            // Log the data (array of arrays)
            console.log("Imported Data:", jsonData);
            
            // For now, convert the data into an array of objects for better readability
            const headers = jsonData[0];  // First row is the header
            const updatedHeaders = headers.map(header => {
                // Find the parameter object where the label matches
                const parameter = parameters.find(param => param.label === header);
                
                if (parameter) {
                  return parameter.dynamicKey; // Replace with dynamic_key
                }
                
                return header; // Leave unchanged if no match is found
              });
              
              console.log("updatedHeaders",updatedHeaders)
            const dataObjects = jsonData.slice(1).map(row => {
                const obj = {};
                row.forEach((cell, index) => {
                    obj[updatedHeaders[index]] = cell;
                });
                return obj;
            });

            console.log("Converted Data:", dataObjects,addSagaCommunication);  // Log data as array of objects
            if (addSagaCommunication) {
                // If body doesn't exist, just add it directly
                if (!addSagaCommunication.hasOwnProperty('body')) {
                    addSagaCommunication.body = {import_users:dataObjects};  // Add body key with dataObjects as the value
                    console.log("Body added to addSagaCommunication:", addSagaCommunication);
                } else {
                    addSagaCommunication.body = {import_users:dataObjects};
                }
            }
            console.log("addSagaCommunication",addSagaCommunication)
            getServerResponse(addSagaCommunication)
            // Call success function after import
            onSuccess("File imported and data processed successfully!");
        };

        reader.onerror = (error) => {
            // Handle error reading file
            console.error("Error reading file:", error);
            onFailure("Failed to read the file.");
        };

        reader.readAsBinaryString(file);  // Read file as binary string
    };

    // Trigger the file input on button click
    const triggerFileInput = () => {
        fileInputRef.current.click();  // Programmatically trigger the file input
    };

    return (
        <div>
            <input
                ref={fileInputRef}  // Set the ref on the input field
                accept=".xlsx, .xls"
                type="file"
                onChange={handleFileChange}  // Now the file input change will call handleFileChange
                style={{ marginBottom: 10, display: 'none' }}  // Keep hidden
            />
            <Button
                color="customColor"
                onClick={triggerFileInput}  // Trigger file input
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'black',
                    },
                }}
            >
                <FileUploadIcon sx={{ fontSize: 20 }} />
                Import File
            </Button>
            
        </div>
    );
};

export default ImportFunction;
