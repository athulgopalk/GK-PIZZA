import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to GK Pizza, your go-to destination for delicious, freshly baked pizzas delivered right to your doorstep. At GK Pizza, we believe that great food brings people
         together, and there's nothing quite like the joy of sharing a piping hot pizza with friends and family.
        </p>
      </div>
    </div>
  );
}

export default About;
