import React from "react";
import "./AboutUs.css";

import bgImage from "../assets/ABOUT image/apj copy.png";

import kalamImg from "../assets/ABOUT image/Apj.png";
import educationImg from "../assets/ABOUT image/Education.png";
import scienceImg from "../assets/ABOUT image/Science.png";
import ruralDevImg from "../assets/ABOUT image/ruraldevelopment.png";
import policyImg from "../assets/ABOUT image/Policy.png";
import ruralHealthImg from "../assets/ABOUT image/Ruralhealth.png";
import youthImg from "../assets/ABOUT image/youth.png";

const AboutUs = () => {
  return (
    <>
      {/* HERO SECTION */}

      <section className="about-hero">

        <img
          src={bgImage}
          alt="APJ Abdul Kalam"
          className="hero-img"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>WHO WE ARE</h1>

          <p>
            Dr APJ Abdul Kalam Research Foundation popularly known as
            “Kalam Foundation” is a Trust, registered under Indian Trust Act,
            1882 inspired by Former President, Bharat Ratna Dr. APJ Abdul Kalam,
            dedicated to the integrated & sustainable development of India
            according Dr.Kalam’s dream through the intervention of science,
            engineering and technology.
          </p>

        </div>

        <div className="particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </section>

      {/* MISSION / VISION */}

      <section className="mission-vision">

        <div className="mv-container">

          <div className="mv-column">

            <h2>MISSION:</h2>

            <ul>

              <li>
               To develop a unique platform which can facilitate idea and resource sharing between the different stakeholders of the society (e.g., institutions, students, corporates, individuals, government agencies, social organizations etc.) for ensuring coordinated effort to maximize the outcome.
               
              </li>

              <li>
                To create a world where young people are encouraged to celebrate fun and excitement of science and technology, and inspiring them to meet the challenges of the global, technology-driven society through innovation, collaboration, and creative problem solving.

              </li>

              <li>
               Realize potential for national and international leadership as a knowledge based agent of change in the fields of Science & Technology, energy, education, health, environment, and other natural resources and sustainable development.

              </li>

              <li>
                Inspire and reach out to diverse stakeholders for realizing a shared vision of global sustainable development could be translated into action.

              </li>

            </ul>

          </div>

          <div className="mv-column">

            <h2>VISION:</h2>

            <ul>

              <li>
             To provide expertise and assistance to rural community in building their capacity to reduce poverty, tackle environmental problem and promote sustainable agriculture, rural prosperity assure and responsibility for their health and pursuer education through science and technological applications.
             
              </li>

              <li>
              To popularize the science and the scientific temperament among the masses.  
              </li>

              <li>
                To aid in rural reconstruction and development.
              </li>

              <li>
               To coordinate in the establishment and development of education in the areas of the Science Journalism, Science writing and Science communication. To aid in development and management of local resources.

              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* DR APJ ABDUL KALAM SECTION */}

      <section className="kalam-section">

        {/* LEFT */}

        <div className="kalam-left">

          <img
            src={kalamImg}
            alt="Dr APJ Abdul Kalam"
            className="kalam-img"
          />

          <div className="kalam-box">

            <h2>DR APJ ABDUL KALAM</h2>

            <p>
           “It’s when children are 15, 16 or 17 that they decide whether they want to be a doctor, an engineer, a politician or go to the Mars or moon. That is the time they start having a dream and that’s the time you can work on them. You can help them shape their dreams. Tomorrow if I address a group of youngsters and talk about the flag flying in my heart and how I will uphold the dignity of the nation, I can get them to dream. But if I talk to people who are 40, 50 or 70 plus, it will not go down that well. Also, the youth have fewer biases about their society as compared to the grown-ups.”

            </p>

            <span>
              –Dr. APJ Abdul Kalam at Idea Exchange, 2009
            </span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="kalam-right">

          <div className="kalam-item">
            <img src={educationImg} alt="Education" />
            <p>Education</p>
          </div>

          <div className="kalam-item">
            <img src={scienceImg} alt="Science" />
            <p>Science & Innovation</p>
          </div>

          <div className="kalam-item">
            <img src={ruralDevImg} alt="Rural Development" />
            <p>Rural Development</p>
          </div>

          <div className="kalam-item">
            <img src={policyImg} alt="Policy" />
            <p>Policy & Research</p>
          </div>

          <div className="kalam-item">
            <img src={ruralHealthImg} alt="Healthcare" />
            <p>Rural Healthcare</p>
          </div>

          <div className="kalam-item">
            <img src={youthImg} alt="Youth" />
            <p>Youth & Leadership</p>
          </div>

        </div>

      </section>

    </>
  );
};

export default AboutUs;