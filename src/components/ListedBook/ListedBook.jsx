import { CiLocationOn } from "react-icons/ci";
import { FaUserShield } from "react-icons/fa";
import { LuBookOpenCheck } from "react-icons/lu";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ListedBook = ({ book }) => {
  const {
    bookId,
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex flex-col md:flex-row gap-6 border-2 p-5 rounded-2xl">
      <figure className="md:max-w-[230px] md:max-h-[230px] bg-green-50 px-10 py-6 rounded-2xl">
        <img src={image} alt="" className="h-full w-full" />
      </figure>
      <div className="flex-auto">
        <h1 className="text-2xl font-bold playfair mb-4">{bookName}</h1>
        <p className="text-base font-medium text-slate-500 mb-4">
          By : {author}
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
          <div className="flex items-center gap-4">
            <p className="text-base font-bold">Tag</p>
            {tags.map((tag) => (
              <p
                key={tag}
                className="bg-green-50 rounded-2xl py-1 px-3 text-green-400 text-base font-bold"
              >
                #{tag}
              </p>
            ))}
          </div>
          <p className="flex items-center gap-1">
            <CiLocationOn /> Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex items-center gap-6 mb-4">
          <p className="flex items-center gap-1">
            <FaUserShield /> Publisher: {publisher}
          </p>
          <p className="flex items-center gap-1">
            <LuBookOpenCheck /> Page {totalPages}
          </p>
        </div>
        <hr />
        <div className="mt-4 flex gap-2 flex-wrap">
          <a className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm cursor-pointer">
            Category: {category}
          </a>
          <a className="px-5 py-2.5 font-medium bg-red-50 hover:bg-red-100 hover:text-red-600 text-red-500 rounded-lg text-sm cursor-pointer">
            Rating: {rating}
          </a>
          <NavLink
            to={`/book_details/${bookId}`}
            className="px-5 py-2.5 font-medium bg-green-50 hover:bg-blue-100 hover:text-green-600 text-green-500 rounded-lg text-sm cursor-pointer"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

ListedBook.propTypes = {
  book: PropTypes.object.isRequired,
};
export default ListedBook;
