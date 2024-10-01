import React from 'react';
import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../../Services/FirebaseConfig'

interface DeleteImageProps {
  folder: string;
  id: string;
  onDelete: () => void;
}

const DeleteImage: React.FC<DeleteImageProps> = ({ folder, id, onDelete }) => {
  const handleDelete = () => {
    const storageRef = ref(storage, `${folder}/${id}`);
    deleteObject(storageRef)
      .then(() => {
        console.log('Image deleted successfully');
        alert('Image deleted successfully!');
        onDelete();
      })
      .catch((error) => {
        console.error('Error deleting image:', error);
        alert('Failed to delete the image');
      });
  };

  return (
    <button onClick={handleDelete} >Delete</button>
  );
};

export default DeleteImage;