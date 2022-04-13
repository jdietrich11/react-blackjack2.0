import React from 'react';

import './player-hand.scss';

const PlayerHand = (code) => {
  let array = code;
  return (
    <div className='player'>
      {
        () =>
          array.map(function (array) {
            console.log(array);
          })
        // () =>
        // Array.map((code) => (
        //   <div className='card'>
        //     <img
        //       className='card__img'
        //       src={`https://deckofcardsapi.com/static/img/${code}.png`}
        //       alt={code}
        //     />
        //   </div>
        // ))
      }
    </div>
  );
};

export default PlayerHand;
