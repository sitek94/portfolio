import React from 'react';

import './Composition.scss';

import cs50Light from '../../images/cs50-light-theme.png';
import fccLight from '../../images/fcc-light-theme.png';
import udemy from '../../images/udemy.png';

export default function Composition() {
  return (
    <div className="composition">
      <img
        src={cs50Light}
        alt="1"
        className="composition__photo composition__photo--p1"
      />
      <img
        src={fccLight}
        alt="2"
        className="composition__photo composition__photo--p2"
      />
      <img
        src={udemy}
        alt="3"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
}
