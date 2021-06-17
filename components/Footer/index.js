import React from 'react';
import classes from './Footer.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import KemluLogo from '@/images/footer/kemlu-logo.png';
import KemendagLogo from '@/images/footer/kemendag-logo.png';
import IndonesiaWonderfull from '@/images/footer/indonesia-wonderfull.png';
import ICPhone from '@/images/footer/phone-ic.svg';
import ICMessage from '@/images/footer/message-ic.svg';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <Col lg={5} md={6}>
            <div className="mb-3">
              <img className={classes.img} src={KemluLogo} className="mr-3" />
              <img
                className={classes.img}
                src={KemendagLogo}
                className="mr-3"
              />
              <img className={classes.img} src={IndonesiaWonderfull} />
            </div>
          </Col>
          <Col lg={7} md={6}>
            <div
              className={`${classes.footerMenus} float-lg-right float-md-right`}>
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
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={classes.footerBottom}>
              © 2021 Kementerian Luar Negeri Republik Indonesia. All Right
              Reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
