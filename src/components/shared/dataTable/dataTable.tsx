import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DataTableColumn } from './types/dataTableColumn';

interface DataTableProps {
    rows: any; // Rows for the table
    columns: DataTableColumn[]; // Columns for the table
    hideFooter?: boolean; // Option to hide footer
    checkboxSelection?: boolean; // Option for checkbox selection
}

const DataTable: React.FC<DataTableProps> = ({
    rows,
    columns,
    hideFooter = false,
    checkboxSelection = false,
}) => {


    return (
        <Box sx={{ height: 'auto', width: '80%', margin: 'auto', display: 'flex', justifyContent: 'center' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection={checkboxSelection}
                disableRowSelectionOnClick
                hideFooter={hideFooter}
            />
        </Box>
    );
};

export default DataTable;
