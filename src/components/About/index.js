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
          <Composition />
        </div>
      </div>
    </section>
  );
}
