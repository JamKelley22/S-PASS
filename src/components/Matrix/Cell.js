import React from 'react';
import {Button, Table, OverlayTrigger, Popover, FormGroup, FormControl, Form} from 'react-bootstrap';

export default class Cell extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMsg: '',
      value: '',
      popTitle: 'Enter new cell value:'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkError = this.checkError.bind(this);
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
    this.checkError();
    event.preventDefault();
  }

  checkError() {
    if(parseInt(this.state.value) > this.props.maxNumber || this.state.value == '') {
      this.setState({error: true, errorMsg: 'value out of acceptable range. Range: 0-' + this.props.maxNumber});
    }
    else {
      this.setState({error: false});
    }
  }

  render(){
    var getCellInputFromUser = this.getCellInputFromUser;
    const popoverClick = (
      <Popover id="popoverClick" title={this.state.popTitle}>

        <form action="#" onSubmit={() => this.handleSubmit(this.props.indexI,this.props.indexJ,event)}>
          <label>
            <InputBox
              value={this.state.value}
              handleChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Ok" />
        </form>

      </Popover>
    );
    const errorHover = (
      <Popover id="popoverError" title={'Error'}>
        Message: {this.state.errorMsg}
      </Popover>
    );
    if(this.props.canEditCells) {
      if(this.state.error) {
        return(
          <OverlayTrigger ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
            <OverlayTrigger ref="overlay" trigger="hover" rootClose placement="bottom" overlay={errorHover}>
              <td style={{backgroundColor: 'red'}} key={ this.props.indexJ } >
              {this.props.name}</td>
            </OverlayTrigger>
          </OverlayTrigger>
        );
      }
      else {
        return(
          <OverlayTrigger ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
            <td key={ this.props.indexJ } >
            {this.props.name}</td>
          </OverlayTrigger>
        );
      }
    }
    else {
      return(
          <td key={ this.props.indexJ } >
          {this.props.name}</td>
      );
    }

  }
}

export class InputBox extends React.Component{
  componentDidMount(){
    this.nameInput.focus();
  }
  render() {
    return(
      <input
        ref='input'
        type="text"
        value={this.props.value}
        onChange={this.props.handleChange}
        ref={(input) => { this.nameInput = input; }}
      />
    );
  }
}
