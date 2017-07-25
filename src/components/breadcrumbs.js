import {Switch, Route} from 'react-router-dom';
import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';

import './Breadcrumbs.css';

const Breadcrumbs = () => (
  <Breadcrumb id='breadcrumbs'>
      <Breadcrumb.Item href="#">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Data
      </Breadcrumb.Item>
    </Breadcrumb>
)

export default Breadcrumbs;
