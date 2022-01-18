import React from "react";

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          porro reiciendis exercitationem consequatur iste nobis aliquam, harum
          animi non maiores eos dicta omnis pariatur corporis ad ab, saepe
          deleniti nihil!
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
