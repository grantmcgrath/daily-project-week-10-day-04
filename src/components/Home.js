import React, {Component} from "react";

import img from "../images/home.png"

export default class Home extends Component {
  render() {
    return (
      <div className="home bgc">
        <h2>Home</h2>
        <img src={img} alt="Home" className="homeimg"/>
      </div>
    )
  }
}
