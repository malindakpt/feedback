import React, { useState } from 'react';
import { Box } from '@mui/material';
import { updateEntity } from '../../services/crudService';
import { Collection } from '../../enums/collections.enum';
import { uploadImage } from '../../services/imageUploaderService';
import { useParams } from 'react-router-dom';
import RegisterForm from './userForm';
import { User } from '../../interfaces/entities/user';
import { useUserByUId } from '../../hooks/useUsersByUId';
import { useFetchCompany } from '../../hooks/useFetchCompanies';

const EditUserContainer: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const uId = id ?? "";
    const { companies } = useFetchCompany();
    const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
    const { user, loading, error } = useUserByUId(uId);

    const initialValues: User = user || {
        id: '',
        firstName: '',
        lastName: '',
        companyId: '',
        branchId: '',
        position: '',
        birthday: '',
        nic: '',
        image: '',
        email: '',
        password: ''
    };

    const handleImageChange = (file: File | null) => {
        setProfileImageFile(file);
    };

    // Handle form submission
    const handleFormSubmit = async (values: any) => {
        try {
            let profileImageUrl = values.image || '';


            if (profileImageFile) {
                const uniqueFileName = `${id}.jpg`; // Use company ID as file name
                profileImageUrl = await uploadImage('profile-images', uniqueFileName, profileImageFile);
            }

            // Step 2: Save company data in Firestore and get the document ID
            await updateEntity(Collection.Users, uId, {
                firstName: values.firstName,
                lastName: values.lastName,
                companyId: values.companyId,
                branchId: values.branchId,
                position: values.position,
                birthday: values.birthday,
                nic: values.nic,
                image: profileImageUrl,
                email: values.email,
                password: values.password,
            });

            alert("Company updated successfully!");
        } catch (error) {
            console.error('Error while updating company:', error);
            alert("Failed to update company!");
        }
    };

    if (loading) return <p>Loading company data...</p>;
    if (error) return <p>Error fetching company data: {error}</p>;

    const companyOptions = companies.map((company) => ({
        id: company.id, // assuming company has an `id` field
        label: company.name, // assuming company has a `name` field
    }));

    return (
        <Box>
            <RegisterForm
                handleRegister={handleFormSubmit}
                companyOptions={companyOptions}
                initialValues={initialValues}
                onImageChange={handleImageChange}
            />
        </Box>
    );
};

export default EditUserContainer;
