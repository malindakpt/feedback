import React, { useState } from 'react';
import './App.css';
import { StarReview } from './components/StarReview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createData, deleteData } from './services/crudService';
import { Collection } from './Enums/collections.enum';
import ImageUploader from './components/ImageUploader';

function App() {
  const [data, setData] = useState({
    name: "manjitha",
    age: 24,
    email: "manjitha@gmail.com"
  });

  const [id, setId] = useState("");

  const handleRatingChange = (value: number | null) => {
    console.log(`Rating changed to: ${value}`);
  };

  const handleCreateData = async () => {
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
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/starreview" element={<StarReview onRatingChange={handleRatingChange} />} />
          <Route path="/upload" element={<ImageUploader />} />
        </Routes>
      </BrowserRouter>
      <button onClick={handleCreateData}>Create Data in FireStore</button>
      <button onClick={handleDeleteData} disabled={!id}>Delete Data in FireStore</button>
    </div>
  );
}

export default App;