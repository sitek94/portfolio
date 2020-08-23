import React from 'react';

import { container, grid, box, icon } from './Features.module.scss';

export default function Features() {
  return (
    <section className={container}>
      <div className={grid}>
        <div className={box}>
          <i className="feature-box__icon icon-basic-world"></i>
          <h3 className="heading-tertiary">Explore the World</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            officia unde. Quisquam, nisi dolor!
          </p>
        </div>

        <div className={box}>
          <i className="feature-box__icon icon-basic-compass"></i>
          <h3 className="heading-tertiary">Meet nature</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            officia unde. Quisquam, nisi dolor!
          </p>
        </div>

        <div className={box}>
          <i className="feature-box__icon icon-basic-map"></i>
          <h3 className="heading-tertiary">Find your way</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            officia unde. Quisquam, nisi dolor!
          </p>
        </div>

        <div className={box}>
          <i className="feature-box__icon icon-basic-heart"></i>
          <h3 className="heading-tertiary">Live healthier life</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            officia unde. Quisquam, nisi dolor!
          </p>
        </div>
      </div>
    </section>
  );
}
