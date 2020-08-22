import React from 'react';
import classes from './Header.module.scss';
import textClasses from '../styles/typography.module.scss';

import videoMp4 from '../images/bg-video.mp4';
import videoWebm from '../images/bg-video.webm';

import Button from '../components/Button';

export default function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.videoBox}>
        <video className={classes.video} autoPlay muted loop>
          <source src={videoMp4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
          Your browser is not supported
        </video>
      </div>

      {/* <div className={classes.logoBox}>
        <img src={logoImg} alt="Logo" className={classes.logo} />
      </div> */}

      <div className={classes.textBox}>
        <h1 className={textClasses.primary}>
          <span className={textClasses.main}>Maciek Sitkowski</span>
          <span className={textClasses.sub}>software engineer</span>
        </h1>
      </div>
      <Button color="white" href="#projects">See projects</Button>
    </header>
  );
}
