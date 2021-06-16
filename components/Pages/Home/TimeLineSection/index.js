import React from 'react';
import Link from 'next/link';
import {
  Accessible,
  AccountCircle,
  AddShoppingCart,
  EventSeat,
  Tablet,
} from '@material-ui/icons';
import { Container, Row, Col } from 'react-bootstrap';
import TimeLine from '@/components/TimeLine';
import VisitorIC from '@/images/pages/home/visitor-ic.svg';
import ExhibitorIC from '@/images/pages/home/exhibitor-ic.svg';
import InvestorIC from '@/images/pages/home/investor-ic.svg';
import ArrowIC from '@/images/pages/home/arrow-ic.svg';
import classes from './TimeLineSection.module.css';

const timeLineData = [
  {
    image: 'https://via.placeholder.com/128x128',
    time: '30 NOV, 1981',
    title: 'Established',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    image: 'https://via.placeholder.com/208x208',
    time: '20 APRIL, 1982',
    title: 'Completed first 50 projects',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,",
  },
  {
    image: 'https://via.placeholder.com/150x150',
    time: '11 MAY, 1983',
    title: 'Took over JIMBA INC',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    time: '18 SEPT, 1984',
    title: 'Best builder award from usa builder board',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    image: 'https://via.placeholder.com/150x150',
    time: '30 NOV, 1985',
    title: 'completed first 100 projects',
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
  },
];

const TimeLineSection = () => {
  return (
    <section className={classes.timelineSection}>
      <Container>
        <Row>
          <Col>
            <div className={classes.titleDesc}>
              <h3 className={classes.title}>
                Welcome to Indonesia, <br /> Asia’s next economic powerhouse
              </h3>
              <p className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                vulputate nulla mauris, sed velit. Auctor morbi nulla facilisis
                interdum est suspendisse tristique. Auctor amet quis lorem
                laoreet mattis. Sagittis faucibus amet molestie enim.
              </p>
            </div>
            <div className={classes.timelineWrap}>
              <TimeLine timeLine={timeLineData[1]}>
                <EventSeat />
              </TimeLine>
              <TimeLine styleName="inverted" timeLine={timeLineData[1]}>
                <Tablet />
              </TimeLine>
              <TimeLine timeLine={timeLineData[2]}>
                <Accessible />
              </TimeLine>
              <TimeLine styleName="inverted" timeLine={timeLineData[3]}>
                <AccountCircle />
              </TimeLine>
              <TimeLine timeLine={timeLineData[4]}>
                <AddShoppingCart />
              </TimeLine>
            </div>
          </Col>
        </Row>

        <div>
          <h3 className={classes.subTitle}>What we can do for you</h3>
          <Row>
            <Col lg={4} className={`${classes.visitorItem}`}>
              <img src={VisitorIC} />
              <h3 className={classes.visitorItemTitle}>For Visitors</h3>
              <p>
                Browse and find the perfect product that suits your business
                needs
              </p>
              <div>
                <Link href="#">
                  <a>
                    <span
                      className={`${classes.learnMoreArrow} rounded-circle`}>
                      <img src={ArrowIC} />
                    </span>
                    <span className={classes.learnMore}>Learn more</span>
                  </a>
                </Link>
              </div>
            </Col>
            <Col lg={4} className={`${classes.visitorItem}`}>
              <img src={ExhibitorIC} />
              <h3 className={classes.visitorItemTitle}>For Exhibitors</h3>
              <p>
                Learn how you can promote your products for trade to countries
                across the globe
              </p>
              <div>
                <Link href="#">
                  <a>
                    <span
                      className={`${classes.learnMoreArrow} rounded-circle`}>
                      <img src={ArrowIC} />
                    </span>
                    <span className={classes.learnMore}>Learn more</span>
                  </a>
                </Link>
              </div>
            </Col>
            <Col lg={4} className={`${classes.visitorItem}`}>
              <img src={InvestorIC} />
              <h3 className={classes.visitorItemTitle}>For Investors</h3>
              <p>
                Search and find the next big project through a secured,
                monitored investment channel with TTI
              </p>
              <div>
                <Link href="#">
                  <a>
                    <span
                      className={`${classes.learnMoreArrow} rounded-circle`}>
                      <img src={ArrowIC} />
                    </span>
                    <span className={classes.learnMore}>Learn more</span>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default TimeLineSection;
