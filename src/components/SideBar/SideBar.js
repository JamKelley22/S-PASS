import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem, Panel, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Save from '../Save.js';
import './SideBar.css'

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

const SideBar = ({match}) =>(


  <div className='sidebar'>
    <div id='green'>

      <Link to={'/Home'}>
        <h3 id='center' id='brownText'>
        <i id='brownText' className="fa fa-arrow-left"/>
        Home</h3>
      </Link>

    </div>

    <div className='sideContent'>

      <LinkContainer to={'/Phases/PhaseOne/Input'}>
        <div id='tab'><i className="fa fa-calendar"/> Phases</div>
      </LinkContainer>


      <Save style={style}/>
    </div>
  </div>
)

export default SideBar;
