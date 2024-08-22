import{
    collection,
    deleteDoc,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    onSnapshot,
    setDoc,
    updateDoc
} from "firebase/firestore";
import {db} from "./firebase"

const generateRandomID = () => {
    const characters =
        "ABCDEFGGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01233456789";
    let randomID = "";

    for (let i =0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomID += characters.charAt(randomIndex);
    }
    return randomID;
}

export const createData = async (collectionName: string, data: object): Promise<string | undefined> => {
  const id = generateRandomID();
  try {
    const docRef = doc(db, collectionName, id);
    await setDoc(docRef, {
      id,
      ...data
    });
    return id
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const readData = async (collection:string , id:string) => {
    try {
      const docRef = doc(db, collection, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("document data:", docSnap.data());
        return docSnap.data();
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error reading document: ", error);
    }
}

export const updateData = async (collection:string, id:string, data:object)  => {
    try {
      const docRef = doc(db, collection, id);
      await updateDoc(docRef, {
        id: id,
        ...data,
      });
  
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  export const deleteData = async (collectionName: string, id: string): Promise<void> => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };


