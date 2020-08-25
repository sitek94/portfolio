import React from 'react';

import './Card.scss';

export default function Card({
  variant,
  frontHeading,
  frontDetailsList,
  backDescription,
  backBtnText,
  backBtnHref,
}) {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${variant}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--${variant}`}>
            {frontHeading}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            {frontDetailsList.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <div className="card__cta">
          <div className="card__description-box">
            <p className="card__description-text">{backDescription}</p>
          </div>
          <a href={backBtnHref} className="btn btn--white">
            {backBtnText}
          </a>
        </div>
      </div>
    </div>
  );
}
