import React from 'react';
import {Link,Route} from 'react-router-dom';
import {Image,Glyphicon,ProgressBar} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';

import './SPASS.css';

class DashSPASS extends React.Component{
  render(){
    return(
      <div id='SPASS'>

        <h3><i className="fa fa-leaf"/>S-PASS</h3>

        <div id='phase'>
          <p id='bold'>Phase 1: Requirements</p>
          <div id='phaseContent'>
            <div id='phaseText'>
            Requirements: {this.props.requirements.length}<br/>
            Functions: {this.props.functions.length}<br/>
            Modules: {this.props.modules.length}<br/>
            </div>
          </div>
          <ProgressBar bsStyle="success" id='pbar' now={60} />
        </div>

        <div id='phase'>
          <p id='bold'>Phase 2: New Modules</p>
          <div id='phaseContent'>
            <i className="fa fa-bar-chart" id='phaseGlyph'/>
          </div>
          <ProgressBar bsStyle="success" id='pbar' now={90} />
        </div>

        <div id='phase'>
          <p id='bold'>Phase 3: Selection</p>
          <div id='phaseContent'>
            <i className="fa fa-pie-chart" id='phaseGlyph'/>
          </div>
          <ProgressBar bsStyle="success" id='pbar' now={10} />
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    functions: state.functionList,
    modules:state.moduleList,
    requirements:state.requirementList,
  };
}

export default connect(mapStateToProps)(DashSPASS);
