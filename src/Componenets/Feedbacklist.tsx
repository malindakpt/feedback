// FeedbackList.tsx
import React, { useState, useEffect } from "react";
import { firestore } from "../Firebase";
import { collection, getDocs, deleteDoc, doc } from "@firebase/firestore";
import { Feedback } from "./Feedback"; // Import the Feedback interface

export default function FeedbackList() {
    // State to hold feedback data and error messages
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Fetch feedback data from Firestore when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Reference to the Firestore collection
                const feedbackCollection = collection(firestore, "feedback");
                // Fetch all documents from the collection
                const feedbackSnapshot = await getDocs(feedbackCollection);
                // Map Firestore documents to Feedback objects
                const feedbackList = feedbackSnapshot.docs.map(doc => ({
                    id: doc.id,
                    message: doc.data().message,
                })) as Feedback[];
                // Update state with fetched feedbacks
                setFeedbacks(feedbackList);
            } catch (error) {
                console.error("Error fetching feedbacks: ", error);
                setError("Failed to fetch feedbacks."); // Display error message
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once after initial render

    // Delete feedback item by ID
    const handleDelete = async (id: string) => {
        try {
            // Reference to the specific feedback document
            const feedbackDoc = doc(firestore, "feedback", id);
            // Delete the document
            await deleteDoc(feedbackDoc);
            // Remove the deleted feedback from state
            setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
        } catch (error) {
            console.error("Error deleting feedback: ", error);
            setError("Failed to delete feedback."); // Display error message
        }
    };

    return (
        <div>
            <h2>Feedback List</h2>
            {/* Display error message if there's an error */}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {/* Render list of feedbacks */}
                {feedbacks.map(feedback => (
                    <li key={feedback.id}>
                        {feedback.message}
                        <button onClick={() => handleDelete(feedback.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
