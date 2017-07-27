import React from 'react';
import {Table} from 'react-bootstrap';

export default class Cell extends React.Component{
  constructor(props) {
    super(props);
    this.getCellInputFromUser = this.getCellInputFromUser.bind(this);
  }

  getCellInputFromUser(name,i,j){
    if(this.props.canEditCells) {
      var first = true;
      var msg = 'Enter new cell value:';
      do {
        if(!first) {
          msg = 'Invalid input. Please enter a non-negative number';
        }
        var validInput = false;
        var input = prompt(msg);
        if(!isNaN(input) && input > -1) {
          validInput = true;
        }
        first = false;
      }while(!validInput);

      console.log(input);
      if(input == null || input == '') {//User Pressed Cancel
        console.log('Input Canceled');
      }
      else {//User Pressed OK
        this.props.editCell(i,j,input);
      }

      //@Sushi This is where you would send the action or something.
      //I think you have everything you need?
    }
  }

  render(){
    var getCellInputFromUser = this.getCellInputFromUser;

    return(
      <td key={ this.props.indexJ } onClick={() => getCellInputFromUser(this.props.name,this.props.indexI,this.props.indexJ)}>
      {this.props.name}</td>
    );

  }
}
