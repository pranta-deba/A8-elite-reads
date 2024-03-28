import { NavLink } from "react-router-dom";
import { IoMdStarOutline } from "react-icons/io";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <NavLink
      to={`/book_details/${bookId}`}
      className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800"
    >
      <div>
        <figure className="flex flex-col justify-center items-center py-4 bg-green-50 rounded-2xl">
          <img
            src={image}
            alt={bookName}
            className="max-w-[134px] max-h-[166px] mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
        </figure>
        <p className="flex gap-4 my-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-green-50 rounded-2xl py-1 px-3 text-green-400 text-base font-bold"
            >
              {tag}
            </span>
          ))}
        </p>
        <h2 className="mb-1 text-xl font-semibold playfair my-3 h-[30px] overflow-auto scrollBar">{bookName}</h2>
        <p className="text-sm dark:text-gray-600">By : {author}</p>
      </div>
      <hr />
      <div className="flex flex-wrap justify-between">
        <button
          aria-label="Share this post"
          type="button"
          className="p-2 text-center"
        >
          {category}
        </button>
        <button type="button" className="flex items-center p-1 space-x-1.5">
          {rating} <IoMdStarOutline className="text-xl" />
        </button>
      </div>
    </NavLink>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};
export default Book;
