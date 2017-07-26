import {Switch, Route} from 'react-router-dom';
import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';

import './Breadcrumbs.css';

const Breadcrumbs = () => (
  <Breadcrumb id='breadcrumbs'>
      <Breadcrumb.Item >
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item >
        Dashboard
      </Breadcrumb.Item>
      <Breadcrumb.Item >
        Projects
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Phases
      </Breadcrumb.Item>
    </Breadcrumb>
)

export default Breadcrumbs;
