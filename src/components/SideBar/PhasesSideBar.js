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
        {name: 'Phase 1', link: '/Phases/PhaseOne', open: true},
        {name: 'Phase 2', link: '/Phases/PhaseTwo', open: false},
        {name: 'Phase 3', link: '/Phases/PhaseThree', open: false}
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
            Case Study</h3>
        </div>

        <div className='sideContent'>

        {this.state.phase.map((currElement, index) => {
          var i = index;
          var ph = this.state.phase[i];
          if(ph.open) {
            return(

              <div>
                <div id='ford' onClick={() => this.handleClick(i)}>
                  <div id='tab' disabled>{ph.name} <i className="fa fa-angle-down"/></div>
                </div>

                <LinkContainer to={ph.link+'/Input'}>
                  <div tabIndex="0" id='tabS'>Input</div>
                </LinkContainer>

                <LinkContainer to={ph.link+'/Output'}>
                  <div tabIndex="0" id='tabS'>Output</div>
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
