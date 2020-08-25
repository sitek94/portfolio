import React from 'react';

import './About.scss';
import Composition from '../Composition';

export default function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Front end with a strong foundation
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Beginning of the journey
          </h3>
          <p className="paragraph">
            I started off with couple of Udemy courses about HTML and CSS. Then moved on to JavaScript. I finished another courses and wanted to move forward to learning React but when I started I felt overwhelmed, and realized that I don't really know that much about JavaScript and programming at all. I decided to take two steps back...
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Building a strong foundation
          </h3>
          <p className="paragraph">
            I finished CS50, where I learned the fundamentals of C, python, SQL and the computer science in general.
            I discovered free code camp and started building my own projects. Ever since I am active member of freeCodeCamp community, helping others and reinforcing my knowledge in the same time.
          </p>

          <a href="#home" className="btn-text">
            Learn more &rarr;
          </a>
        </div>

        <div className="col-1-of-2">
          <Composition />
        </div>
      </div>
    </section>
  );
}
