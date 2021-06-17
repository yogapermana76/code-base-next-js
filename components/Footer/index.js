import React, { Fragment } from 'react';
import classes from './Footer.module.css';
import { Col, Row } from 'react-bootstrap';
import KemluLogo from '@/images/footer/kemlu-logo.png';
import KemendagLogo from '@/images/footer/kemendag-logo.png';
import IndonesiaWonderfull from '@/images/footer/indonesia-wonderfull.png';
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
            </Col>
            <Col lg={7} className={`${classes.footerMenus} float-right`}>
              <div className={classes.addressFooter}>
                <h3>KEMENTERIAN LUAR NEGERI REPUBLIK INDONESIA</h3>
                <div className={classes.addressDetail}>
                  <img src={ICPhone} />
                  <span>(+62) 21 344 1508</span>
                </div>
                <div className={classes.addressDetail}>
                  <img src={ICMessage} />
                  <span>info@ina-lac.com</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className={classes.footerBottom}>
        © 2021 Kementerian Luar Negeri Republik Indonesia. All Right Reserved.
      </div>
    </Fragment>
  );
};

export default Footer;
