import React from 'react';
import {Alert,Button} from 'react-bootstrap';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      alertVisible: false,
      alertTitle: 'Its Empty...',
      alertMessage: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.handleAlertShow = this.handleAlertShow.bind(this);
  }

  getInitialState() {
    return {
      alertVisible: false
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    if(this.props.functions.indexOf(this.state.value)==-1){
      //alert(this.state.value.length);
      if(this.state.value.length > 0) {
        this.props.submit(this.state.value);
        event.preventDefault();
      }
      else {
        alert("Empty");//NOt Working
        this.setState({alertVisible: true, alertTitle: 'Its Empty...', alertMessage: 'Try again with a longer function name'});
      }
    }
    else{
      //Add alert here
      //alert("Function \""+this.state.value+"\" already exists");
      alert("Dup");
      this.setState({alertVisible: true, alertTitle: 'Thats a duplicate!', alertMessage: 'Try again with a unique function name'});
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
          <h4>Thats a duplicate!</h4>
          <p>Try again with a unique function name</p>
          <p>
            <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
          </p>
        </Alert>

          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
