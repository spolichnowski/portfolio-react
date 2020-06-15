import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { IoIosContact, IoIosHome, IoIosMail } from "react-icons/io";
import { GiSpellBook } from "react-icons/gi";

const Navigation = () => {
  return (
    <nav className="grid-nav">
      <div className="item">
        <Link to="/">
          <IoIosHome />
        </Link>
      </div>
      <div className="item">
        <Link to="/about">
          <IoIosContact />
        </Link>
      </div>
      <div className="item">
        <Link to="/portfolio">
          <GiSpellBook />
        </Link>
      </div>
      <div className="item">
        <Link to="/contact">
          <IoIosMail />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
