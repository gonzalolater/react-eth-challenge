import React from 'react';
import Card from './Card';

const Experience = ({ experience }) => {
  return (
    <Card>
      <h2 className="Experience-title">Experience</h2>
      <div className=".Experience-item"></div>
      <div className=".Experience-item"></div>
      <div className=".Experience-item"></div>

      <ul>
        {experience &&
          experience.map((item) => {
            return (
              <li className=".Experience-item" key={item.date}>
                <div>
                  <h3 className=".Experience-item">{item.company}</h3>
                  <p className=".Experience-item">{item.jobTitle}</p>
                  <h4 className=".Experience-item">{`${item.startDate}/${item.endDate}`}</h4>
                  <p className=".Experience-item">{item.jobDescription}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </Card>
  );
};

export default Experience;
