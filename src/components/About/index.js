import React from 'react';

import './About.scss';

import cs50Light from '../../images/cs50-light-theme.png';
import fccLight from '../../images/fcc-light-theme.png';
import udemy from '../../images/udemy.png';

export default function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">My journey from customer service to front end</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Some adventure in the forest
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam natus
            ullam provident nam fuga. Amet et, earum officiis qui ducimus error
            quos. Itaque id, harum deserunt eaque dolor voluptatum nostrum!
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Get ready to fall in love with pandas
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            tempora accusamus placeat atque natus eum expedita eveniet officia
            perspiciatis quidem, quos a, vero adipisci delectus reprehenderit
            praesentium officiis? Voluptatum, officiis?
          </p>

          <a href="#home" className="btn-text">
            Learn more &rarr;
          </a>
        </div>

        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={cs50Light}
              alt="1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={fccLight}
              alt="2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={udemy}
              alt="3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
