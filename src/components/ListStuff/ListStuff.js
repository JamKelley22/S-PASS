import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import NameForm from '../submit/NameForm.js';

import './ListStuff.css';

export default class ListStuff extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      nameFormVisible: false
    };
  this.handleRemove = this.handleRemove.bind(this);
  this.getNameForm = this.getNameForm.bind(this);
  }
  handleRemove(index){
    //console.log('HERE: '+index);
    return this.props.removeList(index)
  }

  showNameForm() {
    this.setState({nameFormVisible: true});
  }

  hideNameForm() {
    this.setState({nameFormVisible: false});
  }

  createListItems(input,name) {
    if(input){
    return input.map((functions,index) => {
      { if(index == 0) {
          return (
            <div>
              <ListGroupItem id='group' className='odd'><h4>{name}</h4></ListGroupItem>
              <ListGroupItem key={functions} id='group' href="#link1">
                1. {functions}
                <Button
                  bsStyle="danger"
                  bsSize="xsmall"
                  className="btn pull-right"
                  onClick={()=> this.handleRemove(0)}
                >
                  delete
                </Button>
              </ListGroupItem>
            </div>
          );
        }
        else if(index%2 != 0) {
          return(
            <ListGroupItem key={functions} id='group' href="#link1">
              {index+1}. {functions}
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
      }
      return(
        <ListGroupItem key={functions} id='group' className='odd' href="#link1">
          {index+1}. {functions}
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
    }

    });
    }
  }

  getNameForm() {
    if(this.state.nameFormVisible == false) {
      return(
        <ListGroupItem id='group'>
          <i className="fa fa-plus-circle" onClick={this.showNameForm.bind(this)}
          id='plusSign'></i>Add a function
        </ListGroupItem>
      );
    }
    return(
      <ListGroupItem id='group'>
        <i className="fa fa-minus-circle" onClick={this.hideNameForm.bind(this)}
        id='minusSign'></i>Cancel
        <NameForm functions = {this.props.list} submit={this.props.addList}/>
      </ListGroupItem>
    );
  }

  render(){
    return(
      <div>
      <ListGroup>
        {this.createListItems(this.props.list,this.props.title)}
        {this.getNameForm()}
      </ListGroup>
      </div>
    );
  }
}
