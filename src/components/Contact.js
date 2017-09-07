import React, {Component} from "react";

import "../styles/App.css";

// import github from "../images/icons/github.png";
// import facebook from "../images/icons/facebook.png";
// import linkedin from "../images/icons/linkedin.png";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div>
          <p>Phone Number: 919-612-0679</p>
          <p>Email: grantmcgrath@me.com</p>
          <p>Social Links</p>
        </div>
        <div className="social_link">
          <p><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
          <p><a href="www.linkedin.com" target="_blank">Linkedin</a></p>
          <p><a href="www.github.com" target="_blank">GitHub</a></p>
        </div>
      </div>
    )
  }
}
