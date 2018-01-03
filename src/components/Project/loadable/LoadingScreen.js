import React from 'react';
import {ProgressBar,Glyphicon} from 'react-bootstrap';
import './LoadingScreen.css';

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
        <h1 style={{textAlign: 'center'}}>Loading</h1>
        <div className="loader"></div>
      </div>
    );
  }
}

export default LoadingScreen;
