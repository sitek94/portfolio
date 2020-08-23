import React from 'react';

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__logo-box">
        <picture class="footer__logo">
          <source
            srcset="../images/logo-green-small-1x.png 1x, ../images/logo-green-small-2x.png 2x"
            media="(max-width: 37.5em)"
          />
          <img
            srcset="../images/logo-green-1x.png 1x, ../images/logo-green-2x.png 2x"
            alt="Full logo"
            src="../images/logo-green-1x.png"
          />
        </picture>
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <ul class="footer__list">
              <li class="footer__item">
                <a href="#homehome" class="footer__link">
                  Company
                </a>
              </li>
              <li class="footer__item">
                <a href="#homehome" class="footer__link">
                  Contact us
                </a>
              </li>
              <li class="footer__item">
                <a href="#homehome" class="footer__link">
                  Carrers
                </a>
              </li>
              <li class="footer__item">
                <a href="#homehome" class="footer__link">
                  Privacy
                </a>
              </li>
              <li class="footer__item">
                <a href="#homehome" class="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-1-of-2">
          <p class="footer__copyright">
            Built by{' '}
            <a href="#homehome" class="footer__link">
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
