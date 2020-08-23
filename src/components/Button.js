import React from 'react';
import cx from 'classnames';


export default function Button({ color, className, children, ...props }) {
  return (
    <a {...props} className={cx(classes.Button, className, classes[color])}>
      {children}
    </a>
  );
}
