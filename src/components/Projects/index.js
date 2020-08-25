import React from 'react';

import './Projects.scss';

import Card from '../Card';

export default function Projects() {
  return (
    <section className="section-projects">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Projects portfolio</h2>
      </div>

      <div className="section-projects__grid">
        <Card
          variant="2"
          frontHeading="JavaScript Calculator"
          frontDetailsList={["CSS | SASS", "React", "React Hooks", "JEST"]}
          backBtnText="Source Code"
          backBtnHref="#popup"
          backDescription="JavaScript Calculator using immediate execution logic."
        />

        <Card
          variant="3"
          frontHeading="Pomodoro Clock"
          frontDetailsList={["React | React Hooks", "Material UI", "OAuth2", "Firebase"]}
          backBtnText="Source Code"
          backBtnHref="#popup"
          backDescription="JavaScript Calculator using immediate execution logic."
        />

        <Card
          variant="1"
          frontHeading="Task Manager"
          frontDetailsList={["React | Redux", "Material UI", "OAuth2", "Firebase"]}
          backBtnText="Source Code"
          backBtnHref="#popup"
          backDescription="JavaScript Calculator using immediate execution logic."
        />
        
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#home" className="btn btn--green">
          See all projects
        </a>
      </div>
    </section>
  );
}
