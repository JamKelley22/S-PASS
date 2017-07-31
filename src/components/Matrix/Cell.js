import React from 'react';
import {Button, Table, OverlayTrigger, Popover, FormGroup, FormControl, Form} from 'react-bootstrap';
import './Cell.css';

export default class Cell extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMsg: '',
      value: '',
      number: 0,
      popTitle: 'Enter new cell value:',
      cellBG: 'white'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.checkError = this.checkError.bind(this);
    this.handleDropdownSubmit = this.handleDropdownSubmit.bind(this);
    this.getPopover = this.getPopover.bind(this);
    this.getCellToReturn = this.getCellToReturn.bind(this);
    this.highlightCell = this.highlightCell.bind(this);
    this.normalizeCell = this.normalizeCell.bind(this);



  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(i,j,event) {
    this.setState({popTitle: 'Enter new cell value:'});
    if(!isNaN(this.state.value) & parseFloat(this.state.value) > -1) {
      this.setState({number: parseFloat(this.state.value)},function() {
        this.props.editCell(i,j,this.state.number);
        this.refs.overlay.hide();
        this.setState({value: ''});
      });
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

  handleDropdownSubmit(num) {
    this.setState({number: parseFloat(num)},function() {
      //alert(typeof(this.state.number/100.0));
      this.props.editCell(this.props.indexI,this.props.indexJ,this.state.number/100.0);///////////////////////////////////////////
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
                handleDropdownSubmit={this.handleDropdownSubmit}
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

  highlightCell() {
    this.setState({
      cellBG: '#C5EA6F'
    });
  }

  normalizeCell() {
    this.setState({
      cellBG: 'white'
    });
  }

  //| dropDown | input |
  getCellToReturn() {
    const popoverClick = this.getPopover();
    if(this.props.canEditCells) {
      switch (this.props.numberType) {
        case '#':
          return(
            <OverlayTrigger onEnter={this.highlightCell} onExit={this.normalizeCell} ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
              <td style={{backgroundColor: this.state.cellBG}} key={ this.props.indexJ } >
              {this.props.name}</td>
            </OverlayTrigger>
          );
          break;

        case 'bin':
          return(
            <OverlayTrigger onEnter={this.highlightCell} onExit={this.normalizeCell} ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
              <td style={{backgroundColor: this.state.cellBG}} key={ this.props.indexJ } >
              {this.props.name}</td>
            </OverlayTrigger>
          );
          break;

        case '%':
          return(
            <OverlayTrigger onEnter={this.highlightCell} onExit={this.normalizeCell} ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
              <td style={{backgroundColor: this.state.cellBG}} key={ this.props.indexJ } >
              {this.props.name * 100}%</td>
            </OverlayTrigger>
          );
          break;


        default:
          return(
            <OverlayTrigger onEnter={this.highlightCell} onExit={this.normalizeCell} ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
              <td style={{backgroundColor: this.state.cellBG}} key={ this.props.indexJ } >
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
    this.getChoices = this.getChoices.bind(this);
  }

  getChoices() {
    const choices = this.props.dropDownChoices;
    return(
    choices.map((name,index)=> {
      return <div id='percentTab'
      onClick={() => this.props.handleDropdownSubmit(choices[index][0])}
      >
        {choices[index][0] + '%' + '\t' + choices[index][1]}
      </div>;


    })

  );
}

  render() {

    return(
      <div>
        <div>{this.getChoices()}</div>
      </div>
    );
  }
}
