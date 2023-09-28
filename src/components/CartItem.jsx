// CartItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeItem } from "../utils/cartSlice";

const CartItem = ({ id, image, title, qty, price }) => {
  const dispatch = useDispatch();
  const change_quantity = (id, qty) => {
    dispatch(changeQuantity({ id, qty }));
  };

  const remove = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <div className="quantity-controls">
          <button
            onClick={() => {
              change_quantity(id, qty - 1);
            }}
          >
            -
          </button>
          <span>{qty}</span>
          <button
            onClick={() => {
              change_quantity(id, qty + 1);
            }}
          >
            +
          </button>
        </div>
        <button className="remove-button" onClick={() => remove(id)}>
          Remove
        </button>
      </div>
      <div className="total-price">Total: ${price * qty}</div>
    </div>
  );
};

export default CartItem;
