import React, { useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../Services/FirebaseConfig';
import DeleteImage from './deleteImage';
import UpdateImage from './updateImage';
import defaultProfileImage from '../../assets/defProfile.jpg'; // Add default profile image from your assets

export interface ImageData {
  id: string;
  folder: string;
  url: string;
}

export default function AccountPage() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageId, setImageId] = useState<string | null>(null);
  const [images, setImages] = useState<ImageData[] | null>(null);
  const userName = 'John Doe';
  const folder = 'employee';
  const [hovered, setHovered] = useState(false); // State to track hover

  const fetchProfileImage = async () => {
    const folderRef = ref(storage, folder);
    try {
      const res = await listAll(folderRef);
      const fetchedImages: ImageData[] = [];
      for (const itemRef of res.items) {
        const downloadURL = await getDownloadURL(itemRef);
        fetchedImages.push({
          url: downloadURL,
          folder: folder,
          id: itemRef.name,
        });
      }
      setImages(fetchedImages);
      const userImage = fetchedImages.find((img: ImageData) => img.folder === 'employee' && img.id === 'profile');
      if (userImage) {
        setProfileImage(userImage.url);
        setImageId(userImage.id);
      }
    } catch (error) {
      console.error(`Error retrieving images: ${error}`);
    }
  };

  useEffect(() => {
    fetchProfileImage();
  }, []);

  const handleImageDelete = () => {
    setProfileImage(null);
    setImageId(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Account Information</h2>
      <p>User Name: {userName}</p>

      {/* Display profile image or placeholder */}
      <div
        style={{
          position: 'relative',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={profileImage || defaultProfileImage}
          alt="Profile"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        {hovered && !profileImage && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <ImageUploader employeeID="profile" />
          </div>
        )}
      </div>

      {/* Image Upload/Update/Remove options */}
      <div>
        {profileImage ? (
          <>
            <UpdateImage folder={folder} id={imageId!} onUpdate={() => window.location.reload()} />
            <DeleteImage folder={folder} id={imageId!} onDelete={handleImageDelete} />
          </>
        ) : (
          <p>No profile image uploaded</p>
        )}
      </div>
    </div>
  );
}
