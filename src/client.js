import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import { BrowserRouter as Router} from 'react-router-dom';

//Connects react entry
import App from "./components/App";
import Layout from "./components/Layout"
import store from "./store";
import { browserHistory, routes } from 'react-router'

//Connects to index.html
const app = document.getElementById('app')

//Connects store and Layout to render.
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
      <App/>
    </Router>
  </Provider>,app);
