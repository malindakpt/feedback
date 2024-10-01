import {
    collection,
    deleteDoc,
    doc,
    DocumentData,
    getDocs,
    addDoc,
    updateDoc
  } from "firebase/firestore";
  import { firestore } from "./FirebaseConfig";
  import { Collection } from "../Enums/collections.enums";
  
  export const createData = async (collectionName: Collection, data: object): Promise<string | undefined> => {
    try {
      const collectionRef = collection(firestore, collectionName);
      const docRef = await addDoc(collectionRef, data);
      return docRef.id; // Return the automatically generated ID
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  export const readData = async (collectionName: Collection): Promise<DocumentData[]> => {
    try {
      const collectionRef = collection(firestore, collectionName);
      const querySnapshot = await getDocs(collectionRef);
      const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return documents;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return []; // Return an empty array in case of an error
    }
  };
  
  export const updateData = async (collection: Collection, id: string, data: object): Promise<void> => {
    try {
      const docRef = doc(firestore, collection, id);
      await updateDoc(docRef, {
        id: id,
        ...data,
      });
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  
  export const deleteData = async (collectionName: Collection, id: string): Promise<void> => {
    try {
      const docRef = doc(firestore, collectionName, id);
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
  