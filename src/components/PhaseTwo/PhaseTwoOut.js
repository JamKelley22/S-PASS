import React from 'react';

import {Tabs,Tab,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup} from 'react-bootstrap';
import MSFilterMatrix from '../Matrix/MSFilterMatrix.js';
import ListStuffSimple from '../ListStuffSimple/ListStuffSimple.js';

import SupplierForm from '../submit/SupplierForm.js';
import {addNewSupplier} from '../../actions/supplierListActions.js'
//import {addRequirement,removeRequirement} from '../../actions/requirementListActions.js';

import './PhaseTwoOut.css';

class PhaseTwoOut extends React.Component{
  constructor(props) {
    super(props);
      this.findBools = this.findBools;
  }

  findBools(selected,accepted){
    let results = [];
    for(var i=0;i<selected.length;i++){
      if(accepted.includes(selected[i])){
        results.push(true);
      }
      else{
        results.push(false);
      }
    }
    return results;
  }

  render(){
    return(
      <div  id='scroll'>

<p className='clearfix'>
<h1 >Phase 2: Module and Supplier Filtering (Results)</h1>
</p>
<div className="divLine"></div>

<p className='clearfix'>
1) Filtering Results
</p>
      <div id='msMatrix' className='overlay'>
        <MSFilterMatrix
          title = {'Alternate Module'}
          names = {this.props.selectedAlternates}
          values = {this.findBools(this.props.selectedAlternates,this.props.acceptedAlternates)}
        />
      </div>
      <div id='msMatrix' className='overlay'>
        <MSFilterMatrix
            title = {'Supplier'}
            names = {this.props.selectedSuppliers}
            values = {this.findBools(this.props.selectedSuppliers,this.props.acceptedSuppliers)}
        />
      </div>
      <div className="divLine"></div>

<p className='clearfix'>
2) Final New Module and Supplier List
</p>

      <div id='msMatrix' className='overlay'>

        <h1>Accepted Alternates</h1>
        <ListStuffSimple
            list={this.props.acceptedAlternates}
        />
        <h1>Accepted Suppliers</h1>
        <ListStuffSimple
            list={this.props.acceptedSuppliers}
        />
      </div>

      <div id='lowerButtons'>
        <LinkContainer to='/Phases/PhaseTwo/Input'>
          <Button id='backBtn'><i id='chevronLeft' className="fa fa-chevron-left"/>Back</Button>
        </LinkContainer>
        <LinkContainer to='/Phases/PhaseThree/Input'>
          <Button style={{float: 'right'}} id='continueBtn'>Continue<i id='chevronRight' className="fa fa-chevron-right"/></Button>
        </LinkContainer>
      </div>



      </div>
    );
  }
}

const tooltip = (
  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);

function mapStateToProps(state){
  return{
    selectedAlternates: state.selectedAlternates,
    selectedSuppliers: state.selectedSuppliers,
    acceptedAlternates: state.acceptedAlternates,
    acceptedSuppliers: state.acceptedSuppliers,
  };
}

function matchDispatchToProps(dispatch){//t
  return bindActionCreators({

  },dispatch)
}

export default connect(mapStateToProps)(PhaseTwoOut);
