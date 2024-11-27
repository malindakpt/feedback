import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { FirebaseError } from "firebase/app";

// Upload image function
export const uploadImage = async (folder: string, fileName: string, file: File) => {
  try {
    const storage = getStorage();
    const storageRef = ref(storage, `${folder}/${fileName}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Delete image function
export const deleteImage = async (folder: string, fileName: string) => {
  try {
    const storage = getStorage();
    const imageRef = ref(storage, `${folder}/${fileName}`);
    await deleteObject(imageRef);
  } catch (error) {
    if (error instanceof FirebaseError && error.code === "storage/object-not-found") {
      console.warn("Image not found, skipping deletion");
    } else {
      console.error("Error deleting image:", error);
      throw error;
    }
  }
};

// Retrieve image function
export const retrieveImage = async (folder: string, fileName: string) => {
  try {
    const storage = getStorage();
    const imageRef = ref(storage, `${folder}/${fileName}`);
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error retrieving image:", error);
    throw error;
  }
};

// Update image function: Deletes old image before uploading the new one
export const updateImage = async (folder: string, oldFileName: string, newFileName: string, newFile: File) => {
  try {
    // First delete the old image
    await deleteImage(folder, oldFileName);
    // Then upload the new image
    const newImageUrl = await uploadImage(folder, newFileName, newFile);
    return newImageUrl; // Return the new image URL
  } catch (error) {
    console.error("Error updating image:", error);
    throw error;
  }
};
