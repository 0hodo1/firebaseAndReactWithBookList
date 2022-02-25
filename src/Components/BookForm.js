import { useState } from "react";

import { db } from "../Firebase/config";
import { collection, addDoc } from "firebase/firestore";

import { useAuthContext } from "../Hooks/useAuthContext";

function BookForm() {
  const [newBook, setNewBook] = useState("");

  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(newBook);
    const ref = collection(db, "books");

    await addDoc(ref, {
      title: newBook,
      uid: user.uid,
    });

    setNewBook("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add New Book</span>
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}

export default BookForm;
