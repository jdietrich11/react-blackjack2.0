import React from 'react';

import './header.scss';

const logo = require('../../img/logo.png');

class Header extends React.Component {
  handleClick() {
    window.location.reload();
  }
  render() {
    return (
      <div className='header'>
        <div className='header__logo'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div className='header__title'>React BlackJack</div>
        <div onClick={this.handleClick} className='header__new-game btn'>
          New Game
        </div>
      </div>
    );
  }
}

export default Header;
