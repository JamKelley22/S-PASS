import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem} from 'react-bootstrap';

const tooltip = (
<Tooltip id="tooltip"><strong>Your Name</strong></Tooltip>
);

export default class PhaseOneInput extends React.Component{

  render(){

    return(
    <div>
    <ListGroup>
      <h1>Funtions</h1>
      <ListGroupItem>{this.props.name}</ListGroupItem>
      <ListGroupItem>Function 2</ListGroupItem>
      <ListGroupItem>Function 3</ListGroupItem>
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
