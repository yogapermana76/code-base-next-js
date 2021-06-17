import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import classes from './NewsCard.module.css';

const NewsCard = ({ image, title, category, date, text, link }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <div>
      {isMobile ? (
        <div className={`${classes.newCardMobile} media`}>
          <div className={classes.imageMobile}>
            <img className="img-fluid" src={image} alt="newsImg" />
          </div>
          <div className={`${classes.textBlockMobile} media-body`}>
            <div>
              <div className={classes.metaInfoMobile}>
                <span>{category}</span>
              </div>
              <h3>
                <Link href="#">
                  <a>{title}</a>
                </Link>
              </h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default NewsCard;
