import React, { Fragment } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { Col, Row } from 'react-bootstrap';
import classes from './Clean.module.css';
import Warehouse from '@/images/clean/warehouse.png';
import Building from '@/images/clean/building.png';
import Nature from '@/images/clean/nature.png';
import ReadMore from '@/images/clean/readMore.png';

const Clean = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <Fragment>
      {/* {isMobile ? null : <div className={classes['verticalLine']} />} */}
      <div className={classes['verticalLine']} />

      <section className="welcome-section sec-pad">
        <div className="thm-container">
          {isMobile ? (
            <div>
              <div>
                <h3 className={classes['titleSection']}>
                  Clean and clear
                  <br /> investment projects
                </h3>
                <p className={classes['descSection']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  vulputate nulla mauris, sed <br /> velit. Auctor morbi nulla
                  facilisis interdum est suspendisse tristique. Auctor amet quis
                  lorem <br /> laoreet mattis. Sagittis faucibus amet molestie
                  enim.
                </p>
              </div>
              <div
                className={`${classes['card']} row flex-nowrap overflow-auto`}>
                <Col className={classes['cardCol']} lg={4}>
                  <div className={classes['divImg']}>
                    <div className={classes['divReadMore']}>
                      <p className={classes['project']}>Project Name </p>
                      <p className={classes['title']}>
                        Development and <br /> Optimisation of Puspa Agro
                      </p>
                      <p className={classes['project']}>Project Name </p>
                      <p className={classes['title']}>Agriculture </p>
                      <p className={classes['project']}>Project Name </p>
                      <p className={classes['title']}>East Java </p>
                      <Row>
                        <div className="col-14">
                          <img
                            src={ReadMore}
                            className={classes['arrowReadMore']}
                          />
                        </div>
                        <div className="col-6">
                          <p className={classes['readMoreLink']}>Read more</p>
                        </div>
                      </Row>
                      <p></p>
                    </div>

                    <img className={classes['imgReadMore']} src={Nature} />
                  </div>
                </Col>
                <Col className={classes['cardCol']} lg={4}>
                  <div className={classes['divImg']}>
                    <img className={classes['img']} src={Warehouse} />
                  </div>
                </Col>
                <Col className={classes['cardCol']} lg={4}>
                  <div className={classes['divImg']}>
                    <img className={classes['img']} src={Building} />
                  </div>
                </Col>
              </div>
              <Link href={'/'}>
                <span className={classes['spanSeeMore']}>
                  <a className={classes['seeMore']}>See more projects</a>
                </span>
              </Link>
            </div>
          ) : (
            <div>
              <div className="text-center">
                <h3 className={classes['titleSection']}>
                  Clean and clear investment projects
                </h3>
                <p className={classes['descSection']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  vulputate nulla mauris, sed <br /> velit. Auctor morbi nulla
                  facilisis interdum est suspendisse tristique. Auctor amet quis
                  lorem <br /> laoreet mattis. Sagittis faucibus amet molestie
                  enim.
                </p>
              </div>
              <Row>
                <Col lg={4}>
                  <div className={classes['divImg']}>
                    <div className={classes['divReadMore']}>
                      <p className={classes['project']}>Project Name </p>
                      <p className={classes['title']}>
                        Development and <br /> Optimisation of Puspa Agro
                      </p>
                      <p className={classes['project']}>Project Name </p>
                      <p className={classes['title']}>Agriculture </p>
                      <p className={classes['project']}>Project Name </p>
                      <p className={classes['title']}>East Java </p>
                      <Row>
                        <Col lg={2}>
                          <img
                            src={ReadMore}
                            className={classes['arrowReadMore']}
                          />
                        </Col>
                        <Col lg={10}>
                          <p className={classes['readMoreLink']}>
                            Read more about the project
                          </p>
                        </Col>
                      </Row>
                      <p></p>
                    </div>

                    <img className={classes['imgReadMore']} src={Nature} />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className={classes['divImg']}>
                    <img className={classes['img']} src={Warehouse} />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className={classes['divImg']}>
                    <img className={classes['img']} src={Building} />
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Link href={'/'}>
                  <span className={classes['spanSeeMore']}>
                    <a className={classes['seeMore']}>See more projects</a>
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Clean;
