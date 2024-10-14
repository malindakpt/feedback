import {
    collection,
    deleteDoc,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    WithFieldValue,
    PartialWithFieldValue,
  } from "firebase/firestore";
  import { db } from "./auth/firebase";
  import { Collection } from "../enums/collections.enum";
  
  export const createEntity = async <T extends DocumentData>(
    collectionName: Collection,
    data: WithFieldValue<T>
  ): Promise<string | undefined> => {
    try {
      const collectionRef = collection(db, collectionName);
      const docRef = await addDoc(collectionRef, data);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  export const readEntity = async <T extends DocumentData>(
    collectionName: Collection,
    id: string
  ): Promise<T | undefined> => {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data() as T;
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error reading document: ", error);
    }
  };
  
  export const updateEntity = async <T extends DocumentData>(
    collectionName: Collection,
    id: string,
    data: PartialWithFieldValue<T>
  ): Promise<void> => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data as WithFieldValue<T>);
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  
  export const deleteEntity = async (
    collectionName: Collection,
    id: string
  ): Promise<void> => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
  
  export const readAllEntity = async <T>(collectionName: string): Promise<T[] | undefined> => {
    try {
      const collectionRef = collection(db, collectionName);
      const snapshot = await getDocs(collectionRef); 
  
      const dataList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as T[];
  
      return dataList;
    } catch (error) {
      console.error("Error reading documents: ", error);
    }
  };