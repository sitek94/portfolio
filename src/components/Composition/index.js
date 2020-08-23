import React from 'react';
import cx from 'classnames';

import img_cs50 from '../../images/cs50.png';
import img_udemy from '../../images/udemy.png';
import img_fcc from '../../images/ffc.png';

import { composition, photo, p1, p2, p3} from './Composition.module.scss'

export default function Composition() {
  return (
    <div className={composition}>
      <img
        src={img_cs50}
        alt="1"
        className={cx(photo, p1)}
      />
      <img
        src={img_udemy}
        alt="2"
        className={cx(photo, p2)}
      />
      <img
        src={img_fcc}
        alt="3"
        className={cx(photo, p3)}
      />
    </div>
  );
}
