const CheckVictor = (playerValue, dealerValue) => {
  if (playerValue > dealerValue && playerValue < 22) {
    playerVictory();
  }
  if (playerValue > dealerValue && playerValue > 21) {
    playerExceed();
  }
  if (dealerValue > playerValue && dealerValue < 22) {
    dealerVicory();
  }
  if (dealerValue > playerValue && dealerValue > 21) {
    dealerExceed();
  }
};

const playerVictory = () => {
  return console.log('Player win');
};

const playerExceed = () => {
  return console.log('Player exceeded 21');
};

const dealerVicory = () => {
  return console.log('Dealer victory');
};

const dealerExceed = () => {
  return console.log('Dealer exceeded 21');
};

export default CheckVictor;
