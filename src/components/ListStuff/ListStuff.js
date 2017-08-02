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
    console.log("MY INDEX:"+index+"!!!!!!!!!")
    this.props.removeList(index);
    this.props.removeMatRow(index);
    if(this.props.removeMatCol){this.props.removeMatCol(index);}
    if(this.props.removeMatRow2){this.props.removeMatRow2(index);}

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
              <ListGroupItem id='group' className='even'><h4>{name}</h4></ListGroupItem>
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
        else if(index%2 == 0) {
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
        <ListGroupItem key={functions} id='group' className='even' href="#link1">
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
          <div id='clicker' onClick={this.showNameForm.bind(this)}>
            <i className="fa fa-plus-circle"
            id='plusSign'></i>
            Add a {this.props.title.substring(0,this.props.title.length-1)}
          </div>
        </ListGroupItem>
      );
    }
    return(
      <ListGroupItem id='group'>
        <div id='clicker' onClick={this.hideNameForm.bind(this)} >
          <i className="fa fa-minus-circle" onClick={this.hideNameForm.bind(this)}
          id='minusSign'></i>Cancel
        </div>
        <NameForm functions = {this.props.list} submit={this.props.addList}
          addMatRow={this.props.addMatRow} addMatCol={this.props.addMatCol}
          addMatRow2 = {this.props.addMatRow2}
        />
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
