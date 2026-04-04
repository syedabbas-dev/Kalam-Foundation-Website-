import React, { useState, useEffect } from "react";
import "./People.css";

import arif from "../assets/people image/arif.png";
import cs from "../assets/people image/Dr-CS-Png.jpg";
import rmm from "../assets/people image/Prof-RMM.png";
import ram from "../assets/people image/ram-dheeraj-png.jpg";

const peopleData = [
  {
    img: arif,
    quote:
      "Kalam Foundation efforts to bring backward sections into the mainstream of rural India is commendable. I am fully supported to this program ",
    name: "Dr. Mohammad Arif",
    role: "Former Addnl Director, DRDO",
  },
  {
    img: cs,
    quote:
      "The efforts of Kalam Foundation to promote the participation of youth in local self government and the leadership development program in the Panchayats is very commendable.",
    name: "Dr. C.S. Pran",
    role: "Ex Director, NYKS",
  },
  {
    img: rmm,
    quote:
      "For the holistic developments of the youth, Kalam Foundation has been organizing Kalam Youth Summit every year to encourage scientific activities and innovation in the fields of rural development and technology. I wish them all the best.",
    name: "Prof Radhey Mohan Mishra",
    role: "Former Vice Chancellor",
  },
  {
    img: ram,
    quote:
      "India is an agrarian country; the initiative of the Kalam Foundation to provide employment in the villages is appreciable. It's trying to fulfill Mahatma Gandhi's dream of Gram Swaraj.",
      name: "Ram Dheeraj Bhai",
    role: "Founder, Azadi Bachao Andolan",
  },
];

const People = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === peopleData.length - 1 ? 0 : prev + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setActiveIndex((prev) =>
      prev === peopleData.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? peopleData.length - 1 : prev - 1
    );
  };

  return (
    <section className="voices-section">
      <h2 className="voices-heading">Voices</h2>

      <div className="carousel">

        <button className="arrow" onClick={prev}>
          ❮
        </button>

        <div className="images-row">
          {peopleData.map((person, index) => (
            <img
              key={index}
              src={person.img}
              alt={person.name}
              className={
                index === activeIndex
                  ? "person-img active"
                  : "person-img"
              }
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <button className="arrow" onClick={next}>
          ❯
        </button>
      </div>

      <div className="quote-box">
        <p className="quote">
          "{peopleData[activeIndex].quote}"
        </p>

        <h3 className="name">
          — {peopleData[activeIndex].name}
        </h3>

        <p className="role">
          {peopleData[activeIndex].role}
        </p>
      </div>

<div className="dots">
  {peopleData.map((_, index) => (
    <span
      key={index}
      className={
        index === activeIndex ? "dot active-dot" : "dot"
      }
      onClick={() => setActiveIndex(index)}
    />
  ))}
</div>
      
    </section>
    
  );
};

export default People;