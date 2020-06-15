import React from "react";
import "./style.css";
import video from "../../media/video.mp4";

const Main = () => {
  return (
    <div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="main">
        <h1>STANISLAW POLICHNOWSKI</h1>
      </div>
    </div>
  );
};

export default Main;
