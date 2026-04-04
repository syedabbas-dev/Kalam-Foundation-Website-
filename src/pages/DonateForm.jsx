import React, { useState } from "react";
import "./DonateForm.css";

import upiImg from "../assets/Donate images/upi.png";
import razorImg from "../assets/Donate images/Razor.png";

function DonateForm() {
  const [amount, setAmount] = useState("");

  return (
    <div className="donate-container">

      {/* LEFT SIDE CONTENT */}

      <div className="donate-left">

        <h2 className="foundation-title">
          Dr APJ Abdul Kalam Research Foundation
        </h2>

        <h1 className="main-title">
          Support Street Children
        </h1>

        <div className="blue-line"></div>

        <p>
          Every child deserves a chance to dream, learn, and grow in a safe and
          nurturing environment. Unfortunately, many street children face daily
          struggles, from lack of food and shelter to limited access to
          education and healthcare.
        </p>

        <p>
          By contributing to our cause, you help provide these children with the
          support they need to build a better future.
        </p>

        <ul>
          <li>Providing essential food and clothing.</li>
          <li>Offering shelter and a safe space for learning.</li>
          <li>Giving access to education, healthcare, and life skills.</li>
          <li>Creating opportunities for a brighter future.</li>
        </ul>

        <p>
          Together, we can break the cycle of poverty and give these children a
          chance to thrive.
        </p>

        <p className="donate-highlight">
          Donate now and help us bring hope to the lives of street children.
        </p>

        {/* SHARE */}

        <div className="share-section">

          <p>Share this on:</p>

          <div className="share-icons">
            <span className="icon fb">f</span>
            <span className="icon x">x</span>
            <span className="icon wa">wa</span>
          </div>

        </div>

        {/* CONTACT */}

        <div className="contact-section">

          <h4>Contact Us:</h4>

          <p>info@kalamfoundation.org</p>

          <p>9198431217</p>

        </div>

        {/* TERMS */}

        <div className="terms-section">

          <h4>Terms & Conditions:</h4>

          <p>
            You agree to share information entered on this page with
            Dr APJ Abdul Kalam Research Foundation and Razorpay,
            adhering to applicable laws.
          </p>

        </div>

        <img
          src={razorImg}
          alt="Razorpay"
          className="razor-logo"
        />

      </div>

      {/* RIGHT SIDE FORM */}

      <div className="donate-right">

        <h2>Payment Details</h2>

        <div className="blue-line"></div>

        <form>

          <label>
            Name *
            <input type="text" required />
          </label>

          <label>
            Gender
            <select>
              <option>--Select--</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>

          <label>
            DOB
            <input type="date" />
          </label>

          <label>
            Address
            <textarea rows="2"></textarea>
          </label>

          <label>
            Email *
            <input type="email" required />
          </label>

          <label>
            Phone *
            <div className="phone-box">
              <span>IN +91</span>
              <input type="text" required />
            </div>
          </label>

          <label>
            Amount *
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>

          {/* PAYMENT FOOTER */}

          <div className="payment-footer">

            <img
              src={upiImg}
              alt="UPI"
              className="upi-logo"
            />

            <button className="pay-btn">
              Pay ₹ {amount || "0.00"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default DonateForm;