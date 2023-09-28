import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { clearCart } from "../utils/cartSlice";

const Header = () => {
  const total_data = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(clearCart());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Header component", error);
      });
  };
  return (
    <div className="header">
      <div className="header-left">
        <span>
          {" "}
          <Link to="/home">eCom</Link>{" "}
        </span>
      </div>
      <div className="header-right">
        <div className="cart-item-header">
          <span>
            <Link to="/cart">Cart</Link>
          </span>
          <span>{total_data.length}</span>
          <span className="logout-btn" onClick={handleSignOut}>
            LogOut
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
