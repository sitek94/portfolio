import React from 'react';
import classes from './Foundation.module.scss';
import textClasses from '../styles/typography.module.scss';

export default function Foundation() {
  return (
    <section className={classes.Foundation}>
      <h2 className={textClasses.secondary}>About me</h2>

      <div className={classes.content}>
        <div className={classes.text}>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Self-taught with a strong foundation
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
        </div>
        <div className={classes.images}>
          <img alt="" />
        </div>
      </div>
    </section>
  );
}
