import React, { useState } from 'react';
import { Box } from '@mui/material';
import { createEntity, updateEntity } from '../../services/crudService';
import { Branch } from '../../interfaces/entities/branch';
import { Collection } from '../../enums/collections.enum';
import { uploadImage } from '../../services/imageUploaderService';
import { defaultBranch } from '../../defaultValues/defaultBranch';
import BranchForm from './branchForm';
import { useCompanies } from '../../hooks/useCompanies';
import { useParams } from 'react-router-dom';

const AddBranchContainer: React.FC = () => {
    const { companyId } = useParams<{ companyId?: string }>(); // Mark id as optional
    const [branchImage, setBranchImage] = useState<File | null>(null);
    const { companies } = useCompanies(companyId);

    const handleImageChange = (file: File | null) => {
        setBranchImage(file);
    };
    // Handle form submission
    const handleFormSubmit = async (values: Branch) => {
        try {
            let imageUrl = '';

            // Step 1: Prepare branch data 
            const branchData: Branch = { ...values };

            // Step 2: Save branch data in Firestore and get the document ID
            const companyId = await createEntity(Collection.Branches, branchData);

            if (companyId) {
                // Step 3: Upload image with ID as the file name (id.jpg)
                if (branchImage) {
                    const uniqueFileName = `${companyId}.jpg`; // Use UID as file name
                    imageUrl = await uploadImage('branches', uniqueFileName, branchImage);
                }

                await updateEntity(Collection.Branches, companyId, { image: imageUrl, id: companyId });
                alert("Branch added successfully!");
            } else {
                alert("Failed to add branch!");
            }
        } catch (error) {
            console.error('Error while submitting form:', error);
        }
    };

    const companyOptions = companies.map((company) => ({
        id: company.id, // assuming company has an `id` field
        label: company.name, // assuming company has a `name` field
    }));

    return (
        <Box>
            <BranchForm
                initialValues={defaultBranch} // Pass the corrected initial values
                onSubmit={handleFormSubmit}
                companyOptions={companyOptions}
                onImageChange={handleImageChange}
            />
        </Box>
    );
};

export default AddBranchContainer;
