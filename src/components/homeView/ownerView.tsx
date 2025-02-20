
import React from "react";
import { Card, CardContent, Typography, CardActionArea, Grid2 } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from "@mui/icons-material/Store";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Link as RouterLink } from "react-router-dom";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";

const AdminView: React.FC = () => {
    const { user } = useAuthenticatedUser();  

    return (
        <Grid2 container spacing={5} justifyContent="center" sx={{ mt: 4 }} columns={10}>
            {/* First Row */}
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} >
                <Card sx={{ maxWidth: 350, textAlign: "center", cursor: "pointer", backgroundColor: "#1976d2", borderRadius: 3 }}>
                    <CardActionArea component={RouterLink} to ={`/company/${user?.companyId}`}>
                        <CardContent>
                            <BusinessIcon sx={{ fontSize: 75, color: "#ffffff" }} />
                            <Typography variant="h6" sx={{ mt: 2, fontSize: 25, color: "#ffffff" }}>
                                Company
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ maxWidth: 350, textAlign: "center", cursor: "pointer", backgroundColor: "#1976d2", borderRadius: 3 }}>
                    <CardActionArea component={RouterLink} to={`/company/${user?.companyId}/branch/add`}>
                        <CardContent>
                            <AddBusinessIcon sx={{ fontSize: 75, color: "#ffffff" }} />
                            <Typography variant="h6" sx={{ mt: 2, fontSize: 25, color: "#ffffff" }}>
                                Add Branch
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>


            {/* Second Row */}
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ maxWidth: 350, textAlign: "center", cursor: "pointer", backgroundColor: "#1976d2", borderRadius: 3 }}>
                    <CardActionArea component={RouterLink} to="/branchList">
                        <CardContent>
                            <StoreIcon sx={{ fontSize: 75, color: "#ffffff" }} />
                            <Typography variant="h6" sx={{ mt: 2, fontSize: 25, color: "#ffffff" }}>
                                Manage Branches
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>
        </Grid2>
    );
};

export default AdminView;
