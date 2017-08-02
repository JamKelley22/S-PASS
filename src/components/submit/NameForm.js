import React from 'react';
import {Alert,Button,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import './NameForm.css'

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      alertVisible: false,
      alertTitle: 'Its Empty...',
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.handleAlertShow = this.handleAlertShow.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  getInitialState() {
    return {
      alertVisible: false
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyPress (event){
    if (event.key === 'Enter') {
      this.handleSubmit();
      event.preventDefault();
    }
  }

  handleSubmit(event) {
    //console.log(this.state.value);
    //console.log("VALUE:",this.state.value,":END");
    if(this.props.functions.indexOf(this.state.value)==-1){
      //alert(this.state.value.length);
      if(this.state.value.length > 0) {
        this.setState({alertVisible: false});
        this.props.submit(this.state.value);
        //add matrix row add
        this.props.addMatRow();
        if(this.props.addMatCol){this.props.addMatCol()};
        if(this.props.addMatRow2){this.props.addMatRow2();}
      }
      else {
        this.setState({alertVisible: true, alertTitle: 'Its Empty...',
        alertMessage: 'Try again with a longer function name'});
      }
    }
    else{
      this.setState({alertVisible: true, alertTitle: 'Thats a duplicate!',
      alertMessage: 'Try again with a unique function name'});
      event.preventDefault();
    }
      this.state.value = "";
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <div>
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>{this.state.alertTitle}</h4>
          <p>Try again with a unique function name</p>
          <p>
            <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
          </p>
        </Alert>

          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }

    return (
      <div>
        <form>
          <FormGroup bsSize="small" id='formGroup'>
            <FormControl
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </FormGroup>

          <Button
            id='submit'
            bsStyle="success"
            bsSize="xsmall"
            onClick={this.handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
