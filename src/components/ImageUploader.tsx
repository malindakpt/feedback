import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../services/firebase';

interface ImageUploaderProps {
  branchID?: string;
  companyID?: string;
  employeeID?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ branchID, companyID, employeeID }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [enteredID, setEnteredID] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredID(event.target.value);
  };

  const handleUpload = () => {
    if (image && selectedOption && enteredID) {
      const folderName = selectedOption;

      const storageRef = ref(storage, `${folderName}/${enteredID}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        null,
        (error) => {
          console.error('Upload failed:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('Image URL:', downloadURL);
          });
        }
      );
    }
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
    </div>
  );
};

export default ImageUploader;
