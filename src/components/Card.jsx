import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = (obj) => {
    dispatch(addItems(obj));
  };
  return (
    <div className="card-image-container">
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-price">${item.price}</p>
        <button
          className="add-to-cart-button"
          onClick={() => {
            handleAdd({ ...item, qty: 1 });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
