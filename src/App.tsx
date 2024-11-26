import React, { useState } from 'react';
import './App.css';
import { StarReview } from './components/rating/StarReview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createData, deleteData } from './services/crudService';
import { Collection } from './Enums/collections.enum';
import ImageUploader from './components/imageUploader/ImageUploader';
import RetrieveImages from './components/imageUploader/retrieveImage';

function App() {

  const [id, setId] = useState("");

  const handleRatingChange = (value: number | null) => {
    console.log(`Rating changed to: ${value}`);
  };

  /* const handleCreateData = async () => {
    try {
      const id = await createData(Collection.Employee, data);
      if (id) {
        setId(id);
      } else {
        console.log("No ID returned from createData");
      }
      console.log("Document created successfully!");
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  const handleDeleteData = async () => {
    try {
      await deleteData(Collection.Employee, id);
      setId("");
      console.log("Document deleted successfully!");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  }; */

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/starreview" element={<StarReview onRatingChange={handleRatingChange} />} />
          <Route path="/upload" element={<ImageUploader />} />
          <Route path="/imageview" element={<RetrieveImages />} />
        </Routes>
      </BrowserRouter>
      {/* <button onClick={handleCreateData}>Create Data in FireStore</button>
      <button onClick={handleDeleteData} disabled={!id}>Delete Data in FireStore</button> */}
    </div>
  );
}

export default App;