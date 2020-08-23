import React from 'react';

import Composition from '../Composition';
import { container, grid } from './About.module.scss';


export default function About() {
  return (
    <section className={container}>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exiting tours for adventurous people
        </h2>
      </div>

      <div className={grid}>
        <div className="">
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

          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>

        <div>
          <Composition />
        </div>
      </div>
    </section>
  );
}
