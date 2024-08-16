import React, { useRef } from "react";
import { firestore } from "./Firebase";
import { addDoc, collection } from "@firebase/firestore";

export default function Home() {
    const messageRef = useRef<HTMLInputElement>(null);

    // Handle form submission to save new feedback
    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            message: messageRef.current?.value,
        };

        try {
            // Reference to the Firestore collection
            const ref = collection(firestore, "feedback");
            // Add new document to the collection
            await addDoc(ref, data);
        } catch (e) {
            console.log(e); // Log error if saving fails
        }
    };

    return (
        <div>
            <form onSubmit={handleSave}>
                <label>Add Feedback</label>
                <input type="text" ref={messageRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
