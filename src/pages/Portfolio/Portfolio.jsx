import React from "react";
import "./style.css";
import { FaGithub } from "react-icons/fa";

const Portfolio = ({ show }) => {
  return (
    <div className={show ? "portfolio show" : "hide-portfolio"}>
      <div className="project pizzachef">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/spolichnowski/pizzachef">
          <div>
            <FaGithub />
          </div>
        </a>
      </div>
      <div className="project ligno">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/spolichnowski/LignoDesign">
          <h2>Ligno Design</h2>
          <div>
            <FaGithub />
          </div>
        </a>
      </div>
      <div className="project portfolio-page">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/spolichnowski/portfolio-react">
          <h2>Portfolio</h2>
          <div>
            <FaGithub />
          </div>
        </a>
      </div>
      <div className="project task-manager">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/spolichnowski/task_manager">
          <h2>Task Manager</h2>
          <div>
            <FaGithub />
          </div>
        </a>
      </div>
      <div className="project pigeon-invasion">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/spolichnowski/rock_paper_scissors">
          <h2>Rock Paper Scissors</h2>
          <div>
            <FaGithub />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
