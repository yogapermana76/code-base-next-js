import React from 'react';
import Link from 'next/link';
import classes from './NewsCard.module.css';

const NewsCard = ({ image, title, category, date, text, link }) => {
  return (
    <div className={classes.newsCard}>
      <div className={classes.imageBlock}>
        <div className={classes.innerBlock}>
          <img src={image} alt="Awesome Image" />
        </div>
      </div>
      <div className={classes.textBlock}>
        <div className={classes.metaInfo}>
          <span>{date}</span>
          <span>{category}</span>
        </div>
        <h3>
          <Link href={link}>
            <a>{title}</a>
          </Link>
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NewsCard;
