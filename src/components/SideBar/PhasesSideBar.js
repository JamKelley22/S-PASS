import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem, Panel, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Save from '../Save.js';
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

    const style = {
      backgroundColor: "#A2B427",
    color: "rgba(0,0,0,0.6)",
    fontFamily: "'museo-sans', sans-serif",
    fontWeight: "700",
    fontSize: "11",
    padding: "6px 12px",
    borderRadius: "3px",
    boxShadow: "0 1px 10px 0 rgba(0,0,0,0.2), 0 2px 12px 0 rgba(0,0,0,0.19)",
    marginLeft: "none",
    marginTop: "10px",
    border: "none",
    textDecoration: "none",
    textAlign:"center",
    width: "50%",
    display: "block",
    verticalAlign: "bottom",
    marginTop: "10%",
    marginLeft:"25%"
    }

    return(

      <div className='sidebar'>
        <div id='green'>

            <Link to={'/SPASS/About'}>
            <h3 id='center' id='brownText'>
              <i id='brownText' className="fa fa-arrow-left"/>
                          Case Study</h3>
            </Link>

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
        <Save style={style}/>
      </div>
    );
  }
}
