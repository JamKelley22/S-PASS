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
    test
    */
    var namePass = this.state.nameValue.length > 0;
    var matPass = this.state.materialsValue > 0 && this.state.materialsValue < 5;
    var packPass = this.state.packageValue >= 0 && this.state.packageValue <= 1;
    console.log(namePass);
    console.log(matPass);
    console.log(packPass);
    if(namePass && matPass && packPass) {
      this.props.submit(
        this.state.nameValue,
        this.state.isoValue,
        this.state.materialsValue,
        this.state.packageValue
      );
    this.setState({nameValue: "", isoValue: false, materialsValue: 1, packageValue: 0.0});
  }
  else {
    this.setState({alertVisible: true});
  }
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

  render() {
    if(this.state.alertVisible) {
      return (
        <div>
        <h1>Supplier Input Form</h1>
        <Alert id="alert" bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>"Error in Values Entered or Duplicate Supplier Name"</h4>

        </Alert>
          <Form>

            <FormGroup bsSize="small" id='formGroup0'>
            <ControlLabel>Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Company X"
                value={this.state.nameValue}
                onChange={this.handleChangeName.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
              />
            </FormGroup>

            <FormGroup controlId="formGroup1">
              <ControlLabel>ISO</ControlLabel>
              {' '}
              <Checkbox
              onChange={this.handleChangeISO.bind(this)}
              value={this.state.isoValue}
              >
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
                onChange={this.handleChangeMaterals.bind(this)}
              />
            </FormGroup>

            <FormGroup controlId="formGroup3">
              <ControlLabel>Package Recycling</ControlLabel>
              {' '}
              <FormControl
                type="text"
                placeholder="0.0 - 1.0"
                value={this.state.packageValue}
                onChange={this.handleChangePackage.bind(this)}
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
    else {
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
                onChange={this.handleChangeName.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
              />
            </FormGroup>

            <FormGroup controlId="formGroup1">
              <ControlLabel>ISO</ControlLabel>
              {' '}
              <Checkbox
              onChange={this.handleChangeISO.bind(this)}
              value={this.state.isoValue}
              >
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
                onChange={this.handleChangeMaterals.bind(this)}
              />
            </FormGroup>

            <FormGroup controlId="formGroup3">
              <ControlLabel>Package Recycling</ControlLabel>
              {' '}
              <FormControl
                type="text"
                placeholder="0.0 - 1.0"
                value={this.state.packageValue}
                onChange={this.handleChangePackage.bind(this)}
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
}
