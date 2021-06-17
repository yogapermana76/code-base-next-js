import React from 'react';
import Link from 'next/link';
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
        <Link href="#">
          <a>
            <div className={classes.readMore}>Read More</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TimeLine;
