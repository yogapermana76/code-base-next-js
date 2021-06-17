import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import NewsCard from '@/components/NewsCard/index';
import LatestNewsImg1 from '@/images/pages/home/latestNews/latestNews1.jpg';
import LatestNewsImg2 from '@/images/pages/home/latestNews/latestNews2.jpg';
import LatestNewsImg3 from '@/images/pages/home/latestNews/latestNews3.jpg';
import classes from './LatestNews.module.css';

const LATES_NEWS_DATA = [
  {
    image: LatestNewsImg1,
    category: 'INA-LAC News',
    date: '1 May 2021',
    title: 'Pre and post launch mobile app marketing pitfalls to avoid',
    text: 'There are many variations of passages of available but majority have alteration in some by inject humour or random words.',
    link: '/news-details',
  },
  {
    image: LatestNewsImg2,
    category: 'INA-LAC News',
    date: '1 May 2021',
    title: 'Social currency high perfor- mance keywords or',
    text: 'There are many variations of passages of available but majority have alteration in some by inject humour or random words.',
    link: '/news-details',
  },
  {
    image: LatestNewsImg3,
    category: 'INA-LAC News',
    date: '1 May 2021',
    title: 'Prioritize these line items quarterly sales are at ',
    text: 'There are many variations of passages of available but majority have alteration in some by inject humour or random words.',
    link: '/news-details',
  },
];

const LatesNews = () => {
  return (
    <section className={classes.latestNews}>
      <Container>
        <h3 className={`${classes.titleSection} text-sm-left text-lg-center`}>
          Latest News
        </h3>
        <Row>
          {LATES_NEWS_DATA.map(
            ({ image, date, title, category, text, link }, index) => (
              <Col key={`news-card-${index}`} lg={4}>
                <NewsCard
                  image={image}
                  date={date}
                  category={category}
                  title={title}
                  text={text}
                  link={link}
                />
              </Col>
            ),
          )}
        </Row>
        <div className="text-sm-left text-md-center text-lg-center">
          <Link href="#">
            <a>
              <h3 className={`${classes.seeMore}`}>See More News</h3>
            </a>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default LatesNews;
