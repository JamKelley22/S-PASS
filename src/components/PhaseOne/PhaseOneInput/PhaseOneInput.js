import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button,Image,Grid,Row,Col,Modal,Popover} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import NameForm from '../../submit/NameForm.js';
import MatrixDisplay from '../../Matrix/Matrix.js';
import SumDisplay from '../../Matrix/SumDisplay.js';
import Test from '../../Matrix/Test.js';
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

      <div id='scroll'>

      <Modal show={this.state.showModal} onHide={this.hideHelp}>
        <Help/>
        <Modal.Footer>
          <Button onClick={this.hideHelp}>Close</Button>
        </Modal.Footer>
      </Modal>

      <div id='product1'>
      <h1>Requirements Input</h1>
        <p>Product 1: Quad-copter</p><p id='noClick'>Edit <i id='noClick' className="fa fa-edit"/></p>
        <Image id='dashImage' src={require('../../../Images/drone1.png')} alt='Quad-copter'/>
      </div>

        <h3>Step 1: Requirements and Functions</h3>
        <p>
        <b>Instructions: </b>
        Here you will identify relationships between sustainable design requirements and their associated functions, and between functions and module types. Then, you will evaluate existing products to find whether the functions and requirements are satisfied with the available modules in these products.
        </p>
        <p>
          Design requirements, their associated functions, and existing modules of products are identified to calculate the satisfaction levels of requirements and functions in existing products. Current product architectures are then evaluated to determine whether the desired requirements and their associated functions are satisfied with the available modules in existing products.
        </p>
        <p>
        <b>Below: </b>
        Enter all the requirements (eg. Use of renewable energy) for the environmentally responsible design of your product/s below. Requirements must be equal in number and relevant to functions.
        </p>
        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
        </div>
        <ListStuff
          list={this.props.requirements}
          title="Requirements"
          removeList={this.props.removeRequirement}
          addList={this.props.addRequirement}
          addMatRow={this.props.addRowRFMat}
          removeMatRow={this.props.removeRowRFMat}
        />

        <p>
        <b>Below: </b>
        Enter all the functions (eg. Recharging battery) for the design of your product/s below. Functions must be equal in number to and relevant to requirements.
        </p>
        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
        </div>
        <ListStuff
          list={this.props.functions}
          title="Functions"
          removeList={this.props.removeFunction}
          addList={this.props.addFunction}
          addMatRow={this.props.addRowFMMat}
          removeMatRow={this.props.removeRowFMMat}
          removeMatCol={this.props.removeColRFMat}
          addMatCol={this.props.addColRFMat}
        />

        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
        </div>

        <ListStuff
          list={this.props.modules}
          title="Modules"
          removeList={this.props.removeModule}
          addList={this.props.addModule}
          addMatRow={this.props.addRowMAMat}
          removeMatRow={this.props.removeRowMAMat}
          removeMatCol={this.props.removeColFMMat}
          addMatCol={this.props.addColFMMat}
        />

        <h3>Step 2: Product Contribution Estimation</h3>
        <p>
        <b>Below: </b>
        Using the given interpretation of contribution probabilities, estimate to what extent each product function contributes to achieve each environmental sustainability requirement. Note that all empty cell values should have values, and the sum of all columns for each row should be 100%.
        <Image src={require('../../../Images/interpretation_of_contribution_probabilities.png')} alt='Quad-copter'/>

        </p>

        <div className='pull-right'>
          <i className="fa fa-question-circle" id='pad' onClick={this.showHelp}/>
        </div>

        <div id='matrixRow'>
          <div id='matrixDisplay'>
            <MatrixDisplay
              title = "Requirements vs. Functions"
              matrixContent={this.props.requirementFunctionMatrix._data}
              colNames={this.props.functions}
              rowNames={this.props.requirements}
              editCell={this.props.editCellRFMat}
              bgColor={'#9DC64D'}
              canEditCells={true}//Must Specify that cells in the matrix are editable, else they are not
              numberType='%' // | bin | % | # |
              editType='dropDown'// | dropDown | input |
              dropDownChoices={[
                [0,'Imposible to contribute'],
                [10,'Nearly impossible to contribute'],
                [20,'Very unlikely to contribute'],
                [30,'Quite unlikely to contribute'],
                [40,'Possible to contribute'],
                [50,'Even chance to contribute'],
                [60,'Better than even chance to contribute'],
                [70,'Quite likely to contribute'],
                [80,'Very likely to contribute'],
                [90,'Nearly certain to contribute'],
                [100,'Certain to contribute']
              ]}
            />
          </div>

          <div id='sumDisplay'>
            <SumDisplay
              matrixContent={this.props.requirementFunctionMatrix._data}
              maxNumber={1}
            />
          </div>

        </div>
<p>
<b>Below: </b>
Estimate to what extent each product module satisfies each product function using the descriptions of satisfaction levels. Each satisfaction level is a range from 1 (poor) to 5 (very good) and has 0 if the module does not provide the function.
<Image src={require('../../../Images/description_of_satisfaction_levels.png')} alt='Quad-copter'/>

</p>

        <div id='matrixRow'>
          <div id='matrixDisplay'>
            <MatrixDisplay
              title = "Functions vs. Modules"
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


          <div id='sumDisplay'>
            <SumDisplay
              matrixContent={this.props.functionModuleMatrix._data}
            />
          </div>
        </div>

        <div>
        <p>
        <b>Below: </b>
        In the Modules vs. Product Architecture table, indicate whether modules are used (1) or not used (0) in each product.
        </p>
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
          <LinkContainer to='/Phases/PhaseOne/Output'>
            <Button>Continue</Button>
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
    <h4>Requirements Table</h4>
      <p>Specify the requirements for environmentally responsible design for your product below. Requirements must be equal in number and relevant to your functions.
      </p>
    </Modal.Body>
  </div>
)
