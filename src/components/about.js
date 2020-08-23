import React from 'react';

export default function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Exiting tours for adventurous people</h2>
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
              srcSet="../images/nat-1.jpg 300w, ../images/nat-1-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              src="../images/nat-1-large.jpg"
              className="composition__photo composition__photo--p1"
              alt="1"
            />
            <img
              srcSet="../images/nat-2.jpg 300w, ../images/nat-2-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              src="../images/nat-2-large.jpg"
              className="composition__photo composition__photo--p2"
              alt="2"
            />
            <img
              srcSet="../images/nat-3.jpg 300w, ../images/nat-3-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              src="../images/nat-3-large.jpg"
              className="composition__photo composition__photo--p3"
              alt="3"
            />
            <img
              src="../images/nat-1-large.jpg"
              alt="1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="../images/nat-2-large.jpg"
              alt="2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="../images/nat-3-large.jpg"
              alt="3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
