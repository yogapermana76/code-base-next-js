import React, { Fragment } from 'react';
import Link from 'next/link';
import classes from './Footer.module.css';
import { Col, Row } from 'react-bootstrap';
import KemluLogo from '@/images/footer/kemlu-logo.png';
import KemendagLogo from '@/images/footer/kemendag-logo.png';
import IndonesiaWonderfull from '@/images/footer/indonesia-wonderfull.png';
import ICHome from '@/images/footer/home-ic.svg';
import ICPhone from '@/images/footer/phone-ic.svg';
import ICMessage from '@/images/footer/message-ic.svg';

const Footer = () => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <div className="thm-container">
          <Row>
            <Col lg={5}>
              <div className="mb-3">
                <img src={KemluLogo} className="mr-3" />
                <img src={KemendagLogo} className="mr-3" />
                <img src={IndonesiaWonderfull} />
              </div>
              <div>
                <h1>KEMENTERIAN LUAR NEGERI REPUBLIK INDONESIA</h1>
                <div className={classes['address-footer']}>
                  <div className={classes['address-detail']}>
                    <img src={ICHome} />
                    <span>
                      Jl. Taman Pejambon No. 6, Jakarta Pusat, DKI Jakarta 10110
                      Indonesia
                    </span>
                  </div>
                  <div className={classes['address-detail']}>
                    <img src={ICPhone} />
                    <span>(+62) 21 344 1508</span>
                  </div>
                  <div className={classes['address-detail']}>
                    <img src={ICMessage} />
                    <span>info@ina-lac.com</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7} className={`${classes['footer-menus']} float-right`}>
              <div className={`${classes['footer-widget']}`}>
                <ul>
                  <li>
                    <Link href="#">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={`${classes['footer-widget']}`}>
                <ul>
                  <li>
                    <Link href="#">
                      <a>Trade</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Investment</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Tourisme</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={`${classes['footer-widget']}`}>
                <ul>
                  <li>
                    <Link href="#">
                      <a>Regional Cluster</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Publications</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className={classes['footer-bottom']}>
        © 2021 Kementerian Luar Negeri Republik Indonesia. All Right Reserved.
      </div>
    </Fragment>
  );
};

export default Footer;
