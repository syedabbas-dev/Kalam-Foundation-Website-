import React from "react";
import "./Donate.css";

import upiImg from "../assets/Donate images/upi.png";
import razorImg from "../assets/Donate images/Razor.png";

const Donate = () => {
  return (
    <div className="donate-page">
      {/* Background Shape */}
      <div className="donate-bg"></div>

      {/* Card */}
      <div className="donate-card">
        <div className="donate-logo">D</div>

        <p className="donate-paying">Paying</p>

        <h2 className="donate-title">
          Dr APJ Abdul Kalam Research Foundation
        </h2>

        <p className="donate-link">
          razorpay.me/@kalamfoundation
        </p>

        <h1 className="donate-amount">₹0</h1>

        <input
          type="text"
          placeholder="Add a note"
          className="donate-input"
        />

        <button className="donate-btn">
          Pay ₹0
        </button>

        {/* Payment Images */}
        <div className="donate-images">
          <img src={upiImg} alt="UPI" />
          <img src={razorImg} alt="Razorpay" />
        </div>
      </div>
    </div>
  );
};

export default Donate;