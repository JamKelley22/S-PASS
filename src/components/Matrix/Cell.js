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
      popTitle: 'Enter new cell value:'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkError = this.checkError.bind(this);
    this.handlePercentSubmit = this.handlePercentSubmit.bind(this);

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

  handlePercentSubmit(num) {
    this.setState({number: num},function() {
      this.props.editCell(this.props.indexI,this.props.indexJ,this.state.number);
    });
    this.refs.overlay.hide();
  }

  render(){
    var getCellInputFromUser = this.getCellInputFromUser;
    var popoverClick = null;
    if(!this.props.isBinary) {
      popoverClick = (
        <Popover id="popoverClick" title={this.state.popTitle}>
          <DropDownChoose
            handlePercentSubmit={this.handlePercentSubmit}
            value={this.state.value}
          />
        </Popover>
      );
    }
    else {
      popoverClick = (
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
    }
    const errorHover = (
      <Popover style={{backgroundColor: '#ffcccc'}} id="popoverError">
        Error: {this.state.errorMsg}
      </Popover>
    );
    if(this.props.isBinary) {
      if(this.props.canEditCells) {
        if(this.state.error) {
          return(
            <OverlayTrigger ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
              <OverlayTrigger ref="overlay" trigger="hover" rootClose placement="bottom" overlay={errorHover}>
                <td style={{backgroundColor: '#ff9999'}} key={ this.props.indexJ } >
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
    else {
      if(this.props.canEditCells) {
        return(
          <OverlayTrigger ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
            <td key={ this.props.indexJ } >
            {this.props.name}%</td>
          </OverlayTrigger>
        );
      }
      else {
        return(
            <td key={ this.props.indexJ } >
            {this.props.name}%</td>
        );
      }
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

export class DropDownChoose extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      percents: [
        ['0','Imposible to contribute'],
        ['10','Nearly impossible to contribute'],
        ['20','Very unlikely to contribute'],
        ['30','Quite unlikely to contribute'],
        ['40','Possible to contribute'],
        ['50','Even chance to contribute'],
        ['60','Better than even chance to contribute'],
        ['70','Quite likely to contribute'],
        ['80','Very likely to contribute'],
        ['90','Nearly certain to contribute'],
        ['100','Certain to contribute']
      ]
    };
    this.getPercents = this.getPercents.bind(this);
  }
  componentDidMount(){

  }

  getPercents() {
    return(
    this.state.percents.map((name,index)=> {
      if(index%2 == 0) {
        return <div id='greenPercentTab'
        onClick={() => this.props.handlePercentSubmit(this.state.percents[index][0])}
        >
          {this.state.percents[index][0] + '%' + '\t' + this.state.percents[index][1]}
        </div>;
      }
      else {
        return <div id='percentTab'
        onClick={() => this.props.handlePercentSubmit(this.state.percents[index][0])}
        >
          {this.state.percents[index][0] + '%' + '\t' + this.state.percents[index][1]}
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
