import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";

const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = password.length >= 8;

  if (!isEmailValid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid,It must be 8 char long";

  return null;
};

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  console.log(loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const message = checkValidData(email.current.value, password.current.value);
    if (message) {
      alert(message);
      return;
    }

    // sign in or sign up logic

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          // console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUsers({ uid: uid, email: email, displayName: displayName })
              );

              navigate("/home");
              // ...
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="form-container">
      <h3 className="login-signup-form">
        {" "}
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h3>
      <form onSubmit={handleSubmit}>
        {!isSignInForm && (
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="ABC GHOSH"
              ref={name}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            placeholder="anc@gmail.com"
            ref={email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            placeholder="Abc@456789"
            ref={password}
            required
          />
        </div>
        <div>
          {isSignInForm && (
            <p className="login-form-p">
              {!isSignInForm ? "Sign In to continue " : "New to our website? "}

              <span className="login-form-span" onClick={toggleSignInForm}>
                {" "}
                {isSignInForm ? "Sign Up" : "Sign In"}
              </span>
            </p>
          )}
        </div>
        <button className="form-button" type="submit">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
