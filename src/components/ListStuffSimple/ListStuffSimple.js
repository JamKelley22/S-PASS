import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import NameForm from '../submit/NameForm.js';

import './ListStuffSimple.css';

export default class ListStuffSimple extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      nameFormVisible: false
    };

  }

  showNameForm() {
    this.setState({nameFormVisible: true});
  }

  hideNameForm() {
    this.setState({nameFormVisible: false});
  }

  createListItems(input) {
    if(input){
    return input.map((functions,index) => {
      { if(index == 0) {
          return (
            <div>

              <ListGroupItem key={functions} id='group'>
                1. {functions}
              </ListGroupItem>
            </div>
          );
        }
        else if(index%2 == 0) {
          return(
            <ListGroupItem key={functions} id='group' >
              {index+1}. {functions}
            </ListGroupItem>
          );
      }
      return(
        <ListGroupItem key={functions} id='group' className='even' >
          {index+1}. {functions}
        </ListGroupItem>
      );
    }

    });
    }
  }



  render(){
    return(
      <div>
      <ListGroup>
        {this.createListItems(this.props.list)}
      </ListGroup>
      </div>
    );
  }
}
