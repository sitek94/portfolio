import React from 'react';
import cx from 'classnames'

import './layout.scss';

export default function MainLayout({ theme, children }) {
  return (
    <div className={cx(theme, "layout")}>
      {children}
    </div>
  )
}