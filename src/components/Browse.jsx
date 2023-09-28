import React, { useEffect } from "react";
import Home from "./Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties

        const { uid, email, displayName } = user;
        dispatch(
          addUsers({ uid: uid, email: email, displayName: displayName })
        );
        navigate("/home");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUsers());
        navigate("/");
      }
    });
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Browse;
