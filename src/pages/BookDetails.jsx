import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLoadData from "../Hooks/useLoadData";
import { setRead, setWishlist } from "../utils/localStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner/Spinner";

const BookDetails = () => {
  const [singleBook, setSingleBook] = useState({});
  const { bookId } = useParams();
  const { data , loaderSpinner} = useLoadData();

  useEffect(() => {
    if (data) {
      const matchedBook = data.find((item) => item.bookId == bookId);
      setSingleBook(matchedBook);
    }
  }, [data, bookId]);

  const {
    image,
    bookName,
    author,
    category,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
    review,
    tags,
  } = singleBook || {};

  const handleRead = (id) => {
    setRead(parseInt(id));
  };
  const handWishlist = (id) => {
    setWishlist(parseInt(id));
  };

  if (loaderSpinner) {
    return <Spinner></Spinner>
  }
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8">
        <figure className="bg-green-50 p-3 lg:p-12 flex justify-center rounded-2xl">
          <img
            src={image}
            alt={bookName}
            className="md:max-w-[435px] md:max-h-[564px] object-cover rounded-2xl"
          />
        </figure>
        <div className="space-y-4">
          <h1 className="playfair text-5xl font-bold">{bookName}</h1>
          <p className="text-xl font-medium">By : {author}</p>
          <hr />
          <p className="text-xl font-medium">{category}</p>
          <hr />
          <p className="text-base">
            <span className="font-bold">Review : </span>
            <span className="font-medium text-slate-500">{review}</span>
          </p>
          <p>
            <span className="font-bold">Tag </span>
            <span className="bg-green-50 rounded-2xl py-1 px-3 text-green-400 text-base font-bold">
              #{tags}
            </span>
          </p>
          <p className="text-base">
            <span className="font-normal text-slate-500">
              Number of Pages:{" "}
            </span>
            <span className="font-semibold">{totalPages}</span>
          </p>
          <p className="text-base">
            <span className="font-normal text-slate-500">Publisher: </span>
            <span className="font-semibold">{publisher}</span>
          </p>
          <p className="text-base">
            <span className="font-normal text-slate-500">
              Year of Publishing:{" "}
            </span>
            <span className="font-semibold">{yearOfPublishing}</span>
          </p>
          <p className="text-base">
            <span className="font-normal text-slate-500">Rating: </span>
            <span className="font-semibold">{rating}</span>
          </p>
          <div className="flex gap-6">
            <a
              onClick={() => handleRead(bookId)}
              className="relative rounded px-5 py-2.5 overflow-hidden group text-black hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 border-2 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 cursor-pointer text-lg font-semibold"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Read</span>
            </a>
            <a
              onClick={() => handWishlist(bookId)}
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-black hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 cursor-pointer text-lg font-semibold"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Wishlist</span>
            </a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </section>
  );
};

export default BookDetails;
