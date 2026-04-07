import "./Navbar.css";
import { useState } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaSearch,
  FaInstagram,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="navbar">

      {/* LEFT LOGO */}

      <div className="navbar-left">
        <h2 className="logo-text">
          <span className="saffron">Ka</span>
          <span className="white">lam Foun</span>
          <span className="green">dation</span>
        </h2>
      </div>

      {/* HAMBURGER ICON */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* CENTER MENU */}

      <div className={menuOpen ? "navbar-center active" : "navbar-center"}>

        <a href="/webMail">WebMail</a>
        <a href="/headOffice">Head Office</a>
        <a href="/Zonal">Zonal Offices</a>
        <span>#Hridaan Festival</span>
        <span>Meri Panchayat</span>

      </div>

      {/* RIGHT SOCIAL ICONS */}

      <div className="navbar-right">

        <a href="https://www.facebook.com/kalamfoundationindia" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>

        <a href="https://x.com/KRFOfficial" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>

        <a href="https://www.linkedin.com/in/kalamfoundation" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>

        <a href="https://www.youtube.com/channel/UCbLRO9vwvIIa8B2f9xydJlQ" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>

        <a href="https://www.instagram.com/kalam.foundation" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

        <FaSearch />

      </div>

    </div>

  );

}

export default Navbar;