import React from "react";
import "./About.css";
import goalsImage from "../assets/goals.png";
import kalamImage from "../assets/About-kalam.png";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/aboutus");
  };

  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-text">
          <h2 className="about-heading">
            About Kalam Foundation
          </h2>

          <p>
            Dr APJ Abdul Kalam Research Foundation popularly known as “Kalam Foundation” is a Trust, registered under Indian Trust Act, 1882 inspired by of Former President, Bharat Ratna Dr. APJ Abdul Kalam, dedicated to the integrated & sustainable development of India according Dr.Kalam’s dream through the intervention of science, engineering and technology. Kalam Foundation today has 15 state units and a few overseas units as well. Eminent scientists, academicians, policy makers, and social workers are the torch bearers of the vision of Dr. APJ Abdul Kalam.
          </p>

          <p>
            The foundation works across multiple states...
          </p>

          <button 
            className="about-btn"
            onClick={handleKnowMore}
          >
            Know More
          </button>

        </div>

        <div className="about-image">
          <img
            src={kalamImage}
            alt="Dr APJ Abdul Kalam"
          />
        </div>

      </div>

      <div className="goals-wrapper">
        <img
          src={goalsImage}
          alt="Goals"
        />
      </div>

    </section>
  );
};

export default About;