import React from 'react';
import {Alert,Button,FormGroup,FormControl,ControlLabel,Form,Checkbox} from 'react-bootstrap';
import './SupplierForm.css'

export default class SupplierForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      isoValue: false,
      materialsValue: 1,
      packageValue: 0,
      alertVisible: false,
      alertTitle: "It's empty...",
  };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeISO = this.handleChangeISO.bind(this);
    this.handleChangeMaterals = this.handleChangeMaterals.bind(this);
    this.handleChangePackage = this.handleChangePackage.bind(this);

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

  handleChangeName(event) {
    this.setState({nameValue: event.target.value});
  }

  handleChangeISO(event) {
    this.setState({isoValue: event.target.value});
  }
  handleChangeMaterals(event) {
    this.setState({materialsValue: event.target.value});
  }
  handleChangePackage(event) {
    this.setState({packageValue: event.target.value});
  }

  handleKeyPress (event){
    if (event.key === 'Enter') {
      this.handleSubmit();
      event.preventDefault();
    }
  }

  handleSubmit(event) {
    alert(this.state.nameValue);

    /*
    console.log(this.state.nameValue);
    if(this.props.functions.indexOf(this.state.nameValue)==-1){
      console.log(this.state.nameValue.length);
      if(this.state.nameValue.length > 0) {
        this.setState({alertVisible: false});
        this.props.submit(this.state.nameValue);
        //add matrix row add
        this.props.addMatRow();
        if(this.props.addMatCol){this.props.addMatCol()};
        if(this.props.addMatRow2){this.props.addMatRow2();}
        if(this.props.addMatRow3){this.props.addMatRow3();}
      }
      else {
        this.setState({alertVisible: true, alertTitle: "It's empty...",
        alertMessage: 'Try again with a longer function name'});
      }
    }
    else{
      this.setState({alertVisible: true, alertTitle: 'Thats a duplicate!',
      alertMessage: 'Try again with a unique function name'});
      event.preventDefault();
    }
    this.state.value = "";
    */
    this.props.submit(
      this.state.nameValue,
      this.state.isoValue,
      this.state.materialsValue,
      this.state.packageValue);
    this.setState({nameValue: "", isoValue: false, materialsValue: 1, packageValue: 0.0});
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
        <Alert id="alert" bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>{this.state.alertTitle}</h4>
          <p>Try again with a unique function name</p>

        </Alert>

          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                            id="formControl"
                            type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input
              id='submit'
              bsStyle="success"
              bsSize="xsmall"
              className="btn pull-left"
              type="submit"
              value="Submit" />
          </form>
        </div>
      );
    }

    return (

      <div>
      <h1>Supplier Input Form</h1>
        <Form>

          <FormGroup bsSize="small" id='formGroup0'>
          <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Company X"
              value={this.state.nameValue}
              onChange={this.handleChangeName}
              onKeyPress={this.handleKeyPress}
            />
          </FormGroup>

          <FormGroup controlId="formGroup1">
            <ControlLabel>ISO</ControlLabel>
            {' '}
            <Checkbox
            onChange={this.handleChangeISO}
            value={this.state.isoValue}>
              Complient
            </Checkbox>
          </FormGroup>

          <FormGroup controlId="formGroup2">
            <ControlLabel>Recycled Materials</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="1 - 5"
              value={this.state.materialsValue}
              onChange={this.handleChangeMaterals}
            />
          </FormGroup>

          <FormGroup controlId="formGroup3">
            <ControlLabel>Package Recycling</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="0.0 - 1.0"
              value={this.state.packageValue}
              onChange={this.handleChangePackage}
            />
          </FormGroup>

          <Button
            id='submit'
            bsStyle="success"
            bsSize="xsmall"
            className="btn pull-left"
            onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
