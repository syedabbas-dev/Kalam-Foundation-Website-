import React from "react";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Social + Newsletter */}
      <div className="footer-top">
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
          <FaInstagram />
        </div>

        <div className="newsletter">
          <span className="newsletter-title">
            BECOME A MEMBER <span>Contribute to the present to build a better future.
Help us create a New Bharat.</span>
          </span>


          <button className="newsletter-btn">Apply Now </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-column">
          <h3>ABOUT KALAM <br /> FOUNDATION</h3>

          <div className="contact-section">
        

            <p>
              Kalam Foundation is a Trust, <br /> Registered under Indian Trust Act <br />1882 inspired by the life of our <br /> beloved Former President, Bharat <br /> Ratna Dr. APJ Abdul Kalam.

            </p>

          </div>
        </div>

        <div className="footer-column">
          <div className="contact-section">
            <h4>Major Initiatives</h4>

            <p>
             Adopt A Village
            </p>

            <p>
             Meri Panchayat
            </p>

            <p>
            Kalam Leadership Academy
            </p>

            <p>
            Kalam Youth Summit
            </p>

            <p>
               Green Volunteer
            </p>
          </div>
        </div>

        <div className="footer-column">
            <h4>Get Involved</h4>

          <ul>
            <li>Internship</li>
            <li>Volunteer</li>                                 
            <li>Donate</li>
            <li>Membership</li>
            <li>Start a Chapter</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Keep In Touch</h4>
          <ul>
            <li>Plot No. 26, Jain Road, Mohan Garden, Dwarka Mod, New Delhi, 110059</li>
            <li>Mob: 9651000733 / 7860054413 / 9198431217</li>
            <li>info@kalamfoundation.org
            www.kalamfoundation.org</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
       
        <span> About us </span> |
        <span> Contact us </span> |
        <span>Career</span> |
        <span>Privacy Policy</span> -
        Copyright 2020 © Kalam Foundation
      </div>

      {/* Scroll to top button */}
      <div className="scroll-top">↑</div>
    </footer>
  );
};

export default Footer;