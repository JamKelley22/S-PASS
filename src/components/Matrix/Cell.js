import React from 'react';
import {Button, Table, OverlayTrigger, Popover, FormGroup, FormControl, Form} from 'react-bootstrap';

export default class Cell extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      error: false,
      value: '',
      popTitle: 'Enter new cell value:'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    event.preventDefault();
  }

  render(){
    var getCellInputFromUser = this.getCellInputFromUser;
    const popoverClick = (
      <Popover id="popover-trigger-click-root-close" title={this.state.popTitle}>
        <form onSubmit={() => this.handleSubmit(this.props.indexI,this.props.indexJ,event)}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Ok" />
        </form>

      </Popover>
    );

    if(this.props.canEditCells) {
      return(
        <OverlayTrigger ref="overlay" trigger="click" rootClose placement="bottom" overlay={popoverClick}>
          <td key={ this.props.indexJ } >
          {this.props.name}</td>
        </OverlayTrigger>
      );
    }
    else {
      return(
          <td key={ this.props.indexJ } >
          {this.props.name}</td>
      );
    }

  }
}
