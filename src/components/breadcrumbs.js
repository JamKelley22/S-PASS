import {Switch, Route} from 'react-router-dom';
import {Breadcrumb,LinkContainer} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';

import './Breadcrumbs.css';

export default class Breadcrumbs extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    var arr = this.props.crumbs;
    if (typeof arr == 'undefined') {
      arr = [
        ['Home','/'],
        ['Phases', '/Phases']
      ]

    }

    return(
      <Breadcrumb id='breadcrumbs'>
      {arr.map((el, indexI) => {
        var link = arr[indexI][1];
        var name = arr[indexI][0];
        if(indexI < arr.length - 1) {
          return(
              <Breadcrumb.Item >
              <Link to={link}>
                {name}
              </Link>
              </Breadcrumb.Item>
          );
        }
        else {
          return(
            <Breadcrumb.Item active>
              {name}
            </Breadcrumb.Item>
          );
        }
      })}
      </Breadcrumb>
    );
  }

}

  {/*
  <Breadcrumb id='breadcrumbs'>
      <Breadcrumb.Item >
      <Link to={'/'}>
        Home
      </Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item >
      <Link to={'/Dashboard'}>
        Project
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

export default Breadcrumbs;*/}
