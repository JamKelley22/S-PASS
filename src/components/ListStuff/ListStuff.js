import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import NameForm from '../submit/NameForm.js';

export default class ListStuff extends React.Component{

  constructor(props) {
    super(props);
  this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(index){
    //console.log('HERE: '+index);
    return this.props.removeList(index)
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
      <h1>{this.props.title}</h1>
      <ListGroup>
        {this.createListItems(this.props.list)}
        <ListGroupItem>
          <NameForm functions = {this.props.list} submit={this.props.addList}/>
        </ListGroupItem>
      </ListGroup>
      </div>
    );
  }
}
