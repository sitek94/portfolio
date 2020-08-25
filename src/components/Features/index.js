import React from 'react';
import './Features.scss';

import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

function Feature({ heading, list, icon }) {
  return (
    <div className="feature-box">
      <div className="feature-box__icon">{icon}</div>
      <h3 className="heading-tertiary">{heading}</h3>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <Feature
            icon={<FaHtml5 />}
            heading="HTML"
            list={['Semantics', 'Accessibility', 'Forms', 'Validations']}
          />
        </div>

        <div className="col-1-of-4">
          <Feature
            icon={<FaCss3Alt />}
            heading="CSS"
            list={['CSS Grid', 'Flex box', 'SASS/SCSS', 'Responsive Design']}
          />
        </div>

        <div className="col-1-of-4">
          <Feature
            icon={<SiJavascript />}
            heading="JavaScript"
            list={['DOM Manipulation', 'ES6+', 'AJAX', 'Modular JavaScript']}
          />
        </div>

        <div className="col-1-of-4">
          <Feature
            icon={<FaReact />}
            heading="React"
            list={['Hooks', 'React Router', 'Redux', 'Material UI']}
          />
        </div>
      </div>
    </section>
  );
}
