import React from "react";
import "./style.css";
import { MdLens } from "react-icons/md";

const About = () => {
  return (
    <div className="about">
      <div className="about-me">
        <div className="align-self-center">
          <h3>About me</h3>
          <p>
          I'm a third-year student of Computer Games. Although games brought me into IT it was always more of a hobby for me. 
          This is my seventh year of Computer Science education! I started with simple computer assembling at the age of 15 and now I'm in the middle of yet the most important project in my life. 
          "An Automated Sign Language Interpreter" my final project at University!
          </p>
          <p>
          I spend more or less four years building websites and web applications with a variety of programming languages (Python, PHP, JavaScript). 
          That includes around 8 months of professional experience (internships and summer jobs).
          Currently, I'm exploring AI and ML world and that is my focus for the next year. The idea of teaching your program on how to behave is just too cool.
          </p>
          <p>
          I'm open to all the offers from Internships to part-time jobs. 
          If you are a student with similar interests send me a message maybe we could build something together.
          </p>
        </div>
      </div>

      <div className="lang-edu">
        <div className="edu">
          <h3>EDUCATION</h3>
          <p>BSc Computer Games</p>
          <p>2018 – Present </p>
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
            <li>Polish Native</li>
            <li>English Fluent</li>
            <li>German Basic</li>
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
              <MdLens className="black-dot" />
            </div>
          </div>

          <div className="skill">
            <p>GIT</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens className="black-dot" />
            </div>
          </div>

          <div className="skill">
            <p>Flask</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
            </div>
          </div>

          <div className="skill">
            <p>Bootstrap</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
            </div>
          </div>

          <div className="skill">
            <p>JavaScript</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
            </div>
          </div>

          <div className="skill">
            <p>React</p>
            <div className="dots">
              <MdLens />
              <MdLens />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
            </div>
          </div>

          <div className="skill">
            <p>OpenCV</p>
            <div className="dots">
              <MdLens />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
            </div>
          </div>

          <div className="skill">
            <p>PostgreSQL</p>
            <div className="dots">
              <MdLens />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
            </div>
          </div>

          <div className="skill">
            <p>Keras</p>
            <div className="dots">
              <MdLens />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
            </div>
          </div>

          <div className="skill">
            <p>Django</p>
            <div className="dots">
              <MdLens />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
              <MdLens className="black-dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
