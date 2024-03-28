import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import Bio from "../pages/Bio";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import BookDetails from "../pages/BookDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Contact from "../pages/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/listed_books",
            element: <ListedBooks/>,
        },
        {
            path: "/pages_to_read",
            element: <PagesToRead/>,
        },
        {
            path: "/bio",
            element: <Bio/>,
        },
        {
            path: "/sign_in",
            element: <SignIn/>,
        },
        {
            path: "/sign_up",
            element: <SignUp/>,
        },
        {
            path: "/book_details/:bookId",
            loader: ()=> fetch('/data.json'),
            element: <BookDetails/>,
        },
        {
            path: "/contact",
            element: <Contact/>,
        },
    ]
  },
]);
