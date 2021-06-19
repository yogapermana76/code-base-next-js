import ProductItems from './ProductItem/ProductItem';
import classes from './Product.module.css';

import useWindowSize from '../../../hooks/useWindowSize';
import { useEffect, useState } from 'react';

import halfCircleLogo from './assets/img/halfcircle-logo.svg';
import verticalTimeline from './assets/img/vertical-timeline.svg';

const CardProduct = () => {
  const size = useWindowSize();
  const [responsive, setResponsive] = useState({});

  const mobileWidth = 688;

  useEffect(() => {
    setResponsive({ ...responsive, currentSizeWidth: 688 });
    console.log(size);
  }, []);

  useEffect(() => {
    // setResponsive({ currentSizeWidth: size.width });
    if (size.width > mobileWidth) {
      if (responsive.currentSizeWidth === size.width) return;

      return setResponsive({ currentSizeWidth: size.width });
    }

    if (size.width < mobileWidth) {
      if (responsive.currentSizeWidth === size.width) return;

      return setResponsive({
        display: 'flex',
        float: 'left',
        overflow: 'scroll',
        height: '280px',
        maxWidth: '100%',
        zoom: '80%',
        paddingLeft: '10px',
        margin: '170px 0px 0px 50px',
        currentSizeWidth: size.width,
        h2Style: {
          position: 'absolute',
          float: 'left',
          marginTop: '280px',
        },
      });
    }
  }, [size.width, responsive, responsive.currentSizeWidth]);

  return (
    <section className={classes.productSection}>
      <i className={classes.timeline}>
        <img src={halfCircleLogo} alt="halfcircle-logo" />
      </i>
      <i className={classes.timeline}>
        <img src={verticalTimeline} alt="vertical-timeline" />
      </i>
      <h1>Product Showcase</h1>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis,
        aliquam cras neque nunc leo cursus elit. Massa feugiat malesuada
        malesuada turpis. Ultrices amet diam neque egestas nec, quam. Sed augue
        nulla nunc eu imperdiet. Arcu.
      </p>
      <div className={classes.featuredWrapper}>
        <h3>
          {size.width < mobileWidth ? 'Featured Products' : 'Top Products'}
        </h3>
        <div className={classes.productItemWrapper} style={{ ...responsive }}>
          <ProductItems className={classes.productWrapper} />
          <h4 style={{ ...responsive.h2Style }}>See more products</h4>
        </div>
      </div>
    </section>
  );
};

export default CardProduct;
