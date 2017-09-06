// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/index.css';
import "./styles/App.css";

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch, } from "react-router-dom";

// Import Components
import App from "./components/App";
import About from "./components/About";
import BaseLayout from "./components/BaseLayout";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import References from "./components/References";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/references" component={References} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
