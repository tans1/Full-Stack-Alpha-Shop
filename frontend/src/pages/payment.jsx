import React, { useState, useEffect } from "react";
import "./style.css";
import paypalImage from "../assets/paypal.jpg";
import chapaImage from "../assets/chapa-1.png";

import { Payment_options } from "../components/styles/payment.style";

import { useSelector } from "react-redux";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function PaymentOptionPage() {
  const [chapa, setChapa] = useState(false);
  const [paypal, setPaypal] = useState(false);

  const navigate = useNavigate();
  const totalPrice = useSelector((state) => state.cart).amount;

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/isLogged", { withCredentials: true })
      .then((res) => {
        if (!res.data) {
          navigate("/auth");
        }
      });
  }, []);

  function formatPriceWithCommas(number) {
    const formattedNumber = parseFloat(number.toFixed(2)).toString();
    const parts = formattedNumber.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  const handlePayment = async () => {
    if (chapa === true) {
      const amount = totalPrice * 60;
      window.location.href =
        await `http://localhost:5000/payment/chapa/pay?amount=${amount}`;
    } else if (paypal === true) {
      const amount = totalPrice;
      window.location.href =
        await `http://localhost:5000/payment/paypal/pay?amount=${amount}`;
    }
  };

  return (
    <Payment_options>
      <div className="paypal_option_container">
        <div className="paypal_image_container">
          <img src={paypalImage} alt="" />
        </div>
        <p>{formatPriceWithCommas(totalPrice)} $</p>
        <div className="payment_button">
          <button
            onClick={() => {
              setPaypal(true);
              handlePayment();
            }}>
            pay
          </button>
        </div>
      </div>
      <div className="chapa_option_container">
        <div className="chapa_image_container">
          <img src={chapaImage} alt="" />
        </div>
        <p>{formatPriceWithCommas(totalPrice * 60)} Birr</p>
        <div className="payment_button">
          <button
            onClick={() => {
              setChapa(true);
              handlePayment();
            }}>
            pay
          </button>
        </div>
      </div>
    </Payment_options>
  );
}

export default PaymentOptionPage;
