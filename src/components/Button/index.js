import React from 'react';
import './button.scss';
import cx from 'classnames';

export default function Button({ className, white, green, animated, children, ...props }) {
  const classNames = cx({
    "btn": true,
    "btn--white": white,
    "btn--green": green,
    "btn--animated": animated,
    className
  })

  return (
    <a {...props} className={classNames}>{children}</a>
  )
}