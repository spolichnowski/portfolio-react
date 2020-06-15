import React from "react";
import "./style.css";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaMailBulk, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="info">
        <h1>Contact me!</h1>
        <div className="icons">
          <div className="icon">
            <a href="https://www.linkedin.com/in/stanislaw-polichnowski-337b27168/">
              <FaLinkedin />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.instagram.com/code.with.stan">
              <FaInstagram />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/stachu.polichnowski">
              <FaFacebookSquare />
            </a>
          </div>
          <div className="icon">
            <a href="mailto: stachpolichnowski@gmail.com">
              <FaMailBulk />
            </a>
          </div>
          <div className="icon">
            <a href="mailto: stachpolichnowski@gmail.com">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="photoBG"></div>
    </div>
  );
};

export default Contact;
