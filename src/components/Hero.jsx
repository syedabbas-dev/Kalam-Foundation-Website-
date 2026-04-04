import "./Hero.css";
import { useState } from "react";

import img1 from "../assets/Adopt-Village.png";
import img2 from "../assets/Tree-Plantation.png";
import img3 from "../assets/imgtwo.png";
import img4 from "../assets/imgthree.png";

function Hero() {
  const images = [img1, img2, img3, img4];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      {/* TEXT ONLY ON TREE IMAGE */}

      {current === 1 && (
        <div className="hero-content">
          <h1>Join Tree Plantation Drive</h1>

          <p>
            Your generous donations can make a transformative difference
            in our community and the environment.
          </p>

          <h3>
            JOIN US IN NURTURING OUR PLANET BY DONATING TODAY.
          </h3>

          <button>DONATE NOW</button>
        </div>
      )}

      <div className="arrow left" onClick={prevSlide}>
        ❮
      </div>

      <div className="arrow right" onClick={nextSlide}>
        ❯
      </div>
    </div>
  );
}

export default Hero;