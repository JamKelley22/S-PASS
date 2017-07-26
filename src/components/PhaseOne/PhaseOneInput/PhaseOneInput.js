import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button,Image,Grid,Row,Col,Modal,Popover} from 'react-bootstrap';
import NameForm from '../../submit/NameForm.js';
import MatrixDisplay from '../../Matrix/Matrix.js';
import '../../Matrix/Matrix.css';
import ListStuff from '../../ListStuff/ListStuff.js';
import './PhaseOneInput.css';

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
      <div>

      <Modal show={this.state.showModal} onHide={this.hideHelp}>
        <Help/>
        <Modal.Footer>
          <Button onClick={this.hideHelp}>Close</Button>
        </Modal.Footer>
      </Modal>

        <p id='fLeft'>Product 1: Quad-copter</p><p id='fRight'>Edit <i className="fa fa-edit"/></p>
        <Image id='dashImage' src={require('../../../Images/drone1.png')} alt='Quad-copter'/>
        <p id='fLeft'>Product 1: Quad-copter</p><p id='fRight'>Edit <i className="fa fa-edit"/></p>
        <Image id='dashImage' src={require('../../../Images/drone2.jpg')} alt='Hexa-copter'/>

        <h3>Step 1: Enter product details</h3>
        Please enter all functions (eg. Recharging battery)
        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
          <i className="fa fa-search" id='pad'/>
        </div>
        <ListStuff
          list={this.props.functions}
          title="Functions"
          removeList={this.props.removeFunction}
          addList={this.props.addFunction}
          addMatRow={this.props.addRowFMMat}
        />

        Please enter all modules (eg. knob) and indicate whether they are used in each product (Used or Not Used).
        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
          <i className="fa fa-search" id='pad'/>
        </div>
        <ListStuff
          list={this.props.requirements}
          title="Requirements"
          removeList={this.props.removeRequirement}
          addList={this.props.addRequirement}
          addMatRow={this.props.addRowRFMat}
          removeMatRow={this.props.removeRowRFMat}
        />

        Please enter all requirements (eg. Use of renewable energy)
        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
          <i className="fa fa-search" id='pad'/>
        </div>

        <ListStuff
          list={this.props.modules}
          title="Modules"
          removeList={this.props.removeModule}
          addList={this.props.addModule}
          addMatRow={this.props.addRowMAMat}
        />

        <h3>Step 2: Product Contribution Estimation</h3>
        Please estimate to what extent each product functio_n contributes to achieve each enviromental sustainability requirement.
        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
          <i className="fa fa-search" id='pad'/>
        </div>
        <MatrixDisplay
          title = "Requirements vs. Functions"
          matrixContent={this.props.requirementFunctionMatrix._data}
          colNames={this.props.functions}
          rowNames={this.props.requirements}
        />

        <MatrixDisplay
          title = "Functions vs. Modules"
          matrixContent={this.props.functionModuleMatrix._data}
          colNames={this.props.modules}
          rowNames={this.props.functions}
        />

        <MatrixDisplay
          title = "Modules vs. Product Architecture"
          matrixContent={this.props.moduleArchitectureMatrix._data}
          colNames={this.props.productArchitecture}
          rowNames={this.props.modules}
        />
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
