import React from 'react';
import {Button, Table, OverlayTrigger, Popover, FormGroup, FormControl, Form} from 'react-bootstrap';
import './Cell.css';

export default class Cell extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      //error: false,
      errorMsg: '',
      value: '',
      number: 0,
      popTitle: 'Enter new cell value:'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.checkError = this.checkError.bind(this);
    this.handlePercentSubmit = this.handlePercentSubmit.bind(this);
    this.getPopover = this.getPopover.bind(this);
    this.getCellToReturn = this.getCellToReturn.bind(this);


  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(i,j,event) {
    this.setState({popTitle: 'Enter new cell value:'});
    if(!isNaN(this.state.value) & parseInt(this.state.value) > -1) {
      this.props.editCell(i,j,this.state.value);
      this.refs.overlay.hide();
      this.setState({value: ''});
    }
    else {
      this.setState({popTitle: 'Invalid input. Please enter a non-negative number'});
    }
    //this.checkError();
    event.preventDefault();
  }

  /*
  checkError() {
    if(parseInt(this.state.value) > this.props.maxNumber || this.state.value == '') {
      this.setState({error: true, errorMsg: 'value out of acceptable range. Range: 0-' + this.props.maxNumber});
    }
    else {
      this.setState({error: false});
    }
  }
  */

  handlePercentSubmit(num) {
    this.setState({number: num},function() {
      this.props.editCell(this.props.indexI,this.props.indexJ,this.state.number);
    });
    this.refs.overlay.hide();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSubmit(this.props.indexI,this.props.indexJ,event)
      event.preventDefault();
    }
  }

  getPopover() {
    var popoverClick = null;
    switch(this.props.editType) {
        case 'dropDown':
          return (
            <Popover id="popoverClick" title={this.state.popTitle}>
              <DropDownChoose
                handlePercentSubmit={this.handlePercentSubmit}
                value={this.state.value}
                dropDownChoices={this.props.dropDownChoices}
              />
            </Popover>
          );
          break;
        case 'input':
          return (
            <Popover id="popoverClick" title={this.state.popTitle}>
              <form action="#">
                <label>
                  <InputBox
                    value={this.state.value}
                    handleChange={this.handleChange}
                    handleKeyPress={this.handleKeyPress.bind(this)}
                  />
                </label>
                <Button onClick={() => this.handleSubmit(this.props.indexI,this.props.indexJ,event)}>Ok</Button>
              </form>
            </Popover>
          );
          break;
    }

  }

  //| dropDown | input |
  getCellToReturn() {
    const popoverClick = this.getPopover();
    if(this.props.canEditCells) {
      switch (this.props.numberType) {
        case '#':
          return(
            <OverlayTrigger ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
              <td key={ this.props.indexJ } >
              {this.props.name}</td>
            </OverlayTrigger>
          );
          break;

        case 'bin':
          return(
            <OverlayTrigger ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
              <td key={ this.props.indexJ } >
              {this.props.name}</td>
            </OverlayTrigger>
          );
          break;

        case '%':
          return(
            <OverlayTrigger ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
              <td key={ this.props.indexJ } >
              {this.props.name}%</td>
            </OverlayTrigger>
          );
          break;


        default:
          return(
            <OverlayTrigger ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
              <td key={ this.props.indexJ } >
              {this.props.name}</td>
            </OverlayTrigger>
          );
          break;
      }
    }
    else {
      return(
        <td key={ this.props.indexJ } >
        {this.props.name}</td>
      );
    }
  }

  render(){
    var getCellInputFromUser = this.getCellInputFromUser;
    /*
    const errorHover = (
      <Popover style={{backgroundColor: '#ffcccc'}} id="popoverError">
        //Error: {this.state.errorMsg}
      </Popover>
    );
    */

    return(
      this.getCellToReturn()
    );

  }
}


export class InputBox extends React.Component{
  componentDidMount(){
    this.nameInput.focus();
  }
  render() {
    return(
      <input
        onKeyPress={this.props.handleKeyPress}
        ref='input'
        type="text"
        value={this.props.value}
        onChange={this.props.handleChange}
        ref={(input) => { this.nameInput = input; }}
      />
    );
  }
}

export class DropDownChoose extends React.Component{
  constructor(props) {
    super(props);
    this.getPercents = this.getPercents.bind(this);
  }

  getPercents() {
    const choices = this.props.dropDownChoices;
    return(
    choices.map((name,index)=> {
      if(index%2 == 0) {
        return <div id='greenPercentTab'
        onClick={() => this.props.handlePercentSubmit(choices[index][0])}
        >
          {choices[index][0] + '%' + '\t' + choices[index][1]}
        </div>;
      }
      else {
        return <div id='percentTab'
        onClick={() => this.props.handlePercentSubmit(choices[index][0])}
        >
          {choices[index][0] + '%' + '\t' + choices[index][1]}
        </div>;
      }
    })

  );
}

  render() {

    return(
      <div>
        <div>{this.getPercents()}</div>
      </div>
    );
  }
}
