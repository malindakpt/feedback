import React from "react";
import { Container, Card, CardContent, Typography, Avatar, Grid, Divider } from "@mui/material";
import ReviewView from "../shared/reviewView/reviewViewContainer";
import { Company } from "../../interfaces/entities/company";

interface CompanyViewProps {
    company: Company;
}

const UserView: React.FC<CompanyViewProps> = ({ company }) => {
    return (
        <Container maxWidth="md">
            <Card sx={{ display: "flex", p: 2, borderRadius: 3, boxShadow: 3 }}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
                        <Avatar
                            src={company?.image || "/assets/default-user.jpg"}
                            alt={company.name}
                            sx={{ width: 160, height: 160, margin: "auto" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold">
                                {company.name}
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography>
                                <strong>Address:</strong> {company.address || "Not available"}
                            </Typography>
                            <Typography>
                                <strong>Contact:</strong> {company.number || "N/A"}
                            </Typography>
                            <Typography>
                                <strong>Email:</strong> {company.email || "N/A"}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>

            {/* Pass props to ReviewView */}
            <ReviewView companyId={company.id} userId={""} branchId={""} />

        </Container>
    );
};

export default UserView;
