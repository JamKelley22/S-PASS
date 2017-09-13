import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button,Image,Grid,Row,Col,Modal,Popover} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import NameForm from '../../submit/NameForm.js';
import MatrixDisplay from '../../Matrix/Matrix.js';
import SumDisplay from '../../Matrix/SumDisplay.js';
import Test from '../../Matrix/Test.js';
import '../../Matrix/Matrix.css';
import '../../Matrix/Test.js';
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
      <h1>Phase 1: Requirement Satisfaction by Existing Products</h1>
        <p style={{paddingLeft: '0px'}}>Product 1: Quad-copter</p><p id='noClick'>Edit <i id='noClick' className="fa fa-edit"/></p>
        <Image id='dashImage' src={require('../../../Images/drone1.png')} alt='Quad-copter'/>
      </div>

        <p>
        Please enter requirements:
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
          //removeMatCol={this.props.removeColRFMat} Not Needed
          //addMatCol={this.props.addColRFMat} Not Needed
        />

        <p>
        Please enter functions:
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

          removeMatRow2={this.props.removeRowFaMMat}//phase 3 input
          addMatRow2={this.props.addRowFaMMat}//phase 3 input

        />


        <p>
        Please enter modules:
        </p>

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

          //addMatRow3={this.props.addRowMPAMat}
          //removeMatRow3={this.props.removeRowMPAMat}
        />
        <div>
        <p>
        <b>Q1)</b> Please estimate to what extent each product function contributes to achieve each environmental sustainability requirement.
        </p>
        <p>
        Note: Each value indicates the contribution probability of the function to the requirement, a range from 0% to 100%. (See figure)
        </p>
        <p>
        <Image src={require('../../../Images/interpretation_of_contribution_probabilities.PNG')} alt='Quad-copter'/>
        </p>
        </div>


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
              bgColor={'rgba(210,210,177,0.6)'}
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
        <b>Q2)</b> Please estimate to what extent each product module satisfies each product function.
        </p>
        <p>
        Note: Each satisfaction level is a range from 1(poor) to 5 (very good) and has 0 if the module does not provide the function. (See figure)
        </p>
<p>
<Image src={require('../../../Images/description_of_satisfaction_levels.PNG')} alt='Quad-copter'/>
</p>

        <div id='matrixRow'>
          <div id='matrixDisplay'>
            <MatrixDisplay
              title = "Functions vs. Modules"
              matrixContent={this.props.functionModuleMatrix._data}
              colNames={this.props.modules}
              rowNames={this.props.functions}
              editCell={this.props.editCellFMMat}
              bgColor={'rgba(210,210,177,0.6)'}
              canEditCells={true}
              numberType='#' // | bin | % | # |
              editType='dropDown'// | dropDown | input |
              dropDownChoices={[
                ['0',''],
                ['1',''],
                ['2',''],
                ['3',''],
                ['4',''],
                ['5','']
              ]}
            />
          </div>



        </div>

        <div>
        <p>
        <b>Q3)</b> Please identify the module composition of current products.
        </p>

        </div>



        <MatrixDisplay
          title = "Modules vs. Product Architecture"
          matrixContent={this.props.moduleArchitectureMatrix._data}
          colNames={this.props.productArchitecture}
          rowNames={this.props.modules}
          editCell={this.props.editCellMAMat}
          bgColor={'rgba(210,210,177,0.6)'}
          canEditCells={true}
          numberType='bin' // | bin | % | # |
          editType='dropDown'// | dropDown | input |
          dropDownChoices={[
            ['0','not used'],
            ['1','used']
          ]}
        />

        <div id='lowerButtons'>
          <LinkContainer to='/Phases/PhaseOne/Output'>
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
    <h4>Requirements Table</h4>
      <p>Specify the requirements for environmentally responsible design for your product below. Requirements must be equal in number and relevant to your functions.
      </p>
    </Modal.Body>
  </div>
)
