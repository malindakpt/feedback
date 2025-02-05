import React, { useState } from 'react';
import AddCompanyForm from './addCompany';
import { Box } from '@mui/material';
import { createEntity, updateEntity } from '../../../services/crudService';
import { Company } from '../../../interfaces/entities/company';
import { Collection } from '../../../enums/collections.enum';
import { uploadImage } from '../../../services/imageUploaderService';

const AddCompanyContainer: React.FC = () => {
    const [companyImage, setCompanyImage] = useState<File | null>(null);

    const handleImageChange = (file: File | null) => {
        setCompanyImage(file);
    };

    // Handle form submission
    const handleFormSubmit = async (values: any) => {
        try {
            let imageUrl = '';

            // Step 1: Prepare company data 
            const companyData: Company = {
                id: '',
                name: values.name,
                number: values.number,
                address: values.address,
                image: ''
            };

            // Step 2: Save company data in Firestore and get the document ID
            const cid = await createEntity(Collection.Companies, companyData);

            if (cid) {
                // Step 3: Upload image with ID as the file name (id.jpg)
                if (companyImage) {
                    const uniqueFileName = `${cid}.jpg`; // Use UID as file name
                    imageUrl = await uploadImage('companies', uniqueFileName, companyImage);
                }

                await updateEntity(Collection.Companies, cid, { image: imageUrl });

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
            <AddCompanyForm
                onSubmit={handleFormSubmit}
                onImageChange={handleImageChange}
            />
        </Box>
    );
};

export default AddCompanyContainer;
