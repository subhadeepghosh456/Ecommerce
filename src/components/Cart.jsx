import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [amount, setTotalamount] = useState(0);
  const total_data = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);

  const handleClick = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    const subTotal = total_data.reduce((acc, item) => {
      acc = acc + item.qty * Number(item.price);
      return acc;
    }, 0);
    setTotalamount(subTotal);
  }, [total_data]);

  if (total_data.length === 0) {
    return (
      <div>
        <Header />
        <h1>Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="cart-container">
        {total_data?.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <p>Total Price${amount.toFixed(2)}</p>
      {total_data.length && (
        <div className="check-out-btn-container">
          <button className="check-out-btn" onClick={handleClick}>
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
