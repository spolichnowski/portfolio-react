import React from "react";
import "./style.css";
import { MdLens } from "react-icons/md";

const About = () => {
  return (
    <div className="about">
      <div className="about-me">
        <h3>About me</h3>
        <p>
          I am a young Web Developer looking for a summer job opportunity. I have approximately 3
          years of experience in developing and designing websites. In 2018 I started my higher
          education to become a Bachelor of Computer Games. I have a good experience of working in
          an agile team. My biggest strength is fast adaptation to new technologies and passion that
          I put to every single project. In October I am going back to my university to finish the
          degree, but I will be still happy to work part-time.
        </p>
        <br />
        <hr />
        <br />
        <p></p>
      </div>

      <div className="lang-edu">
        <div className="edu">
          <h3>EDUCATION</h3>
          <p>BSc Computer Games </p>
          <p>2018 – 2021 </p>
          <p>University of Essex,</p>
          <p>Colchester, UK</p>
          <br />
          <hr />
          <br />
          <p>IT Technician</p>
          <p>2014 - 2018</p>
          <p>Technikum Komunikacji,</p>
          <p>Poznan, Poland</p>
        </div>
        <div className="lang">
          <h3>Languages</h3>
          <ul>
            <li>Polish</li>
            <li>English</li>
          </ul>
        </div>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <div className="skills-pos">
          <div className="skill">
            <p>Python</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
            </div>
          </div>

          <div className="skill">
            <p>JavaScript</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
            </div>
          </div>

          <div className="skill">
            <p>GIT</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
            </div>
          </div>

          <div className="skill">
            <p>HTML</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
            </div>
          </div>

          <div className="skill">
            <p>Recat</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
            </div>
          </div>

          <div className="skill">
            <p>Django</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
            </div>
          </div>

          <div className="skill">
            <p>PostgreSQL</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
            </div>
          </div>

          <div className="skill">
            <p>CSS</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
            </div>
          </div>

          <div className="skill">
            <p>Flask</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
