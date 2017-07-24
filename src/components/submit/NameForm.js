import React from 'react';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    if(this.props.functions.indexOf(this.state.value)==-1){
      console.log('h',this.state.value,'h');
      this.props.submit(this.state.value);
      event.preventDefault();
    }
    else if(this.state.value==null ||this.state.value!=""){
      alert("Cannot leave function name blank");
    }
    else{
      //Add alert here
      alert("Function \""+this.state.value+"\" already exists");
    }
      this.state.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
