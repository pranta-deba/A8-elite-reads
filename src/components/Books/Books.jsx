import { useEffect, useState } from "react";
import useLoadData from "../../Hooks/useLoadData";
import Book from "../Book/Book";
import Spinner from "../Spinner/Spinner";

const Books = () => {
  const { data, loaderSpinner } = useLoadData();
  const [books, setBook] = useState([]);
  const [counter, setCounter] = useState(6);
  useEffect(() => {
    setBook(data);
  }, [data]);

  if (loaderSpinner) {
    return <Spinner></Spinner>
  }
  return (
    <div className="my-5">
      <div>
        <h1 className="text-center text-4xl font-bold playfair">Books</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {books.slice(0, counter).map((book) => (
          <Book key={book.bookName} book={book} />
        ))}
      </div>
      {counter > 6 ? (
        ""
      ) : (
        <div className="flex justify-center my-8">
          <a
            onClick={() => setCounter(books.length)}
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">See all</span>
          </a>
        </div>
      )}
      
    </div>
  );
};

export default Books;
