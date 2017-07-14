import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import { BrowserRouter as Router} from 'react-router-dom';

//Connects react entry
import App from "./components/App";
import Layout from "./components/Layout"
import store from "./store";

//Connects to index.html
const app = document.getElementById('app')

//Connects store and Layout to render.
ReactDOM.render(
  <Provider store={store}>
    <Router >
      <App/>
    </Router>
  </Provider>,app);
