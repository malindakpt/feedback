import React, { useState } from "react";
import { collection,  query, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { Box, Button, Container,  Typography } from "@mui/material";
import TextInput from "./Shared/TextInput";
import NumberInput from "./Shared/NumberInput";
import SelectInput from "./Shared/SelectInput";
import DateInput from "./Shared/DateInput";



interface Company {
  id: string;
  name: string;
  address: string;
  telephone: string;
  companyType: string;
  startedDate: string;
}

const AddCompany: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [companyType, setCompanyType] = useState<string>("");
  const [startedDate, setStartedDate] = useState<string>("")

  const handleAddCompany = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
    
      const companiesCollection = collection(db, "companies");
      const q = query(companiesCollection);
      const querySnapshot = await getDocs(q);
      const companyCount = querySnapshot.size + 1; 
      const newCompanyId = `comp${companyCount}`;

      const newCompany: Company = {
        id: newCompanyId,
        name: companyName,
        address: address,
        telephone: telephone,
        companyType: companyType,
        startedDate: startedDate,
      };

      
      await setDoc(doc(companiesCollection, newCompanyId), newCompany);

      
      setCompanyName("");
      setAddress("");
      setTelephone("");
      setCompanyType("");
      setStartedDate("");

      alert("Company added successfully!");
    } catch (error) {
      console.error("Error adding company: ", error);
      alert("Failed to add company.");
    }
  };

  return (
    
    <Container maxWidth="xs"   >
      <Typography variant="h4" component="h2" gutterBottom>
        Add New Company
      </Typography>
      <Box component="form"  onSubmit={handleAddCompany} sx={{ mt: 1 }}>
      <TextInput
          label="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e)}
          required
        />
        <TextInput
        label="Address"
        value={address}
        onChange={(e) => setAddress(e)}
        />
        
        <NumberInput
        label="Telephone Number"
        value={telephone}
        onChange={setTelephone}
        required
        />

        <SelectInput
        label="Company Type"
        value={companyType}
        onChange={setCompanyType}
        options={[
          {label: "Public" , value: "Public"},
          {label: "Private", value: "Private" },
        ]}
        />
        <DateInput
        label="Started Date"
        value={startedDate}
        onChange={setStartedDate}
        required
        />
        
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Add Company
        </Button>
      </Box>
    </Container>
  );
};

export default AddCompany;
