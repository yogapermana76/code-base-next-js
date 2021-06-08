import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "./mobile-menu";

const Layout = ({ PageTitle, children }) => {
  const [scrollTop, setScrollTop] = useState(false);
  const { menuStatus } = useSelector(state => state.layout)
  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <Fragment>
      <Head>
        <title>{PageTitle} - Printify - Printing company NextJS Template</title>
      </Head>
      <div id="wrapper">{children}</div>

      {menuStatus ? <MobileMenu /> : null}
      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top scroll-to-target"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </Fragment>
  );
};

export default Layout;
