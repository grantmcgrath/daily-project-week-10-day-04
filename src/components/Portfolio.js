import React, {Component} from "react";

import img from "../images/portfolio.png";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <img src={img} alt="Portfolio!" className="portfolioimg" />
        <p>This is were some amazing content would go if I had some amazing content.</p>
      </div>
    )
  }
}
