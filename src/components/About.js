import React, {Component} from "react";

import img from "../images/about-me.jpg";
import img2 from "../images/bacon.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>About</h2>
        <img src={img} alt="" className="aboutmeimg"/>
        <p>I really like bacon.</p>
        <img src={img2} alt="Bacon!" className="aboutmeimg"/>
      </div>
    )
  }
}
