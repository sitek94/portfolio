import React from 'react';
import heroClasses from './Hero.module.scss';
import textClasses from '../styles/typography.module.scss';

export default function Hero() {
  return (
    <header className={heroClasses.header}>
        <div className={heroClasses.logoBox}>
            <img src="img/logo-white.png" alt="Logo" className={heroClasses.logo} />
        </div>

        <div className={heroClasses.textBox}>
            <h1 className={textClasses.primary}>
                <span className={textClasses.main}>Outdoors</span>
                <span className={textClasses.sub}>is where life happens</span>
            </h1>

            <a href="www.google.pl" className="btn btn--white btn--animated">Discover our tours</a>
        </div>
    </header>
  )
}