import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [amount, setTotalamount] = useState(0);
  const user = useSelector((store) => store.user);
  const total_item = useSelector((store) => store.cart.items);
  //   console.log(amount);

  useEffect(() => {
    const subTotal = total_item.reduce((acc, item) => {
      acc = acc + item.qty * Number(item.price) * 0.8;
      return acc;
    }, 0);
    setTotalamount(subTotal.toFixed(2));
  }, [total_item]);

  const [formData, setFormData] = useState({
    address: "",
    cardNumber: "",
    cvv: "",
    totalPrice: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.address) {
      alert("Please fill the form properly");
      return;
    }

    if (!formData.cardNumber) {
      alert("Please fill the form properly");
      return;
    }

    if (!formData.cvv) {
      alert("Please fill the form properly");
      return;
    }

    if (!formData.totalPrice || formData.totalPrice !== amount) {
      alert(`You need to pay $${amount}`);
      return;
    }

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      address: "",
      cardNumber: "",
      cvv: "",
      totalPrice: 0,
    });
  };
  return (
    <div>
      <Header />

      <div className="checkout-page">
        <h4>
          Dear {user?.displayName} you have to pay only ${amount} after 20%
          discount to all products
        </h4>
        <form onSubmit={handleSubmit}>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Total Price:
            <input
              type="number"
              name="totalPrice"
              value={formData.totalPrice}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <CheckoutModal isOpen={isModalOpen} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};

const CheckoutModal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Thank You for Your Purchase!</h2>
        <p>Your order has been placed successfully.</p>
      </div>
    </div>
  );
};

export default Checkout;
