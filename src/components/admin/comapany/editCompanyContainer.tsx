import React, { useState } from 'react';
import { Box } from '@mui/material';
import { updateEntity } from '../../../services/crudService';
import { Company } from '../../../interfaces/entities/company';
import { Collection } from '../../../enums/collections.enum';
import { uploadImage } from '../../../services/imageUploaderService';
import { useParams } from 'react-router-dom';
import CompanyForm from './companyForm';
import { useCompanyByCompanyID } from '../../../hooks/useCompanyByCompanyId';
import { defaultCompany } from '../../../defaultValues/defaultCompany';

const EditCompanyContainer: React.FC = () => {
    const { id } = useParams<{ id?: string }>(); // Mark id as optional
    const companyId = id ?? ""; // Ensure id is always a string
    const [companyImage, setCompanyImage] = useState<File | null>(null);
    const { company, loading, error } = useCompanyByCompanyID(companyId);

    const initialValues: Company = {...defaultCompany,...(company)};

    const handleImageChange = (file: File | null) => {
        setCompanyImage(file);
    };

    // Handle form submission
    const handleFormSubmit = async (values: any) => {
        try {
            let imageUrl = values.image || '';


            if (companyImage) {
                const uniqueFileName = `${id}.jpg`; // Use company ID as file name
                imageUrl = await uploadImage('companies', uniqueFileName, companyImage);
            }
            // Step 2: Save company data in Firestore and get the document ID
            await updateEntity(Collection.Companies, companyId, {
                name: values.name,
                number: values.number,
                address: values.address,
                image: imageUrl,
            });

            alert("Company updated successfully!");
        } catch (error) {
            console.error('Error while updating company:', error);
            alert("Failed to update company!");
        }
    };

    if (loading) return <p>Loading company data...</p>;
    if (error) return <p>Error fetching company data: {error}</p>;

    return (
        <Box>
            <CompanyForm
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                onImageChange={handleImageChange}
            />
        </Box>
    );
};

export default EditCompanyContainer;
