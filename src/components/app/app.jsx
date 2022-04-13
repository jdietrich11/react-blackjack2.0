import React from 'react';

import Header from '../header/header';
import Playfield from '../playfield/playfield';

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Playfield />
      </div>
    );
  }
}

export default App;
