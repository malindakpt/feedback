// DataTable.tsx - A reusable Material UI data table
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface DataTableProps {
  title: string;
  columns: GridColDef[];
  rows: any[];
}

const DataTable: React.FC<DataTableProps> = ({ title, columns, rows }) => {
  return (
    <Box sx={{ height: 400, width: "100%", mt: 2 }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10, 20]} checkboxSelection />
    </Box>
  );
};

export default DataTable;