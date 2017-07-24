import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import NameForm from '../../submit/NameForm.js';


const tooltip = (
  <Tooltip id="tooltip"><strong>Your Name</strong></Tooltip>
);

export default class PhaseOneInput extends React.Component{


  createListItems(input) {
    if(input){
    return input.map((functions) => {
      return(
        <ListGroupItem key={functions} href="#link1">
          {functions}
          <Button
            bsStyle="danger"
            bsSize="xsmall"
            className="btn pull-right"
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
        <h1>Functions</h1>
        <ListGroup>
          {this.createListItems(this.props.functions)}
          <ListGroupItem>
            <NameForm functions = {this.props.functions} submit={this.props.addFunction}/>
          </ListGroupItem>
        </ListGroup>

        <h1>Modules</h1>
        <ListGroup>
          {this.createListItems(this.props.modules)}
          <ListGroupItem>
            <NameForm functions = {this.props.modules} submit={this.props.addModule}/>
          </ListGroupItem>
        </ListGroup>

        <h1>Requirements</h1>
        <ListGroup>
          {this.createListItems(this.props.requirements)}
          <ListGroupItem>
            <NameForm functions = {this.props.requirements} submit={this.props.addRequirement}/>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
