import React from 'react';

import './Header.scss';

import videoMp4 from '../../images/bg-video.mp4';
import videoWebm from '../../images/bg-video.webm';

export default function Header() {
  return (
    <header className="header">
      <div className="header__video-box">
        <video className="header__video" autoPlay muted loop>
          <source src={videoMp4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
          Your browser is not supported
        </video>
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Maciek Sitkowski</span>
          <span className="heading-primary--sub">front end engineer</span>
        </h1>

        <a href="#homehome" className="btn btn--white btn--animated">
          See projects
        </a>
      </div>
    </header>
  );
}
