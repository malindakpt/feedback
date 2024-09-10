import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../services/firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


interface ImageUploaderProps {
  branchID?: string;
  companyID?: string;
  employeeID?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ branchID, companyID, employeeID }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [enteredID, setEnteredID] = useState<string>('');
  const navigate = useNavigate();

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
  
      if (validImageTypes.includes(file.type)) {
        setImage(file);
      } else {
        alert('Please upload a valid image file (JPEG, PNG, JPG, GIF).');
        setImage(null);
      }
    }
  };

  const handleIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredID(event.target.value);
  };

const handleUpload = () => {
  if (image && selectedOption && enteredID) {
    const folderName = selectedOption;
    const folderRef = ref(storage, folderName);

    listAll(folderRef)
      .then((res) => {
        const imageExists = res.items.some((itemRef) => itemRef.name === enteredID);

        if (imageExists) {
          console.error('image with this ID already exists.');
          alert('A image with this ID already exists. Please use a different ID.');
        } else {
          const storageRef = ref(storage, `${folderName}/${enteredID}`);
          const uploadTask = uploadBytesResumable(storageRef, image);

          uploadTask.on(
            'state_changed',
            null,
            (uploadError) => {
              console.error('Upload failed:', uploadError);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('Image URL:', downloadURL);
                alert('Image uploaded successfully!');
              });
            }
          );
        }
      })
      .catch((error) => {
        console.error('Error checking folder:', error);
      });
  }
};

const handleViewImages = () => {
  navigate('/imageview'); // Programmatically navigate to the images view page
};


  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="branch">Branch</option>
        <option value="company">Company</option>
        <option value="employee">Employee</option>
      </select>

      <input
        type="text"
        placeholder="Enter ID"
        value={enteredID}
        onChange={handleIDChange}
        disabled={!selectedOption}
      />

      <input type="file" accept="image/*" onChange={handleImageChange} />

      <button onClick={handleUpload} disabled={!image || !selectedOption || !enteredID}>
        Upload Image
      </button>

      <button onClick={handleViewImages}>View Images</button>
    </div>
  );
};

export default ImageUploader;
