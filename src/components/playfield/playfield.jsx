import React, { useState } from 'react';

import './playfield.scss';

const Playfield = () => {
  let [DealerValue, setDealerValue] = useState(0);
  let [PlayerValue, setPlayerValue] = useState(0);
  let [bank, setBank] = useState(0);
  let [submitted, setSubmitted] = useState(false);
  let [bid, setBid] = useState(0);
  let [active, setActive] = useState(false);
  return (
    <div className='playfield'>
      <div className='dealer__value'>{DealerValue}</div>
      <div className='bidding'>
        <div className='bidding__bank'>BANK: {bank}</div>
        <input
          className={submitted ? 'hidden' : 'bidding__input'}
          type='number'
          value={bid}
        ></input>
        <div className={submitted ? 'hidden' : 'bidding__submit'}>&#10003;</div>
      </div>
      <div className='user-inputs'>
        <button
          className={
            active ? 'btn btn__draw btn__draw-option' : 'btn btn__draw'
          }
        >
          Draw
        </button>
        <button className={!active ? 'btn__new btn__new-option' : 'btn__new'}>
          New Game?
        </button>
        <button
          className={active ? 'btn btn__end btn__end-option' : 'btn btn__end'}
        >
          END
        </button>
      </div>
      <div className='deck'>
        <img
          className='deck__img'
          src={require('../../img/deck.jpg')}
          alt='deck'
        />
      </div>
      <div className='player__value'>{PlayerValue}</div>
    </div>
  );
};

export default Playfield;
