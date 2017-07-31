import React from 'react';
import './UniqueDropdown.css'
import {Button,ListGroup,ListGroupItem} from 'react-bootstrap'

export default class DropDownChoose extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      listValues: this.props.dataValues,
      dropdownOpen: false
    };
    this.getChoices = this.getChoices.bind(this);
    this.getList = this.getList.bind(this);
    this.handleDropdownSubmit = this.handleDropdownSubmit.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleDropdownSubmit(value) {
    var unique = true;
    this.state.listValues.map((name,index)=> {
      if(name == value) {
        unique = false;
      }
    });
    if(unique) {
      var newArr = this.state.listValues;
      newArr.push(value);
      this.setState({
        listValues: newArr
      });
    }
    //call some action
  }

  handleRemove(index) {
    var newArr = this.state.listValues;
    newArr.splice(index, 1);
    this.setState({
      listValues: newArr
    });
  }

  getList() {
    const values = this.state.listValues;
    return(
    values.map((name,index)=> {
      return <ListGroupItem id='value'>
        {values[index]}
        <Button
          bsStyle="danger"
          bsSize="xsmall"
          className="btn pull-right"
          onClick={()=> this.handleRemove(index)}
        >
          delete
        </Button>
      </ListGroupItem>;
    })
    );
  }

  getChoices() {
    const choices = this.props.dropDownChoices;
    return(
    choices.map((name,index)=> {
      return <ListGroupItem id='choice'
      onClick={() => this.handleDropdownSubmit(choices[index])}
      >
        {choices[index]}
      </ListGroupItem>;
    })
    );
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    const open = ((this.state.dropdownOpen) ?
    <ListGroupItem id='group'>
      <div id='clicker' onClick={this.toggleDropdown} >
        <i className="fa fa-minus-circle"
        id='minusSign'></i>Cancel
      </div>
      <div>{this.getChoices()}</div>
    </ListGroupItem>
    :
    <ListGroupItem id='group'>
      <div id='clicker' onClick={this.toggleDropdown}>
        <i className="fa fa-plus-circle"
        id='plusSign'></i>
        Add a Supplier
      </div>
    </ListGroupItem>
    )

    return(
      <div id='dropdown'>
        <h1>{this.props.title}</h1>
        <ListGroup>
        <div>{this.getList()}</div>
        </ListGroup>
        {open}
      </div>
    );

  }
}
