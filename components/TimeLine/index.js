import React from 'react';
import classes from './TimeLine.module.css';

const TimeLine = ({ styleName, timeLine, children }) => {
  const { time, title, description } = timeLine;
  return (
    <div
      className={`${classes.timelineItem} ${
        styleName && classes.timelineInverted
      }`}>
      <div
        className={
          styleName ? classes.timelineTimeInverted : classes.timelineTime
        }>
        {time}
      </div>
      {/* <div
        className={`${
          styleName ? classes.timelineBadgeInverted : classes.timelineBadge
        } bg-primary`}>
        {children}
      </div> */}
      <div
        className={
          styleName ? classes.timelinePanelInverted : classes.timelinePanel
        }>
        <h4 className="text-primary">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimeLine;
