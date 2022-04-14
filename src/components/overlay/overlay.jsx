import React, { useState } from 'react';

import './overlay.scss';

const Overlay = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  return (
    <div className={formSubmitted ? 'submitted overlay' : 'overlay'}>
      <form className='form'>
        <div className='form__inputs'>
          <label className='form__label'>
            First Name:
            <input
              className='form__input'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className='form__label'>
            Last Name:
            <input className='form__input' />
          </label>
          <label className='form__label'>
            UserName:
            <input className='form__input' />
          </label>
        </div>
        <p className='fyi'>*NOT REQUIRED*</p>
        <input
          onClick={(e) => {
            e.preventDefault();
            setFormSubmitted(true);
          }}
          type='submit'
          value='Submit'
          className='form__submit'
        />
      </form>
    </div>
  );
};

export default Overlay;
