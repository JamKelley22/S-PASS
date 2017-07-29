import React from 'react';
import {Alert,Button} from 'react-bootstrap';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', alertVisible: false};

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
      this.props.submit(this.state.value);
      event.preventDefault();
    }
    else{
      //Add alert here
      //alert("Function \""+this.state.value+"\" already exists");
      this.setState({alertVisible: true});
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
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again.</p>
          <p>
            <Button bsStyle="danger">Take this action</Button>
            <span> or </span>
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
