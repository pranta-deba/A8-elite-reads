import {Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer.jsx/Footer";
import { UserContext } from "../Hooks/useUserContext";
import { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";

const Root = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser(null);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <UserContext.Provider value={{ user,handleGoogleLogin, handleGithubLogin,handleSignOut }}>
      <div>
        <nav className="h-[79.2px] bg-white">
          <Navbar />
        </nav>
        <div className="min-h-[calc(100vh-352px)] max-w-[1240px] w-[90%] mx-auto my-2">
          <Outlet />
        </div>
        <hr />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default Root;
