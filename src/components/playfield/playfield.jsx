import React from 'react';

import CheckValue from '../../helper/checkValue';
import GetCard from '../../helper/get-card';
import CheckVictor from '../../helper/checkVictor';
import CheckPlayer from '../../helper/checkPlayer';

import './playfield.scss';

class Playfield extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deckID: '',
      dealerValue: 0,
      dealerHand: [],
      playerValue: 0,
      playerHand: [],
      bank: 100,
      bid: 0,
      currentBid: 0,
      submitted: false,
      active: true,
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=14'
      );
      const json = await res.json();
      this.setState({ deckID: json.deck_id });
    } catch (error) {
      console.error(error);
    }
  }

  onBiddingChange(e) {
    if (this.state.bank - e.target.value >= 0 && e.target.value > 0) {
      this.setState({
        bid: e.target.value,
      });
    }
  }

  onBiddingSubmit() {
    this.setState({
      currentBid: this.state.bid,
      bank: this.state.bank - this.state.bid,
    });
    this.toggleSubmitted();
  }

  onNewGame() {
    if (this.state.bank < 1) {
      alert('Game Over! refresh the page to start anew');
      window.location.reload();
    }
    this.setState({
      dealerValue: 0,
      dealerHand: [],
      playerValue: 0,
      playerHand: [],
      bid: 0,
      currentBid: 0,
      active: true,
      submitted: false,
    });
  }

  async toggleSubmitted() {
    let res = await GetCard(this.state.deckID);
    let cardCode = res.data.cards[0].code;
    let cardVal = CheckValue(res.data.cards[0].value, this.state.dealerValue);

    this.setState({
      dealerHand: [...this.state.dealerHand, cardCode],
      dealerValue: this.state.dealerValue + cardVal,
    });
    this.setState({ submitted: !this.state.submitted });
  }

  onEndturn() {
    if (!this.state.submitted) {
      alert('PLEASE MAKE A VALID BET');
    } else {
      this.setState({ active: !this.state.active });
      this.dealerTurn();
    }
  }

  async onDraw() {
    if (this.state.currentBid > 0) {
      try {
        const response = await GetCard(this.state.deckID);
        const card = response.data.cards[0];
        let cardVal = CheckValue(card.value, this.state.playerValue);
        this.setState({
          playerHand: [...this.state.playerHand, card.code],
          playerValue: this.state.playerValue + cardVal,
        });
        let check = await CheckPlayer(this.state.playerValue);
        if (!check) {
          alert('Player exceeded 21');
          setTimeout(() => {
            this.onNewGame();
          }, 3000);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('MAKE A BET BEFORE PLAYING');
    }
  }

  async dealerTurn() {
    let playerVal = this.state.playerValue;
    let dealerVal = this.state.dealerValue;
    if (this.state.playerValue > 21) {
      CheckVictor();
    }
    if (playerVal >= dealerVal && dealerVal < 22) {
      let res = await GetCard(this.state.deckID);
      let cardCode = res.data.cards[0].code;
      let cardVal = CheckValue(res.data.cards[0].value, this.state.dealerValue);

      this.setState({
        dealerHand: [...this.state.dealerHand, cardCode],
        dealerValue: this.state.dealerValue + cardVal,
      });
      setTimeout(() => {
        if (this.state.dealerValue > this.state.playerValue) {
          let winner = CheckVictor(
            this.state.playerValue,
            this.state.dealerValue
          );
          if (winner === 'player') {
            this.setState({
              bank: this.state.bank + this.state.currentBid * 2,
            });
          }
        }
        this.dealerTurn();
      }, 1000);
    }
  }

  render() {
    return (
      <>
        <div className='dealer'>
          {this.state.dealerHand.map((i) => {
            return (
              <div key={i + Math.random()} className='card'>
                <img
                  src={`https://deckofcardsapi.com/static/img/${i}.png`}
                  alt={i}
                  className='card__img'
                />
              </div>
            );
          })}
        </div>
        <div className='playfield'>
          <div className='dealer__value'>{this.state.dealerValue}</div>
          <div className='bidding'>
            <div className='bidding__bank'>BANK: {this.state.bank}</div>
            <input
              className={this.state.submitted ? 'hidden' : 'bidding__input'}
              type='number'
              value={this.state.bid}
              min='0'
              max={this.state.bank}
              onChange={(e) => this.onBiddingChange(e)}
            />
            <div
              onClick={() => this.onBiddingSubmit()}
              className={this.state.submitted ? 'hidden' : 'bidding__submit'}
            >
              &#10003;
            </div>
          </div>
          <div className='user-inputs'>
            <button
              className={
                !this.state.active
                  ? 'btn btn__draw btn__draw-option'
                  : 'btn btn__draw'
              }
              onClick={() => this.onDraw()}
            >
              Draw
            </button>
            <button
              className={
                this.state.active ? 'btn__new btn__new-option' : 'btn__new'
              }
              onClick={() => this.onNewGame()}
            >
              Next Round?
            </button>
            <button
              className={
                !this.state.active
                  ? 'btn btn__end btn__end-option'
                  : 'btn btn__end'
              }
              onClick={() => this.onEndturn()}
            >
              END
            </button>
          </div>
          <div
            className='deck'
            onClick={() => console.log(this.state.dealerHand)}
          >
            <img
              className='deck__img'
              src={require('../../img/deck.jpg')}
              alt='deck'
            />
          </div>
          <div className='player__value'>{this.state.playerValue}</div>
        </div>
        <div className='player'>
          {this.state.playerHand.map((i) => {
            return (
              <div key={i + Math.random()} className='card'>
                <img
                  src={`https://deckofcardsapi.com/static/img/${i}.png`}
                  alt={i}
                  className='card__img'
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Playfield;
