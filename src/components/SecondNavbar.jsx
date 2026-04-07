import "./SecondNavbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SecondNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="secondary-navbar">
      
     
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Menu */}
      <div className={`menu ${menuOpen ? "active" : ""}`}>
        
        <div className="dropdown">
          <span>About Us ▾</span>
          <div className="dropdown-menu">

            <Link to="/aboutus" className="dropdown-link">
              About Us
            </Link>

            <p>Vision Document</p>
          </div>
        </div>

        <div className="dropdown">
          <span>Thematic Pillars ▾</span>
          <div className="dropdown-menu">
            <p>Education & Skill Development</p>
            <p>Healthcare & Well-being</p>
            <p>Science & Technology</p>
            <p>Capacity Building & Leadership Development</p>
            <p>Environment & Climate Change</p>
            <p>Good Governance & Public Policy</p>
          </div>
        </div>

        <span>Membership Registration</span>

        <span>SDG</span>

        <span>Award</span>

        <div className="dropdown">
          <span>Resource Center ▾</span>
          <div className="dropdown-menu">
            <p>Books of Dr Abdul Kalam</p>
            <p>Dr. Kalam’s Oaths</p>
            <p>Books</p>
          </div>
        </div>

        <div className="dropdown">
          <span>Get Involved ▾</span>
          <div className="dropdown-menu">
            <p>Donate</p>
            <p>Volunteer</p>
            <p>Internship</p>
            <p>Start a Chapter</p>
            <p>Adopt A Village</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SecondNavbar;