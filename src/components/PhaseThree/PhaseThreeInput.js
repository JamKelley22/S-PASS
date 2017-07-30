import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button,Image,Grid,Row,Col,Modal,Popover} from 'react-bootstrap';
import NameForm from '../submit/NameForm.js';
import MatrixDisplay from '../Matrix/Matrix.js';
import SumDisplay from '../Matrix/SumDisplay.js';
import Test from '../Matrix/Test.js';
import '../Matrix/Matrix.css';
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

      <div id='scroll'>

      <Modal show={this.state.showModal} onHide={this.hideHelp}>
        <Help/>
        <Modal.Footer>
          <Button onClick={this.hideHelp}>Close</Button>
        </Modal.Footer>
      </Modal>

        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
          <i className="fa fa-search" id='pad'/>
        </div>

        <div id='matrixRow'>
          <div id='matrixDisplay'>
            <MatrixDisplay
              title = "Functions vs.Modules"
              matrixContent={this.props.requirementFunctionMatrix._data}
              colNames={this.props.functions}
              rowNames={this.props.requirements}
              editCell={this.props.editCellRFMat}
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

        <div id='matrixRow'>
          <div id='matrixDisplay'>
            <MatrixDisplay
              title = "Supplier vs. Modules"
              matrixContent={this.props.functionModuleMatrix._data}
              colNames={this.props.modules}
              rowNames={this.props.functions}
              editCell={this.props.editCellFMMat}
              bgColor={'#9DC64D'}
              canEditCells={true}
              numberType='#' // | bin | % | # |
              editType='input'// | dropDown | input |
              dropDownChoices={null}
            />
          </div>

        </div>


        <MatrixDisplay
          title = "Modules vs. Product Architecture"
          matrixContent={this.props.moduleArchitectureMatrix._data}
          colNames={this.props.productArchitecture}
          rowNames={this.props.modules}
          editCell={this.props.editCellMAMat}
          bgColor={'#9DC64D'}
          canEditCells={false}
          numberType='bin' // | bin | % | # |
          editType='dropDown'// | dropDown | input |
          dropDownChoices={null}
        />

        <div id='lowerButtons'>
          <Button>Back</Button>
          <Button>Continue</Button>
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