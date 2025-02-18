import React, { useState } from "react";
import { Box } from "@mui/material";
import { updateEntity } from "../../services/crudService";
import { Collection } from "../../enums/collections.enum";
import { uploadImage } from "../../services/imageUploaderService";
import { useParams } from "react-router-dom";
import RegisterForm from "./userForm";
import { User } from "../../interfaces/entities/user";
import { useCompanies } from "../../hooks/useCompanies";
import { defaultUser } from "../../defaultValues/defaultUser";
import { useGetUserByIdQuery } from "../../api/userApi";

const EditUserContainer: React.FC = () => {
    const { uId } = useParams<{ uId?: string }>();
    const userId = uId ?? "";
    const { companies } = useCompanies();
    const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
    
    // Fetch user data
    const { data: user, isLoading, error } = useGetUserByIdQuery(userId);

    // Handle loading & error states
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching user details.</p>;

    // Ensure initial values are always defined
    const initialValues: User = { ...defaultUser, ...(user || {}) };

    const handleImageChange = (file: File | null) => {
        setProfileImageFile(file);
    };

    // Handle form submission
    const handleFormSubmit = async (values: User) => {
        try {
            let profileImageUrl = values.image || "";

            if (profileImageFile) {
                const uniqueFileName = `${userId}.jpg`; // Use user ID as file name
                profileImageUrl = await uploadImage("profile-images", uniqueFileName, profileImageFile);
            }

            // Update user details in Firestore
            await updateEntity(Collection.Users, userId, {
                ...values, // Use spread to include all form values
                image: profileImageUrl, // Ensure updated image URL is saved
            });

            alert("User updated successfully!");
        } catch (error) {
            console.error("Error while updating user:", error);
            alert("Failed to update user!");
        }
    };

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
