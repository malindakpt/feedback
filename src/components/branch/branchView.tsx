import React from "react";
import { Container, Card, CardContent, Typography, Avatar, Grid, Divider } from "@mui/material";
import ReviewView from "../shared/reviewView/reviewViewContainer";
import { Branch } from "../../interfaces/entities/branch";

interface BranchViewProps {
    Branch: Branch;
}

const BranchView: React.FC<BranchViewProps> = ({ Branch }) => {
    return (
        <Container maxWidth="md">
            <Card sx={{ display: "flex", p: 2, borderRadius: 3, boxShadow: 3 }}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
                        <Avatar
                            src={Branch?.image || "/assets/default-user.jpg"}
                            alt={Branch.name}
                            sx={{ width: 160, height: 160, margin: "auto" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold">
                                {Branch.name}
                            </Typography>
                            <Typography>
                                <strong>Company:</strong> {Branch.companyId || "N/A"}
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography>
                                <strong>Address:</strong> {Branch.address || "Not available"}
                            </Typography>
                            <Typography>
                                <strong>Contact:</strong> {Branch.number || "N/A"}
                            </Typography>
                            <Typography>
                                <strong>Email:</strong> {Branch.email || "N/A"}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>

            {/* Pass props to ReviewView */}
            <ReviewView branchId={Branch.id} userId={""} companyId={""} />

        </Container>
    );
};

export default BranchView;
