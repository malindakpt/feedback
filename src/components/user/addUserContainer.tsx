import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/auth/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import RegisterForm from './userForm';
import { createEntity } from '../../services/crudService';
import { Collection } from '../../enums/collections.enum';
import { useCompanies } from '../../hooks/useCompanies';
import { uploadImage } from '../../services/imageUploaderService';
import { defaultUser } from '../../defaultValues/defaultUser';

const RegisterContainer: React.FC = () => {
  const navigate = useNavigate();
  const { companies } = useCompanies();
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);

  const handleRegister = async (values: any) => {
    const { email, password, firstName, lastName, nic, birthday, companyId, branchId, position } = values;
  
    try {
      // Step 1: Authenticate user and get UID
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const id = userCredential.user.uid;
  
      let profileImageUrl = '';
  
      // Step 2: Upload the image using UID as the file name
      if (profileImageFile) {
        const uniqueFileName = `${id}.jpg`; // Use UID as file name
        profileImageUrl = await uploadImage('profile-images', uniqueFileName, profileImageFile);
      }
  
      // Step 3: Save user data to Firestore
      const userData = {
        firstName,
        lastName,
        nic,
        birthday,
        email,
        companyId,
        branchId,
        position,
        image: profileImageUrl, 
        status: 'pending',
        id,
        createdAt: new Date().toISOString(),
      };
  
      const userId = await createEntity(Collection.Users, userData);
  
      if (userId) {
        alert('Registration successful');
        navigate('/login');
      } else {
        throw new Error('Failed to save user data to Firestore');
      }
    } catch (error: any) {
      console.error('Registration error:', error.message || error);
      alert(`Unsuccessful registration. Please try again. Error: ${error.message || error}`);
    }
  };
  

  const handleImageChange = (file: File | null) => {
    setProfileImageFile(file);
  };

  const companyOptions = companies.map((company) => ({
    id: company.id, // assuming company has an `id` field
    label: company.name, // assuming company has a `name` field
  }));

  return (
    <RegisterForm
      handleRegister={handleRegister}
      companyOptions={companyOptions}
      onImageChange={handleImageChange}
      initialValues={defaultUser}
    />
  );
};

export default RegisterContainer;
