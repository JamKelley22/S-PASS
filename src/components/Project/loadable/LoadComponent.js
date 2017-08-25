import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import fakeDelay from './fakeDelay';
import Example from './Example.js';

import path from 'path';

export default class LoadComponent extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let Loadit = Loadable({
      loader: () => fakeDelay(500).then(() => this.props.CompLoad),
      loading: Loading
    });
    return (
      <div>
        <Loadit/>
      </div>
    );
  }
}
