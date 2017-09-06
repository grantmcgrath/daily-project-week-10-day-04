import React, {Component} from "react";

import "../styles/App.css";

import github from "../images/icons/github.png";
import facebook from "../images/icons/facebook.png";
import linkedin from "../images/icons/linkedin.png";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="contact_main b">
          <p>Hello?!?</p>
        </div>
        <div className="contact_side b">
          <ul>
            <li><a href="www.facebook.com"><img src={facebook} alt="Facebook" className="icons"/></a></li>
            <li><a href="www.linkedin.com"><img src={linkedin} alt="Linkedin" className="icons"/></a></li>
            <li><a href="www.github.com"><img  src={github} alt="GitHub" className="icons"/></a></li>
          </ul>
        </div>
      </div>
    )
  }
}
