import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import NameForm from '../../submit/NameForm.js';
import MatrixDisplay from '../../Matrix/Matrix.js';
import '../../Matrix/Matrix.css';
import ListStuff from '../../ListStuff/ListStuff.js';

const tooltip = (
  <Tooltip id="tooltip"><strong>Your Name</strong></Tooltip>
);

export default class PhaseOneInput extends React.Component{

  constructor(props) {
    super(props);
  this.handleRemove = this.handleRemove.bind(this);
}
  handleRemove(index){
    //console.log('HERE: '+index);
    return this.props.remove(index)
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
        <ListStuff
          list={this.props.functions}
          title="Functions"
          removeList={this.props.removeFunction}
          addList={this.props.addFunction}
        />

        <ListStuff
          list={this.props.modules}
          title="Modules"
          removeList={this.props.removeFunction}
          addList={this.props.addModule}
        />

        <ListStuff
          list={this.props.requirements}
          title="Requirements"
          removeList={this.props.removeFunction}
          addList={this.props.addRequirement}
        />

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
