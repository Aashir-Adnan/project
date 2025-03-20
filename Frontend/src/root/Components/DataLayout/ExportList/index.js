import React, { useState } from "react";
import { Button, Menu, MenuItem, Fade } from "@mui/material";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import PropTypes from 'prop-types';
import { FileDownload } from '@mui/icons-material';

const ExportDropdown = ({
    headers,
    data,
    formats = ["PDF", "Excel", "CSV", "Download Format"],
    includeHeaders = true,
    onSuccess = (message) => console.log(message),
    onFailure = (error) => console.error(error), // Default function
    onAction = () => console.log("Export action triggered"),
}) => {
    console.log("ExportDropdown", headers, data);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleExportClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleExportClose = () => {
        setAnchorEl(null);
    };

    const executeExport = (exportFunction, format) => {
        try {
            exportFunction();
            onSuccess(`Export to ${format} successful!`);
        } catch (e) {
            if (typeof onFailure === 'function') {
                onFailure(`Export to ${format} failed: ${e.message}`);
            } else {
                console.error('onFailure is not a function:', onFailure);
            }
        }
    };
    // const downloadFormatExcel = () => {
    //     console.log("downloadFormatExcel Headers: ",headers)
    //     const exportHeaders = headers?.reduce((acc, header) => {
    //         if (header?.visible) acc[header?.label] = "";
    //         return acc;
    //     }, {});

    //     const worksheet = XLSX.utils.json_to_sheet([exportHeaders]); // Create sheet with only headers
    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, "Format");
    //     XLSX.writeFile(workbook, "format.xlsx");
    // };
    const downloadFormatExcel = async () => {
        console.log("New downloadFormatExcel Headers: ", headers);
    
        const generateSampleData = (header) => {
            if (header?.type === "select" && header?.options?.length > 0) {
                return header?.options[0]?.label; // Default first option
            } else if (header?.type === "date") {
                return new Date().toISOString().split("T")[0]; // YYYY-MM-DD
            } else if (header?.type === "dateTime") {
                return new Date().toISOString().replace("T", " ").split(".")[0]; // YYYY-MM-DD HH:MM:SS
            } else if (header?.type === "time") {
                return new Date().toTimeString().split(" ")[0]; // HH:MM:SS
            } else if (header?.type === "checkbox") {
                return "TRUE"; // Excel recognizes TRUE/FALSE
            } else {
                return `Sample ${header?.label}`;
            }
        };
    
        // Create a new Excel workbook
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Format");
        const dropdownSheet = workbook.addWorksheet("Dropdowns"); // Store dropdown options
    
        // Add headers
        worksheet.addRow(headers.map(header => header.label));
    
        // Add one sample row
        worksheet.addRow(headers.map(generateSampleData));
    
        // Create a map to store named ranges for dropdowns
        const namedRanges = {};
    
        headers.forEach((header, colIndex) => {
            const column = worksheet.getColumn(colIndex + 1);
    
            if (header?.type === "select" && header?.options?.length > 0) {
                // Create a named range for dropdown values
                const dropdownOptions = header.options.map(opt => opt.label);
                const dropdownStartRow = dropdownSheet.rowCount + 1;
    
                dropdownOptions.forEach((option) => {
                    dropdownSheet.addRow([option]);
                });
    
                const dropdownEndRow = dropdownSheet.rowCount;
                const rangeName = `Dropdown_${colIndex}`;
    
                namedRanges[rangeName] = `Dropdowns!$A$${dropdownStartRow}:$A$${dropdownEndRow}`;
    
                column.eachCell((cell, rowNumber) => {
                    if (rowNumber > 1) { // Apply validation to rows below header
                        cell.dataValidation = {
                            type: "list",
                            allowBlank: true,
                            formula1: rangeName, // Use named range instead of direct formula
                            showErrorMessage: true,
                            errorTitle: "Invalid Selection",
                            error: `Please select a valid option for ${header.label}.`,
                        };
                    }
                });
            } else if (header?.type === "date" || header?.type === "dateTime") {
                column.eachCell((cell, rowNumber) => {
                    if (rowNumber > 1) {
                        cell.dataValidation = {
                            type: "date",
                            operator: "greaterThan",
                            formula1: "1900-01-01", // Ensures date selection
                            showErrorMessage: true,
                            errorTitle: "Invalid Date",
                            error: `Please select a valid date for ${header.label}.`,
                        };
                    }
                });
            } else if (header?.type === "checkbox") {
                column.eachCell((cell, rowNumber) => {
                    if (rowNumber > 1) {
                        cell.dataValidation = {
                            type: "list",
                            allowBlank: true,
                            formula1: '"TRUE,FALSE"',
                            showErrorMessage: true,
                            errorTitle: "Invalid Selection",
                            error: `Please select TRUE or FALSE for ${header.label}.`,
                        };
                    }
                });
            }
        });
    
        // Generate and download the Excel file
        workbook.xlsx.writeBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
            saveAs(blob, "format.xlsx");
            console.log("Excel file exported successfully.");
        }).catch((err) => {
            console.error("Error exporting Excel file:", err);
        });
    };
    const exportToPDF = () => {
        const doc = new jsPDF();
        const columns = includeHeaders ? headers?.map(header => header?.label) : [];
        const rows = data?.map(row => headers?.map(header => row[header?.dynamicKey]));

        doc.text("Exported Data", 10, 10);
        doc.autoTable({
            head: includeHeaders ? [columns] : undefined,
            body: rows,
            startY: 20,
        });
        doc.save("exported_data.pdf");
    };


    const exportToExcel = () => {
        const exportData = data?.map(row => {
            let obj = {};
            headers?.forEach(header => {
                if (header?.visible) obj[header?.label] = row[header?.dynamicKey];
            });
            return obj;
        });
        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Exported Data");
        XLSX.writeFile(workbook, "exported_data.xlsx");
    };

    const exportToCSV = () => {
        const exportData = data?.map(row => {
            let obj = {};
            headers?.forEach(header => {
                if (header?.visible) obj[header?.label] = row[header?.dynamicKey];
            });
            return obj;
        });
        console.log("Exporting to CSV", exportData);
        const csv = Papa.unparse(exportData, { header: includeHeaders });
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", "exported_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleMenuItemClick = (format) => {
        onAction(`Export to ${format} action triggered`);

        switch (format) {
            case "PDF":
                executeExport(exportToPDF, "PDF");
                break;
            case "Excel":
                executeExport(exportToExcel, "Excel");
                break;
            case "CSV":
                executeExport(exportToCSV, "CSV");
                break;
            case "Download Format":
                executeExport(downloadFormatExcel, "Download Format");
                break;
            default:
                console.log(`${format} export is not implemented`);
                break;
        }
        handleExportClose();
    };

    return (
        <>
            <Button
                color="customColor"
                onClick={handleExportClick}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,  // Adds some space between the icon and the text
                    '&:hover': {
                        backgroundColor: 'transparent', // No background change on hover
                        color: 'black', // Ensures color doesn't change on hover
                    },
                }}
            >
                <FileDownload sx={{ fontSize: 20 }} />  {/* Export icon */}
                Export
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleExportClose}
                TransitionComponent={Fade}
            >
                {formats?.map((format) => (
                    <MenuItem key={format} onClick={() => handleMenuItemClick(format)}>
                        Export to {format}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

ExportDropdown.propTypes = {
    headers: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    formats: PropTypes.array,
    includeHeaders: PropTypes.bool,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func,
    onAction: PropTypes.func,
};

export default ExportDropdown;
