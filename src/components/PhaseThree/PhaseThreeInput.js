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

      <div className='scroll'>


      <Modal show={this.state.showModal} onHide={this.hideHelp}>
        <Help/>
        <Modal.Footer>
          <Button onClick={this.hideHelp}>Close</Button>
        </Modal.Footer>
      </Modal>

      <h1>Selection Input</h1>

        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
          <i className="fa fa-search" id='pad'/>
        </div>
<p>
<b>Below: </b>Use satisfaction level 1(poor)-5(excellent). note that at least one(current or alternative) module for each module type of the defined number of module types should b eincluded in the first row.
</p>
<p>
Estimate how well each product module satisfies each product function. Base this on your own assumptions and the information provided. The functional satisfaction levels of the existing modules should be the same as those that you input for Phase 1. Any and all empty remaining cells should be “0”.
</p>

        <div id='matrixRow'>
          <div id='matrixDisplay'>
            <MatrixDisplay
              title = "Functions vs. Modules"
              matrixContent={this.props.functionAltModuleMatrix._data}
              colNames={this.props.acceptedAlternates}
              rowNames={this.props.functions}
              editCell={this.props.editCellFaMMat}
              bgColor={'#9DC64D'}
              canEditCells={true}//Must Specify that cells in the matrix are editable, else they are not
              numberType='%' // | bin | % | # |
              editType='dropDown'// | dropDown | input |
              dropDownChoices={[
                ['0','Imposible to contribute'],
                ['10','Nearly impossible to contribute'],
                ['20','Very unlikely to contribute'],
                ['30','Quite unlikely to contribute'],
                ['40','Possible to contribute'],
                ['50','Even chance to contribute'],
                ['60','Better than even chance to contribute'],
                ['70','Quite likely to contribute'],
                ['80','Very likely to contribute'],
                ['90','Nearly certain to contribute'],
                ['100','Certain to contribute']
              ]}
            />
          </div>

        </div>

<p>
<b>Below: </b>Identify each module’s supplier. Use 1 (related), 0 (not related). All remaining empty cells should be “0”.
</p>


        <div id='matrixRow'>
          <div id='matrixDisplay'>
            <MatrixDisplay
              title = "Supplier vs. Modules"
              matrixContent={this.props.functionModuleMatrix._data}
              colNames={this.props.acceptedAlternates}
              rowNames={this.props.acceptedSuppliers}
              editCell={this.props.editCellFMMat}
              bgColor={'#9DC64D'}
              canEditCells={true}
              numberType='#' // | bin | % | # |
              editType='input'// | dropDown | input |
              dropDownChoices={null}
            />
          </div>
        </div>

        <p>
        <b>Below: </b>Define each architecture with modules. Related or not related. Note that all required component types for each drone type, described in Table 1, should be configured in its product architecture through the identified modules. Define three product architectures by combining relevant modules. Each product architecture should represent a product and have different combination of the considered modules.
        </p>

        <MatrixDisplay
          title = "Modules vs. Product Architecture"
          matrixContent={this.props.moduleArchitectureMatrix._data}
          colNames={this.props.newArchitectureList}
          rowNames={this.props.modules}
          editCell={this.props.editCellMAMat}
          bgColor={'#9DC64D'}
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
            <Button id='backBtn'>Back</Button>
          </LinkContainer>
          <LinkContainer to='/Phases/PhaseThree/Output'>
            <Button style={{float: 'right'}} id='continueBtn'>Continue</Button>
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
