
import React from "react";
import { Card, CardContent, Typography, CardActionArea, Grid2 } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from '@mui/icons-material/People';
import { Link as RouterLink } from "react-router-dom";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";

const ManagerView: React.FC = () => {
    const { user } = useAuthenticatedUser(); 

    return (
        <Grid2 container spacing={5} justifyContent="center" sx={{ mt: 4 }} columns={10}>
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ maxWidth: 350, textAlign: "center", cursor: "pointer", backgroundColor: "#1976d2", borderRadius: 3 }}>
                    <CardActionArea component={RouterLink} to={`/company/${user?.companyId}/branch/${user?.branchId}`}>
                        <CardContent>
                            <StoreIcon sx={{ fontSize: 75, color: "#ffffff" }} />
                            <Typography variant="h6" sx={{ mt: 2, fontSize: 25, color: "#ffffff" }}>
                                Branch Details
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ maxWidth: 350, textAlign: "center", cursor: "pointer", backgroundColor: "#1976d2", borderRadius: 3 }}>
                    <CardActionArea component={RouterLink} to={`/company/${user?.companyId}/branch/${user?.branchId}/employeeList`}>
                        <CardContent>
                            <PeopleIcon sx={{ fontSize: 75, color: "#ffffff" }} />
                            <Typography variant="h6" sx={{ mt: 2, fontSize: 25, color: "#ffffff" }}>
                                Manage Employees
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
        </Grid2>
    );
};

export default ManagerView;
