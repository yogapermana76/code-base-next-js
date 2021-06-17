import React from 'react';
import classes from './TimeLine.module.css';

const TimeLine = ({ styleName, timeLine }) => {
  const { image, title, description } = timeLine;
  return (
    <div
      className={`${classes.timelineItem} ${
        styleName && classes.timelineInverted
      }`}>
      <div
        className={
          styleName ? classes.timelineImageInverted : classes.timelineImage
        }>
        <img src={image} />
      </div>
      <div
        className={
          styleName ? classes.timelinePanelInverted : classes.timelinePanel
        }>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimeLine;
