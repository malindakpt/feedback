import React, { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../services/firebase';
import UpdateImage from './updateImage';
import DeleteImage from './deleteImage';

interface ImageData {
  url: string;
  folder: string;
  id: string;
}

const RetrieveImages: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(false);

  const fetchImages = async () => {
    const folders = ['branch', 'company', 'employee'];
    const fetchedImages: ImageData[] = [];

    for (const folder of folders) {
      const folderRef = ref(storage, folder);
      try {
        const res = await listAll(folderRef);
        for (const itemRef of res.items) {
          const downloadURL = await getDownloadURL(itemRef);
          fetchedImages.push({
            url: downloadURL,
            folder: folder,
            id: itemRef.name,
          });
        }
      } catch (error) {
        console.error(`Error retrieving images from folder ${folder}:`, error);
      }
    }

    setImages(fetchedImages);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };



  return (
    <div style={{ padding: '20px' }}>
      <h2>Uploaded Images</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {images.map((image, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
              <img src={image.url} alt={image.id} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ marginTop: '10px' }}>
                <p><strong>Category:</strong> {image.folder.charAt(0).toUpperCase() + image.folder.slice(1)}</p>
                <p><strong>Image ID:</strong> {image.id}</p>
                <div style={{ marginTop: '10px' }}>
                  <UpdateImage folder={image.folder} id={image.id} onUpdate={handleRefresh} />
                  <DeleteImage folder={image.folder} id={image.id} onDelete={handleRefresh} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RetrieveImages;
