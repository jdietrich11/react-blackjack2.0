import React from 'react';

import Overlay from '../overlay/overlay';
import Header from '../header/header';
import Playfield from '../playfield/playfield';

import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <Overlay />
      <Header />
      <Playfield />
    </div>
  );
};

export default App;
