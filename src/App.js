import React, { useState } from "react";
import "./App.css";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import { GoPerson } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

function App() {
  const [state, setState] = useState({
    main: true,
    about: false,
    portfolio: false,
    contact: false,
  });

  const operatePlate = n => {
    switch (n) {
      case 0:
        setState(prevState => ({ ...prevState, about: false, contact: false, portfolio: false }));
        setTimeout(() => setState(prevState => ({ ...prevState, main: !state.main })), 500);
        break;
      case 1:
        setState(prevState => ({ ...prevState, main: false, contact: false, portfolio: false }));
        setTimeout(() => setState(prevState => ({ ...prevState, about: !state.about })), 500);
        break;
      case 2:
        setState(prevState => ({ ...prevState, main: false, about: false, portfolio: false }));
        setTimeout(() => setState(prevState => ({ ...prevState, contact: !state.contact })), 500);
        break;
      case 3:
        setState(prevState => ({ ...prevState, main: false, about: false, contact: false }));
        setTimeout(
          () => setState(prevState => ({ ...prevState, portfolio: !state.portfolio })),
          500
        );
        break;
      default:
        setState({ main: false, about: false, portfolio: false, contact: false });
        break;
    }
  };

  return (
    <div className="flexbox">
      <div className="grid-container">
        <div className={"plate " + (state.main ? "open" : "hide")}>
          <Main />
        </div>
        <div className={"plate " + (state.about ? "open" : "hide")}>
          <About />
        </div>
        <div className={"plate " + (state.contact ? "open" : "hide")}>
          <Contact />
        </div>
      </div>
      <nav className="grid-nav">
        <button className={state.main ? "focus" : ""} onClick={() => operatePlate(0)}>
          <div className="item">
            <AiFillHome />
          </div>
        </button>

        <button className={state.about ? "focus" : ""} onClick={() => operatePlate(1)}>
          <div className="item">
            <GoPerson />
          </div>
        </button>

        <button className={state.portfolio ? "focus" : ""} onClick={() => operatePlate(3)}>
          <div className="item">
            <FaBookOpen />
          </div>
        </button>
        <button className={state.contact ? "focus" : ""} onClick={() => operatePlate(2)}>
          <div className="item">
            <IoMdMail />
          </div>
        </button>
      </nav>

      <div className={"portfolio-container " + (state.portfolio ? "visible" : "notVisible")}>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
