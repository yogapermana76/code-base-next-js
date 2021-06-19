import React, { Fragment } from 'react';
import Link from 'next/link';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'react-bootstrap';
import classes from './Wonderful.module.css';
import ReadMore from '@/images/pages/home/clean/readMore.png';
import Feat1 from '@/images/pages/home/wonderfulIndonesia/feat1.png';
import Feat2 from '@/images/pages/home/wonderfulIndonesia/feat2.png';
import Feat3 from '@/images/pages/home/wonderfulIndonesia/feat3.png';
import Feat4 from '@/images/pages/home/wonderfulIndonesia/feat4.png';
import Feat5 from '@/images/pages/home/wonderfulIndonesia/feat5.png';
import Feat6 from '@/images/pages/home/wonderfulIndonesia/feat6.png';
import Exp1 from '@/images/pages/home/wonderfulIndonesia/exp1.png';
import Exp2 from '@/images/pages/home/wonderfulIndonesia/exp2.png';
import Exp3 from '@/images/pages/home/wonderfulIndonesia/exp3.png';
import Wonderful from '@/images/pages/home/wonderfulIndonesia/wonderful.png';

const Wonderfull = () => {
  return (
    <div>
      <div className={classes.verticalLine} />
      <MediaQuery maxWidth={425} minWidth={320}>
        <section className={`${classes.wonderful} ${classes.section}`}>
          <div className="container">
            <div className={classes.divTitle}>
              <h3 className={classes.titleSection}>Wonderful Indonesia</h3>
              <p className={classes.descSection}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                vulputate nulla mauris, sed <br /> velit. Auctor morbi nulla
                facilisis interdum est suspendisse tristique. Auctor amet quis
                lorem <br /> laoreet mattis. Sagittis faucibus amet molestie
                enim.
              </p>
              <h3 className={classes.featuredSection}>Featured Destinations</h3>
            </div>
            <div className={`${classes.card} row flex-nowrap overflow-auto`}>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <div className={classes.divReadMore}>
                    <p className={classes.titleFeat}>
                      Bali, Island of the Gods
                    </p>
                    <p className={classes.descFeat}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisis nisl ultrices netus sit et aenean pulvinar.{' '}
                    </p>
                    <Row>
                      <div className="col-3">
                        <img src={ReadMore} className={classes.arrowReadMore} />
                      </div>
                      <div>
                        <p className={classes.readMoreLink}>
                          Explore Destination
                        </p>
                      </div>
                    </Row>
                    <p></p>
                  </div>

                  <img className={classes.imgReadMore} src={Feat1} />
                </div>
              </Col>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat2} />
                </div>
              </Col>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat3} />
                </div>
              </Col>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat4} />
                </div>
              </Col>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat5} />
                </div>
              </Col>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat6} />
                </div>
              </Col>
            </div>
            <div>
              <Link href={'/'}>
                <span className={classes.spanSeeMore}>
                  <a className={classes.seeMore}>Explore more destinations</a>
                </span>
              </Link>
              <h3 className={classes.featuredSection}>Experience Indonesia</h3>
            </div>
            <div className={`${classes.card} row flex-nowrap overflow-auto`}>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp1} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Uluwatu Kecak Fire Dance
                    </p>
                    <Row>
                      <div className="col-6">
                        <p className={classes.categoryExperience}>
                          Events and Festivals
                        </p>
                      </div>
                      <div className="col-6">
                        <p className={classes.placeExperience}>Uluwutu, Bali</p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp2} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Borobudur Temple Tour
                    </p>
                    <Row>
                      <div div className="col-6">
                        <p className={classes.categoryExperience}>
                          Arts and Culture
                        </p>
                      </div>
                      <div className="col-6">
                        <p className={classes.placeExperience}>
                          Magelang, Central Java
                        </p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp3} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Borobudur Temple Tour
                    </p>
                    <Row>
                      <div className="col-6">
                        <p className={classes.categoryExperience}>
                          Arts and Culture
                        </p>
                      </div>
                      <div className="col-6">
                        <p className={classes.placeExperience}>
                          Magelang, Central Java
                        </p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp1} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Uluwatu Kecak Fire Dance
                    </p>
                    <Row>
                      <div className="col-6">
                        <p className={classes.categoryExperience}>
                          Events and Festivals
                        </p>
                      </div>
                      <div className="col-6">
                        <p className={classes.placeExperience}>Uluwutu, Bali</p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link href={'/'}>
                <span className={classes.spanSeeMore}>
                  <a className={classes.seeMore}>Explore more experience</a>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </MediaQuery>
      <MediaQuery maxWidth={768} minWidth={426}>
        <img src={Wonderful} className={classes.imgWonderful} />
        <section className={`${classes.wonderful} ${classes.section}`}>
          <div className={classes.containerModify}>
            <div className={classes.textCenter}>
              <h3 className={classes.titleSection}>Wonderful Indonesia</h3>
              <p className={classes.descSection}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                vulputate nulla mauris, sed <br /> velit. Auctor morbi nulla
                facilisis interdum est suspendisse tristique. Auctor amet quis
                lorem <br /> laoreet mattis. Sagittis faucibus amet molestie
                enim.
              </p>
              <h3 className={classes.featuredSection}>Featured Destinations</h3>
            </div>
            <div className={`${classes.card} row flex-nowrap overflow-auto`}>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <div className={classes.divReadMore}>
                    <p className={classes.titleFeat}>
                      Bali, Island of the Gods
                    </p>
                    <p className={classes.descFeat}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisis nisl ultrices netus sit et aenean pulvinar.{' '}
                    </p>
                    <Row>
                      <div className="col-3">
                        <img src={ReadMore} className={classes.arrowReadMore} />
                      </div>
                      <div>
                        <p className={classes.readMoreLink}>
                          Explore Destination
                        </p>
                      </div>
                    </Row>
                    <p></p>
                  </div>

                  <img className={classes.imgReadMore} src={Feat1} />
                </div>
              </Col>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat2} />
                </div>
              </Col>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat3} />
                </div>
              </Col>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat4} />
                </div>
              </Col>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat5} />
                </div>
              </Col>
              <Col className={classes.cardCol} lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat6} />
                </div>
              </Col>
            </div>
            <div className={classes.textCenter}>
              <Link href={'/'}>
                <span className={classes.spanSeeMore}>
                  <a className={classes.seeMore}>Explore more destinations</a>
                </span>
              </Link>
              <h3 className={classes.featuredSection}>Experience Indonesia</h3>
            </div>
            <div className={`${classes.card} row flex-nowrap overflow-auto`}>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp1} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Uluwatu Kecak Fire Dance
                    </p>
                    <Row>
                      <div className="col-6">
                        <p className={classes.categoryExperience}>
                          Events and Festivals
                        </p>
                      </div>
                      <div className="col-6">
                        <p className={classes.placeExperience}>Uluwutu, Bali</p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp2} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Borobudur Temple Tour
                    </p>
                    <Row>
                      <div div className="col-6">
                        <p className={classes.categoryExperience}>
                          Arts and Culture
                        </p>
                      </div>
                      <div className="col-6">
                        <p className={classes.placeExperience}>
                          Magelang, Central Java
                        </p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp3} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Borobudur Temple Tour
                    </p>
                    <Row>
                      <div className="col-6">
                        <p className={classes.categoryExperience}>
                          Arts and Culture
                        </p>
                      </div>
                      <div className="col-6">
                        <p className={classes.placeExperience}>
                          Magelang, Central Java
                        </p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp1} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Uluwatu Kecak Fire Dance
                    </p>
                    <Row>
                      <div className="col-6">
                        <p className={classes.categoryExperience}>
                          Events and Festivals
                        </p>
                      </div>
                      <div className="col-6">
                        <p className={classes.placeExperience}>Uluwutu, Bali</p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.textCenter}>
              <Link href={'/'}>
                <span className={classes.spanSeeMore}>
                  <a className={classes.seeMore}>Explore more experience</a>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <img src={Wonderful} className={classes.imgWonderful} />
        <section className={`${classes.wonderful} ${classes.section}`}>
          <div className={classes.containerModify}>
            <div className={classes.textCenter}>
              <h3 className={classes.titleSection}>Wonderful Indonesia</h3>
              <p className={classes.descSection}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                vulputate nulla mauris, sed <br /> velit. Auctor morbi nulla
                facilisis interdum est suspendisse tristique. Auctor amet quis
                lorem <br /> laoreet mattis. Sagittis faucibus amet molestie
                enim.
              </p>
              <h3 className={classes.featuredSection}>Featured Destinations</h3>
            </div>
            <Row>
              <Col lg={4}>
                <div className={classes.divImg}>
                  <div className={classes.divReadMore}>
                    <p className={classes.titleFeat}>
                      Bali, Island of the Gods
                    </p>
                    <p className={classes.descFeat}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisis nisl ultrices netus sit et aenean pulvinar.{' '}
                    </p>
                    <Row>
                      <Col lg={2}>
                        <img src={ReadMore} className={classes.arrowReadMore} />
                      </Col>
                      <Col lg={10}>
                        <p className={classes.readMoreLink}>
                          Explore Destination
                        </p>
                      </Col>
                    </Row>
                    <p></p>
                  </div>

                  <img className={classes.imgReadMore} src={Feat1} />
                </div>
              </Col>
              <Col lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat2} />
                </div>
              </Col>
              <Col lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat3} />
                </div>
              </Col>
              <Col lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat4} />
                </div>
              </Col>
              <Col lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat5} />
                </div>
              </Col>
              <Col lg={4}>
                <div className={classes.divImg}>
                  <img className={classes.img} src={Feat6} />
                </div>
              </Col>
            </Row>
            <div className={classes.textCenter}>
              <Link href={'/'}>
                <span className={classes.spanSeeMore}>
                  <a className={classes.seeMore}>Explore more destinations</a>
                </span>
              </Link>
              <h3 className={classes.featuredSection}>Experience Indonesia</h3>
            </div>
            <Row>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp1} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Uluwatu Kecak Fire Dance
                    </p>
                    <Row>
                      <Col lg={6}>
                        <p className={classes.categoryExperience}>
                          Events and Festivals
                        </p>
                      </Col>
                      <Col lg={6}>
                        <p className={classes.placeExperience}>Uluwutu, Bali</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp2} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Borobudur Temple Tour
                    </p>
                    <Row>
                      <Col lg={6}>
                        <p className={classes.categoryExperience}>
                          Arts and Culture
                        </p>
                      </Col>
                      <Col lg={6}>
                        <p className={classes.placeExperience}>
                          Magelang, Central Java
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp3} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Borobudur Temple Tour
                    </p>
                    <Row>
                      <Col lg={6}>
                        <p className={classes.categoryExperience}>
                          Arts and Culture
                        </p>
                      </Col>
                      <Col lg={6}>
                        <p className={classes.placeExperience}>
                          Magelang, Central Java
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className={`${classes.modifyCard}  card-block mx-2`}>
                <div className={classes.divImgExperience}>
                  <img className={classes.imgExperience} src={Exp1} />
                  <div className={classes.divExperience}>
                    <p className={classes.experienceTitle}>
                      Uluwatu Kecak Fire Dance
                    </p>
                    <Row>
                      <Col lg={6}>
                        <p className={classes.categoryExperience}>
                          Events and Festivals
                        </p>
                      </Col>
                      <Col lg={6}>
                        <p className={classes.placeExperience}>Uluwutu, Bali</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Row>
            <div className={classes.textCenter}>
              <Link href={'/'}>
                <span className={classes.spanSeeMore}>
                  <a className={classes.seeMore}>Explore more experience</a>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </MediaQuery>
    </div>
  );
};

export default Wonderfull;
