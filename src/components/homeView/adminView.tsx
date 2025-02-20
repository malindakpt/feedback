import React from "react";
import { Card, CardContent, Typography, CardActionArea, Grid, List, ListItem, ListItemText, Divider } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import { Link } from "react-router-dom"; // Use Link instead of RouterLink
import { useCompanies } from "../../hooks/useCompanies"; 

const AdminView: React.FC = () => {
  const { companies, loading, error } = useCompanies(); // Fetch companies

  return (
    <Grid container spacing={5} justifyContent="center" sx={{ mt: 4 }} columns={10}>
      {/* Add Company Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 350, textAlign: "center", cursor: "pointer", backgroundColor: "#1976d2", borderRadius: 3 }}>
          <CardActionArea component={Link} to="/addCompany">
            <CardContent>
              <BusinessIcon sx={{ fontSize: 75, color: "#ffffff" }} />
              <Typography variant="h6" sx={{ mt: 2, fontSize: 25, color: "#ffffff" }}>
                Add Company
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* Company List */}
      <Grid item xs={12} sm={6} md={6}>
        <Card sx={{ maxWidth: 400, p: 2, borderRadius: 3, border: "1px solid", borderColor: "divider" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Company List
          </Typography>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography color="error">Error fetching companies</Typography>
          ) : (
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {companies.map((company, index) => (
                <React.Fragment key={company.id}>
                  <ListItem component={Link} to={`/company/${company.id}`} sx={{ cursor: "pointer" }}>
                    <ListItemText primary={company.name} secondary={company.address} />
                  </ListItem>
                  {index < companies.length - 1 && <Divider component="li" />}
                </React.Fragment>
              ))}
            </List>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default AdminView;
