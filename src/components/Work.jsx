import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Work.css";

/* IMAGE IMPORTS */

import treeImg from "../assets/Work-Image-Temp/Tree-Planation.png";
import childrenImg from "../assets/Work-Image-Temp/children.png";
import personImg from "../assets/Work-Image-Temp/person.png";

const workData = [
  {
    id: 1,
    title: "Tree Plantation Drive",
    description:
      "Together, we can root hope and resilience into the heart of our environment.",
    image: treeImg,
    icon: "🌱"
  },
  {
    id: 2,
    title: "Kalam Education Fund",
    description:
      "Fund is dedicated to supporting the education of children who are often left behind.",
    image: childrenImg,
    icon: "📚"
  },
  {
    id: 3,
    title: "Sponsor a Person with Disabilities",
    description:
      "You can build an inclusive society where every person has the opportunity to succeed.",
    image: personImg,
    icon: "♿"
  }
];

const Work = () => {
  const [activeCard, setActiveCard] = useState(null);

  const navigate = useNavigate();

  const handleClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  // FINAL navigation function
  const handleDonateClick = (e) => {
    e.stopPropagation();
    navigate("/DonateForm");
  };

  return (
    <div className="work-section">
      <h2 className="work-title">Become a Change-Maker</h2>

      <div className="work-grid">
        {workData.map((item) => (
          <div
            key={item.id}
            className="work-card"
            onClick={() => handleClick(item.id)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="work-image"
            />

            {/* Overlay */}
            <div
              className={`overlay ${
                activeCard === item.id ? "active" : ""
              }`}
            >
              <div className="overlay-content">
                <div className="icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button
                  type="button"
                  className="donate-btn"
                  onClick={handleDonateClick}
                >
                  Donate Now
                </button>
              </div>
            </div>

            {/* Card Content */}
            <div className="card-content">
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button
                type="button"
                className="donate-btn"
                onClick={handleDonateClick}
              >
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;