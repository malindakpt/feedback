import React from "react";
import { Container, Card, CardContent, Typography, Avatar, Grid, Divider } from "@mui/material";
import { getUserRoles } from "../utils/userRoles";
import ReviewView from "../shared/reviewView/reviewViewContainer";
import { User } from "../../interfaces/entities/user";
import { Company } from "../../interfaces/entities/company";

interface UserViewProps {
  user: User ;
  company: Company | null;
  userId: string;
  companyId: string;
  branchId: string;
}

const UserView: React.FC<UserViewProps> = ({ user, company, userId, companyId, branchId }) => {
  return (
    <Container maxWidth="md">
      <Card sx={{ display: "flex", p: 2, borderRadius: 3, boxShadow: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <Avatar
              src={user?.image || "/assets/default-user.jpg"}
              alt={`${user?.firstName} ${user?.lastName}`}
              sx={{ width: 160, height: 160, margin: "auto" }}
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                {user?.firstName} {user?.lastName}
              </Typography>
              <Typography color="text.secondary">
                Company: {company?.name ?? "N/A"} - {getUserRoles(user?.position)}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography>
                <strong>Address:</strong> {"Not available"}
              </Typography>
              <Typography>
                <strong>NIC:</strong> {user?.nic}
              </Typography>
              <Typography>
                <strong>Contact:</strong> {"N/A"}
              </Typography>
              <Typography>
                <strong>Email:</strong> {user?.email}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      {/* Pass props to ReviewView */}
      <ReviewView userId={userId} companyId={companyId} branchId={branchId} />
    </Container>
  );
};

export default UserView;
