import React from 'react';
import cx from 'classnames';

import classes from './Button.module.scss';

export default function Button({ color, className, children, ...props }) {
  console.log(color);
  console.log(props);
  return (
    <a {...props} className={cx(classes.Button, className, classes[color])}>
      {children}
    </a>
  );
}
