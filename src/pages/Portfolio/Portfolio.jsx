import React from "react";
import "./style.css";
import { FaGithub } from "react-icons/fa";

const Portfolio = ({ show }) => {
  return (
    <div className={show ? "portfolio show" : "hide"}>
      <div className="project pizzachef">
        <div>
          <a href="https://github.com/spolichnowski/pizzachef">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="project ligno">
        <div>
          <a href="https://github.com/spolichnowski/LignoDesign">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="project pizza-chef-blog">
        <div>
          <a href="https://ppolichnowski.pl">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="project portfolio-page">
        <div>
          <a href="https://github.com/spolichnowski/portfolio-react">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
