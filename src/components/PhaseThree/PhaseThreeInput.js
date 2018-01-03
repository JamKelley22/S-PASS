import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button,Image,Grid,Row,Col,Modal,Popover} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import NameForm from '../submit/NameForm.js';
import MatrixDisplay from '../Matrix/Matrix.js';
import SumDisplay from '../Matrix/SumDisplay.js';
import Test from '../Matrix/Test.js';
import './PhaseThree.css';
import ListStuff from '../ListStuff/ListStuff.js';


const tooltip = (
  <Tooltip id="tooltip"><strong>Your Name</strong></Tooltip>
);

export default class PhaseOneInput extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  this.handleRemove = this.handleRemove.bind(this);
  this.showHelp = this.showHelp.bind(this);
  this.hideHelp = this.hideHelp.bind(this);
}
  handleRemove(index){
    //console.log('HERE: '+index);
    return this.props.remove(index)
  }

  showHelp() {
    this.setState({showModal: true});
  }

  hideHelp() {
    this.setState({showModal: false});
  }

  createListItems(input) {
    if(input){
    return input.map((functions,index) => {
      return(
        <ListGroupItem key={functions} href="#link1">
          {functions}{index}
          <Button
            bsStyle="danger"
            bsSize="xsmall"
            className="btn pull-right"
            onClick={()=> this.handleRemove(index)}
          >
            delete
          </Button>
        </ListGroupItem>
      );
    });
    }
  }

  render(){
    return(

      <div className='scroll' id='scroll'>


      <Modal show={this.state.showModal} onHide={this.hideHelp}>
        <Help/>
        <Modal.Footer>
          <Button onClick={this.hideHelp}>Close</Button>
        </Modal.Footer>
      </Modal>

      <h1 className='clearfix'>Phase 3: Product Architecture and Supplier Selection</h1>
      <div className="divLine"></div>

      <p className='clearfix'>
      Please fill out the white area of each matrix.
      </p>
      <p className='clearfix'>
      <b>Q1) Please estimate how well each product module satisfies each product function.</b>
      </p>
      <p className='clearfix'>
      Note: Use satisfaction level 1 (poor)-5 (excellent)
      </p>

{/*
        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
          <i className="fa fa-search" id='pad'/>
        </div>
*/}


        <div id='matrixRow'>
          <div id='matrixDisplay'>
            <MatrixDisplay
              title = "Function–Module Matrix"
              matrixContent={this.props.functionAltModuleMatrix._data}
              colNames={this.props.acceptedAlternates}
              rowNames={this.props.functions}
              editCell={this.props.editCellFaMMat}
              bgColor={'rgba(210,210,177,0.6)'}
              canEditCells={true}//Must Specify that cells in the matrix are editable, else they are not
              numberType='#' // | bin | % | # |
              editType='dropDown'// | dropDown | input |
              dropDownChoices={[
                ['1',''],
                ['2',''],
                ['3',''],
                ['4',''],
                ['5','']
              ]}
            />
          </div>

        </div>
        <div className="divLine"></div>

<p className='clearfix'>
<b>Q2) Please identify each module's supplier</b>
</p>
<p className='clearfix'>
Note: 1(related, 0(notrelated)
</p>


        <div id='matrixRow'>
          <div id='matrixDisplay'>
            <MatrixDisplay
              title = "Supplier–Module Matrix"
              matrixContent={this.props.supplierAltModuleMatrix._data}
              colNames={this.props.acceptedAlternates}
              rowNames={this.props.acceptedSuppliers}
              editCell={this.props.editCellSaMMat}
              bgColor={'rgba(210,210,177,0.6)'}
              canEditCells={true}
              numberType='#' // | bin | % | # |
              editType='input'// | dropDown | input |
              dropDownChoices={null}
            />
          </div>
        </div>
        <div className="divLine"></div>

        <p className='clearfix'>
        <b>Q3) Please define each architecture with modules.</b>
        </p>
        <p className='clearfix'>
        Note: 1 (related), 0 (not related)
        </p>

        <MatrixDisplay
          title = "Module–Product Architecture Matrix"
          matrixContent={this.props.moduleProductArchitecture._data}
          colNames={this.props.newArchitectureList}
          rowNames={this.props.acceptedAlternates}
          editCell={this.props.editCellMPAMat}
          bgColor={'rgba(210,210,177,0.6)'}
          canEditCells={true}
          numberType='bin' // | bin | % | # |
          editType='dropDown'// | dropDown | input |
          dropDownChoices={[
            ['0',''],
            ['1','']
          ]}
        />

        <div id='lowerButtons'>
          <LinkContainer to='/Phases/PhaseTwo/Output'>
            <Button id='backBtn'><i id='chevronLeft' className="fa fa-chevron-left"/>Back</Button>
          </LinkContainer>
          <LinkContainer to='/Phases/PhaseThree/Output'>
            <Button style={{float: 'right'}} id='continueBtn'>Continue<i id='chevronRight' className="fa fa-chevron-right"/></Button>
          </LinkContainer>
        </div>
      </div>
    );
  }
}

const Help = ({match}) =>(
  <div>
    <Modal.Header closeButton>
      <Modal.Title>Phase Help</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <h4>Popover in a modal</h4>
        <p>there is a <OverlayTrigger overlay={
          <Popover
            id="popover-basic"
            placement="right"
            positionLeft={200}
            positionTop={50}
            title="Popover right"
            >
            This is a Popover
          </Popover>
        }><a href="#">popover</a></OverlayTrigger>
           here
        </p>
    </Modal.Body>
  </div>
)
