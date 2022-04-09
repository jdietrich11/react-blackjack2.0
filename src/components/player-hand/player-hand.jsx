import React from 'react';

import './player-hand.scss';

const PlayerHand = () => {
  return (
    <div className='player'>
      <div className={PlayerHand[0] ? 'card' : 'hidden'}>
        <img
          className='card__img'
          src={
            PlayerHand[0]
              ? `https://deckofcardsapi.com/static/img/${PlayerHand[0]}.png`
              : ''
          }
          alt=''
        />
      </div>
      <div className={PlayerHand[1] ? 'card' : 'hidden'}>
        <img
          className='card__img'
          src={
            PlayerHand[1]
              ? `https://deckofcardsapi.com/static/img/${PlayerHand[1]}.png`
              : ''
          }
          alt=''
        />
      </div>
      <div className={PlayerHand[2] ? 'card' : 'hidden'}>
        <img
          className='card__img'
          src={
            PlayerHand[2]
              ? `https://deckofcardsapi.com/static/img/${PlayerHand[2]}.png`
              : ''
          }
          alt=''
        />
      </div>
      <div className={PlayerHand[3] ? 'card' : 'hidden'}>
        <img
          className='card__img'
          src={
            PlayerHand[3]
              ? `https://deckofcardsapi.com/static/img/${PlayerHand[3]}.png`
              : ''
          }
          alt=''
        />
      </div>
      <div className={PlayerHand[4] ? 'card' : 'hidden'}>
        <img
          className='card__img'
          src={
            PlayerHand[4]
              ? `https://deckofcardsapi.com/static/img/${PlayerHand[4]}.png`
              : ''
          }
          alt=''
        />
      </div>
    </div>
  );
};

export default PlayerHand;
