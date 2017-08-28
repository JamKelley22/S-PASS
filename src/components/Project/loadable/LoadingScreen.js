import React from 'react';
import {ProgressBar,Glyphicon} from 'react-bootstrap';

class LoadingScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <h1 style={{textAlign: 'center'}}>Loading...</h1>
        <ProgressBar active now={45} />
      </div>
    );
  }
}

export default LoadingScreen;
