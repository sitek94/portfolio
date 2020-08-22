import React from 'react';
import cx from 'classnames'
import classes from './Layout.module.scss';

export default function Layout({ theme, children }) {
  return (
    <div className={cx(classes.Layout, theme)}>
      {children}
    </div>
  )
}