import React, { useState } from 'react';

import './dealer-hand.scss';

const DealerHand = () => {
  let [DealerHand, setDealerHand] = useState([0]);

  return (
    <div className='dealer'>
      <div className={DealerHand[0] ? 'card' : 'hidden'}>
        <div className={DealerHand[0] ? 'card' : 'hidden'}>
          <img
            className='card__img'
            src={
              DealerHand[0]
                ? `https://deckofcardsapi.com/static/img/${DealerHand[0]}.png`
                : ''
            }
            alt=''
          />
        </div>
      </div>
      <div className={DealerHand[1] ? 'card' : 'hidden'}>
        <div className={DealerHand[1] ? 'card' : 'hidden'}>
          <img
            className='card__img'
            src={
              DealerHand[1]
                ? `https://deckofcardsapi.com/static/img/${DealerHand[1]}.png`
                : ''
            }
            alt=''
          />
        </div>
      </div>
      <div className={DealerHand[2] ? 'card' : 'hidden'}>
        <div className={DealerHand[2] ? 'card' : 'hidden'}>
          <img
            className='card__img'
            src={
              DealerHand[2]
                ? `https://deckofcardsapi.com/static/img/${DealerHand[2]}.png`
                : ''
            }
            alt=''
          />
        </div>
      </div>
      <div className={DealerHand[3] ? 'card' : 'hidden'}>
        <div className={DealerHand[3] ? 'card' : 'hidden'}>
          <img
            className='card__img'
            src={
              DealerHand[3]
                ? `https://deckofcardsapi.com/static/img/${DealerHand[3]}.png`
                : ''
            }
            alt=''
          />
        </div>
      </div>
      <div className={DealerHand[4] ? 'card' : 'hidden'}>
        <div className={DealerHand[4] ? 'card' : 'hidden'}>
          <img
            className='card__img'
            src={
              DealerHand[4]
                ? `https://deckofcardsapi.com/static/img/${DealerHand[4]}.png`
                : ''
            }
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default DealerHand;
