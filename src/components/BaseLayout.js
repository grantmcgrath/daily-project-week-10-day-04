import React, {Component} from "react";

import {Link} from "react-router-dom";

import '../styles/index.css';


export default class BaseLayout extends Component {
  render() {
    return (
      <div className="baselayout bgc">
        <nav>
          <div className="link"><Link to="/">SplashPage</Link></div>
          <div className="link"><Link to="/Home">Home</Link></div>
          <div className="link"><Link to="/About">About</Link></div>
          <div className="link"><Link to="/Portfolio">Portfolio</Link></div>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
