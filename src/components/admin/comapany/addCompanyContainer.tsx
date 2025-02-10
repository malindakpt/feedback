import React, { useState } from 'react';
import { Box } from '@mui/material';
import { createEntity, updateEntity } from '../../../services/crudService';
import { Company } from '../../../interfaces/entities/company';
import { Collection } from '../../../enums/collections.enum';
import { uploadImage } from '../../../services/imageUploaderService';
import { defaultCompany } from '../../../defaultValues/defaultCompany';
import CompanyForm from './companyForm';

const AddCompanyContainer: React.FC = () => {
    const [companyImage, setCompanyImage] = useState<File | null>(null);

    const handleImageChange = (file: File | null) => {
        setCompanyImage(file);
    };
    // Handle form submission
    const handleFormSubmit = async (values: Company) => {
        try {
            let imageUrl = '';

            // Step 1: Prepare company data 
            const companyData: Company = { ...values };

            // Step 2: Save company data in Firestore and get the document ID
            const cid = await createEntity(Collection.Companies, companyData);

            if (cid) {
                // Step 3: Upload image with ID as the file name (id.jpg)
                if (companyImage) {
                    const uniqueFileName = `${cid}.jpg`; // Use UID as file name
                    imageUrl = await uploadImage('companies', uniqueFileName, companyImage);
                }

                await updateEntity(Collection.Companies, cid, { image: imageUrl, id: cid });
                alert("Company added successfully!");
            } else {
                alert("Failed to add company!");
            }
        } catch (error) {
            console.error('Error while submitting form:', error);
        }
    };

    return (
        <Box>
            <CompanyForm
                initialValues={defaultCompany} // Pass the corrected initial values
                onSubmit={handleFormSubmit}
                onImageChange={handleImageChange}
            />
        </Box>
    );
};

export default AddCompanyContainer;
