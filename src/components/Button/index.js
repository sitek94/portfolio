import React from 'react';
import cx from 'classnames';

export default function Button({ className, children, ...props }) {
  return (
    <a {...props} className={cx("btn", className)}>{children}</a>
  )
}