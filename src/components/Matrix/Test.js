//HOI
import React from 'react';
import ReactScrollbar from 'react-scrollbar-js';

export default class Test extends React.Component{
  render() {
    const myScrollbar = {
      width: 100,
      height: 100,
    };
    return(
      <ReactScrollbar style={myScrollbar}>
        <div className="should-have-a-children scroll-me">
          <p>And Now</p>
          <p>You Can Put</p>
          <p>A Long Content Here</p>

        </div>
      </ReactScrollbar>
    )
  }
}
