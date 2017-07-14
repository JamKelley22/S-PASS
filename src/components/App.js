import React from 'react';
import Layout from './Layout.js';
import {Link,Route} from 'react-router-dom';
import MasashiRouter from './MasashiTest/MasashiTest.js';
import {Button} from 'react-bootstrap';

const App = () => (
  <div>
  <ul>
    <Link to="/Layout">
      <Button bsStyle="info">Layout</Button>
    </Link>
    <Link to="/MasashiRouter">
      <Button bsStyle="primary">Masashi Test</Button>
    </Link>
  </ul>
    <Route path="/Layout" component={Layout}/>
    <Route path="/MasashiRouter" component={MasashiRouter}/>
  </div>
)

export default App
