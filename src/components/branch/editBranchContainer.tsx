import React, { useState } from 'react';
import { Box } from '@mui/material';
import { updateEntity } from '../../services/crudService';
import { Branch } from '../../interfaces/entities/branch';
import { Collection } from '../../enums/collections.enum';
import { uploadImage } from '../../services/imageUploaderService';
import { useParams } from 'react-router-dom';
import BranchForm from './branchForm';
import { useBranchByBranchID } from '../../hooks/useBranchByBranchId';
import { useCompanies } from '../../hooks/useCompanies';
import { defaultBranch } from '../../defaultValues/defaultBranch';

const EditBranchContainer: React.FC = () => {
    const { id } = useParams<{ id?: string }>(); // Mark id as optional
    const branchId = id ?? ""; // Ensure id is always a string
    const [branchImage, setBranchImage] = useState<File | null>(null);
    const { branch, loading, error } = useBranchByBranchID(branchId);
    const {companies} = useCompanies();


    const initialValues: Branch = { ...defaultBranch, ...(branch || {})};

    const handleImageChange = (file: File | null) => {
        setBranchImage(file);
    };

    // Handle form submission
    const handleFormSubmit = async (values: any) => {
        try {
            let imageUrl = values.image || '';


            if (branchImage) {
                const uniqueFileName = `${id}.jpg`; // Use branch ID as file name
                imageUrl = await uploadImage('branches', uniqueFileName, branchImage);
            }
            // Step 2: Save branch data in Firestore and get the document ID
            await updateEntity(Collection.Branches, branchId, {
                name: values.name,
                companyId: values.companyId,
                number: values.number,
                address: values.address,
                image: imageUrl
            });

            alert("branch updated successfully!");
        } catch (error) {
            console.error('Error while updating branch:', error);
            alert("Failed to update branch!");
        }
    };

    const companyOptions = companies.map((company) => ({
        id: company.id, // assuming company has an `id` field
        label: company.name, // assuming company has a `name` field
      }));

    if (loading) return <p>Loading branch data...</p>;
    if (error) return <p>Error fetching branch data: {error}</p>;

    return (
        <Box>
            <BranchForm
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                onImageChange={handleImageChange} 
                companyOptions={companyOptions}            />
        </Box>
    );
};

export default EditBranchContainer;
