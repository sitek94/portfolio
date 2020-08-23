import React from 'react';

export default function About() {
  return (
    <section class="section-about">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Exiting tours for adventurous people
                </h2>
            </div>

            <div class="row">

                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">Some adventure in the forest</h3>
                    <p class="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam natus ullam provident nam fuga. Amet et, earum officiis qui ducimus error quos. Itaque id, harum deserunt eaque dolor voluptatum nostrum!
                    </p>
                    
                    <h3 class="heading-tertiary u-margin-bottom-small">Get ready to fall in love with pandas</h3>
                    <p class="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora accusamus placeat atque natus eum expedita eveniet officia perspiciatis quidem, quos a, vero adipisci delectus reprehenderit praesentium officiis? Voluptatum, officiis?
                    </p>
                    
                    <a href="#" class="btn-text">Learn more &rarr;</a>
                </div>

                <div class="col-1-of-2">
                    <div class="composition">
                        <img
                            srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            src="img/nat-1-large.jpg"
                            class="composition__photo composition__photo--p1"
                            alt="1" />
                        <img
                            srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            src="img/nat-2-large.jpg"
                            class="composition__photo composition__photo--p2"
                            alt="2" />
                        <img
                            srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            src="img/nat-3-large.jpg"
                            class="composition__photo composition__photo--p3"
                            alt="3" />
                        <img src="img/nat-1-large.jpg" alt="1" class="composition__photo composition__photo--p1" />
                        <img src="img/nat-2-large.jpg" alt="2" class="composition__photo composition__photo--p2" />
                        <img src="img/nat-3-large.jpg" alt="3" class="composition__photo composition__photo--p3" />
                    </div>
                </div>

            </div>
        </section>
  )
}