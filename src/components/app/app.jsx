import React from 'react';

import Header from '../header/header';
import DealerHand from '../dealer-hand/dealer-hand';
import Playfield from '../playfield/playfield';
import PlayerHand from '../player-hand/player-hand';

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <DealerHand />
        <Playfield />
        <PlayerHand />
      </div>
    );
  }
}

export default App;
