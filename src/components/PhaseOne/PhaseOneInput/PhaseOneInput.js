import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import NameForm from '../../submit/NameForm.js';


const tooltip = (
  <Tooltip id="tooltip"><strong>Your Name</strong></Tooltip>
);

export default class PhaseOneInput extends React.Component{


  createListItems() {
    if(this.props.functions){
    return this.props.functions.map((functions) => {
      return(
        <ListGroupItem key={functions} href="#link1">
          {functions}
          <Button
            bsStyle="danger"
            bsSize="xsmall"
            className="btn pull-right"
          >
            delete
          </Button>
        </ListGroupItem>
      );
    });
    }
  }

  render(){
    return(
      <div>
        <ListGroup>
          {this.createListItems()}
          <ListGroupItem>
          <NameForm functions = {this.props.functions} submit={this.props.addFunction}/>
          </ListGroupItem>
        </ListGroup>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <OverlayTrigger placement="top" overlay={tooltip}>
              <th>Function</th>
              </OverlayTrigger>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Masashi</td>
              <td>Schafer</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
/*
<Button
  bsStyle="success"
  bsSize="xsmall"
  className="btn pull-right"
  onClick={() => this.props.addFunction("New Function")}
  >
    Add
  </Button>
  */
