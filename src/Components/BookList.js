import { db } from "../Firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

function BookList({ books }) {
  const handldeClick = async (id) => {
    // console.log(id);

    const ref = doc(db, "books", id);

    await deleteDoc(ref);
  };
  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handldeClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
