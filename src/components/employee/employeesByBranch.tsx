import * as React from 'react';
import { useUserByBranchId } from "../../hooks/useUserbyBranchId";
import { useParams } from 'react-router-dom';
import DataTable from '../shared/dataTable/dataTable';
import { DataTableColumn } from '../shared/dataTable/types/dataTableColumn';


const data: DataTableColumn[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'fullName',
        headerName: 'Full name',
        width: 250,
    },
    {
        field: 'number',
        headerName: 'Contact Number',
        width: 150,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 250,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
];

const EmployeesByBranch: React.FC = () => {
    const { branchId } = useParams<{ branchId?: string }>();
    const { users, loading, error } = useUserByBranchId(branchId ?? "");

    const employees = users.map(user => ({
        ...user,
        fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
    }));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <DataTable
            rows={employees}
            columns={data}
            hideFooter={true}
            checkboxSelection={true}
        />
    );
};

export default EmployeesByBranch;
