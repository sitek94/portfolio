import React from 'react';
import './button.scss';
import cx from 'classnames';

export default function Button({ white, green, animated, children, ...props }) {
  const className = cx({
    "btn": true,
    "btn--white": white,
    "btn--green": green,
    "btn--animated": animated
  })

  return (
    <a {...props} className={className}>{children}</a>
  )
}