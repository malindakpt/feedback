import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../services/auth/firebase'

interface UpdateImageProps {
  folder: string;
  id: string;
  onUpdate: () => void;
}

const UpdateImage: React.FC<UpdateImageProps> = ({ folder, id, onUpdate }) => {
  const [newImage, setNewImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setNewImage(event.target.files[0]);
    }
  };

  const handleUpdate = () => {
    if (newImage) {
      const storageRef = ref(storage, `${folder}/${id}`);
      const uploadTask = uploadBytesResumable(storageRef, newImage);

      uploadTask.on(
        'state_changed',
        null,
        (uploadError) => {
          console.error('Upload failed:', uploadError);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('Updated Image URL:', downloadURL);
            alert('Image updated successfully!');
            onUpdate();
          });
        }
      );
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button
        onClick={handleUpdate}
        disabled={!newImage}>
        Update
      </button>
    </div>
  );
};

export default UpdateImage;