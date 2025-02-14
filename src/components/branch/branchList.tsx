import React from "react";
import { useParams } from "react-router-dom";
import { useCompanyByCompanyID } from "../../hooks/useCompanyByCompanyId";
import { useBranchByCompanyId } from "../../hooks/useBranchByComapnyId";
import DataTable from "../shared/dataTable/dataTable";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BranchListPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const { company, loading: companyLoading, error: companyError } = useCompanyByCompanyID(companyId || "");
  const { branches, loading: branchesLoading, error: branchesError } = useBranchByCompanyId(companyId || "");

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Branch Name", width: 200 },
    { field: "location", headerName: "Location", width: 200 },
    { field: "manager", headerName: "Manager", width: 200 },
  ];

  const rows = branches.map((branch: any, index: number) => ({ id: index + 1, ...branch }));

  return (
    <Box sx={{ maxWidth: 1000, margin: "0 auto", padding: 3 }}>
      {companyLoading ? <Typography>Loading company...</Typography> : companyError ? <Typography color="error">{companyError}</Typography> : (
        <Typography variant="h4">{company?.name}</Typography>
      )}
      {branchesLoading ? <Typography>Loading branches...</Typography> : branchesError ? <Typography color="error">{branchesError}</Typography> : (
        <DataTable title="Branches List" columns={columns} rows={rows} />
      )}
    </Box>
  );
};

export default BranchListPage;
