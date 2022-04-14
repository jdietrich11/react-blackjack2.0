import React from 'react';

import './header.scss';

const logo = require('../../img/logo.png');

class Header extends React.Component {
  handleClick(e) {
    e.preventDefault();
    window.location.reload();
  }
  render() {
    return (
      <div className='header'>
        <div className='header__logo'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div className='header__title'>React BlackJack</div>
        <div
          onClick={(e) => this.handleClick(e)}
          className='header__new-game btn'
        >
          New Game
        </div>
      </div>
    );
  }
}

export default Header;
