export class DropDownChoose extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      listValues: []
    };
    this.getChoices = this.getChoices.bind(this);
    this.handleDropdownSubmit = this.handleDropdownSubmit.bind(this);
  }

  handleDropdownSubmit(value) {
    this.setState({
      listValues: this.state.listValues.push(value);
    });
  }

  getChoices() {
    const choices = this.props.dropDownChoices;
    return(
    choices.map((name,index)=> {
      return <div
      onClick={() => this.handleDropdownSubmit(choices[index])}
      >
        {choices[index]}
      </div>;


    })

  );
}

  render() {

    return(
      <div>
        {this.props.title}

        <div>{this.getChoices()}</div>
      </div>
    );
  }
}
