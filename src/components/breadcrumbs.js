import {Switch, Route} from 'react-router-dom';
import {Breadcrumb,LinkContainer} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';

import './Breadcrumbs.css';

const Breadcrumbs = () => (
  <Breadcrumb id='breadcrumbs'>
      <Breadcrumb.Item >
      <Link to={'/'}>
        Home
      </Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item >
      <Link to={'/Dashboard'}>
        Dashboard
      </Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item >
      <Link to={'/Project'}>
        Projects
      </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Phases
      </Breadcrumb.Item>
    </Breadcrumb>
)

export default Breadcrumbs;
