import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import './client.css'

import { BrowserRouter as Router} from 'react-router-dom';

//Connects react entry
import App from "./components/App";
import store from "./store";
import { browserHistory, routes } from 'react-router'

//Connects to index.html
const app = document.getElementById('app')

//Connects store and Layout to render.
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
      <App className='app'/>
    </Router>
  </Provider>,app);
