import React from 'react';
import './UniqueDropdown.css'
import {Button,ListGroup,ListGroupItem} from 'react-bootstrap'
import {thresholdCheck} from '../../js/thresholdCheck.js'
import ReactScrollbar from 'react-scrollbar-js';

export default class DropDownChoose extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      listValues: this.props.dataValues,
      dropdownOpen: false
    };
    this.thresholdCheck = thresholdCheck.bind(this);//threshold check
    //this.unique = unique.bind(this);//threshold check
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
      console.log("DATA=======================================================");
      //console.log(this.props.data);
      //console.log(this.props.findData(this.props.data,value));
      console.log(this.thresholdCheck(this.props.findData(this.props.data,value),
        this.props.threshold));
      console.log("==========================================================");
      if(this.thresholdCheck(this.props.findData(this.props.data,value),
        this.props.threshold)){
          //console.log("Hello")
          this.props.addAcceptedData(value);
          //Add collumn here for fun alt mod matrix!!!!
          //console.log("I MADE IT!!!!!!!!");
          if(this.props.addMatCol){this.props.addMatCol();}
          if(this.props.addMatCol2){this.props.addMatCol2();}
          console.log("ADDING MAT ROW 3");
          if(this.props.addMatRow){this.props.addMatRow();}
          //if(this.props.addMatRow3){this.props.addMatRow3();}
          console.log("AFTER ADDING MAT ROW 3");
          //console.log("I ALSO MADE IT!!!!");
        }
      else{
        console.log("did not work");
      }
      this.props.addData(value);
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
    this.props.removeData(index);
    //console.log("HELEOFJASFSAD"+newArr[index]);
    if(this.props.acceptedData.includes(newArr[index])){
      let newIndex = this.props.acceptedData.indexOf(newArr[index]);
      this.props.removeAcceptedData(newIndex);
      this.props.removeMatData(newIndex);
      if(this.props.removeMatData2){this.props.removeMatData2(newIndex);}
      if(this.props.removeMatRow3){this.props.removeMatRow3(newIndex);}
    }
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
    let styling = {
      scrollbar: {
        width: "auto",
        maxHeight: "200px",
        height: "auto"
      }
    };

    const open = ((this.state.dropdownOpen) ?
    <ListGroupItem id='group'>
      <div id='clicker' onClick={this.toggleDropdown} >
        <i className="fa fa-minus-circle"
        id='minusSign'></i>Cancel
      </div>
      <ReactScrollbar style={ styling.scrollbar }>
      <div>{this.getChoices()}</div>
      </ReactScrollbar>
    </ListGroupItem>
    :
    <ListGroupItem id='group'>
      <div id='clicker' onClick={this.toggleDropdown}>
        <i className="fa fa-plus-circle"
        id='plusSign'></i>
        Add a Module
      </div>
    </ListGroupItem>
    )

    return(
      <div>
        <h1>{this.props.title}</h1>
        <div id='dropdown'>
            <ListGroup>
              {this.getList()}
            </ListGroup>
          {open}
        </div>
      </div>
    );

  }
}
