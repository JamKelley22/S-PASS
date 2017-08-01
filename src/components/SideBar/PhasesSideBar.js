import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem, Panel, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import './SideBar.css'

export default class ProjectSideBar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      phase: [
        {name: '1. Requirements', link: '/Phases/PhaseOne', open: true},
        {name: '2. New Modules', link: '/Phases/PhaseTwo', open: false},
        {name: '3. Selection', link: '/Phases/PhaseThree', open: false}
      ]
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleDropdown(i) {
    var ph = this.state.phase[i];
    ph.open = !ph.open;
    this.forceUpdate();
  }

  handleClick(i) {
    this.toggleDropdown(i);
  }

  render(){

    return(

      <div className='sidebar'>
        <div id='green'>
            <h3 id='center' id='brownText'>
            <Link to={'/SPASS/About'}>
              <i id='brownText' className="fa fa-arrow-left"/>
            </Link>
            Phases</h3>
        </div>

        <div className='sideContent'>
        {this.state.phase.map((currElement, index) => {
          var i = index;
          var ph = this.state.phase[i];
          if(ph.open) {
            return(
              <div>
                <div id='ford' onClick={() => this.handleClick(i)}>
                  <div id='tab'>{ph.name} <i className="fa fa-angle-down"/></div>
                </div>
                <LinkContainer to={ph.link+'/Input'}>
                  <div id='tabS'>Input</div>
                </LinkContainer>

                <LinkContainer to={ph.link+'/Output'}>
                  <div id='tabS'>Output</div>
                </LinkContainer>
              </div>
            )
          }
          else{
            return(
              <div id='ford' onClick={() => this.handleClick(i)}>
                <div id='tab'>{ph.name} <i className="fa fa-angle-right"/></div>
              </div>
            )
          }
        })}

        </div>
      </div>
    );
  }
}
