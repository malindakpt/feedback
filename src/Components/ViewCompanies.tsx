import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import {
  
  Button,
  Container,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DateInput from "./Shared/DateInput";

interface Company {
  id: string;
  name: string;
  address: string;
  telephone: string;
  companyType: string;
  startedDate: string;
}

const ViewCompanies: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [editMode, setEditMode] = useState<string | null>(null);
  const [editedCompany, setEditedCompany] = useState<Company | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      const companiesCollection = collection(db, "companies");
      const querySnapshot = await getDocs(companiesCollection);
      const companiesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Company[];
      setCompanies(companiesList);
    };

    fetchCompanies();
  }, []);

  const handleEdit = (company: Company) => {
    setEditMode(company.id);
    setEditedCompany(company);
  };

  const handleSave = async (companyId: string) => {
    if (editedCompany) {
      const companyDoc = doc(db, "companies", companyId);
      await updateDoc(companyDoc, {
        name: editedCompany.name,
        address: editedCompany.address,
        telephone: editedCompany.telephone,
        companyType: editedCompany.companyType,
        startedDate: editedCompany.startedDate,
      });
      setEditMode(null);
      setCompanies(
        companies.map((company) =>
          company.id === companyId ? editedCompany : company
        )
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCompany((prev) => ({
      ...prev!,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        View and Edit Companies
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Telephone</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Started Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.id}</TableCell>
                <TableCell>
                  {editMode === company.id ? (
                    <TextField
                      name="name"
                      value={editedCompany?.name || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    company.name
                  )}
                </TableCell>
                <TableCell>
                  {editMode === company.id ? (
                    <TextField
                      name="address"
                      value={editedCompany?.address || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    company.address
                  )}
                </TableCell>
                <TableCell>
                  {editMode === company.id ? (
                    <TextField
                      name="telephone"
                      value={editedCompany?.telephone || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    company.telephone
                  )}
                </TableCell>

                <TableCell>
                  {editMode === company.id ? (
                    <TextField
                      name="companyType"
                      value={editedCompany?.companyType || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    company.companyType
                  )}
                </TableCell>

                <TableCell>
                  {editMode === company.id ?(
                    <DateInput
                    label="Started Date"
                    value={editedCompany?.startedDate || ""}
                    onChange={(val) =>
                      setEditedCompany((prev) => ({
                        ...prev!,
                        startedDate:val,
                      }))
                    }
                    />
                  ) : (
                    company.startedDate
                  )
                }
                </TableCell>
                
                
                <TableCell>
                  {editMode === company.id ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSave(company.id)}
                    >
                      Save
                    </Button>
                  ) : (
                    <IconButton onClick={() => handleEdit(company)}>
                      <EditIcon />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ViewCompanies;
