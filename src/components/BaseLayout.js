import React, {Component} from "react";

import {NavLink} from "react-router-dom";

import '../styles/index.css';
import "../styles/App.css";


export default class BaseLayout extends Component {
  render() {
    return (
      <div className="baselayout">
        <nav>
          <div className="link m"><NavLink to="/"><p id="logo" className="m">Grant McGrath</p></NavLink></div>
          <div className="link m"><NavLink to="/Home">Home</NavLink></div>
          <div className="link m"><NavLink to="/About">About</NavLink></div>
          <div className="link m"><NavLink to="/Portfolio">Portfolio</NavLink></div>
          <div className="link m"><NavLink to="/Contact">Contact</NavLink></div>
          <div className="link m"><NavLink to="/References">References</NavLink></div>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
