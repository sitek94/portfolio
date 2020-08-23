import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet="../images/logo-green-small-1x.png 1x, ../images/logo-green-small-2x.png 2x"
            media="(max-width: 37.5em)"
          />
          <img
            srcSet="../images/logo-green-1x.png 1x, ../images/logo-green-2x.png 2x"
            alt="Full logo"
            src="../images/logo-green-1x.png"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#homehome" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#homehome" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#homehome" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#homehome" className="footer__link">
                  Privacy
                </a>
              </li>
              <li className="footer__item">
                <a href="#homehome" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{' '}
            <a href="#homehome" className="footer__link">
              Maciek Sitkowski
            </a>{' '}
            for online course. Copyright &copy; Maciek Sitkowski 2020. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
