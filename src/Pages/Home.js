import { useState, useEffect } from "react";
import BookList from "../Components/BookList";
import BookForm from "../Components/BookForm";

import { useAuthContext } from "../Hooks/useAuthContext";

import { useCollection } from "../Hooks/useCollection";

function Home() {
  const { user } = useAuthContext();

  const { documents: books } = useCollection("books", ["uid", "==", user.uid]);

  // const [books, setBooks] = useState(null);

  // useEffect(() => {
  //   const ref = collection(db, "books");

  //   getDocs(ref).then((snap) => {
  //     let result = [];

  //     snap.forEach((doc) => {
  //       result.push({ id: doc.id, ...doc.data() });
  //     });

  //     setBooks(result);
  //   });
  // }, []);

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}

export default Home;
