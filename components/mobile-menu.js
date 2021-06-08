import React, { Fragment, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Link from "next/link";
import { FooterBottomData, NavLinksData } from "@/data";
import { updateMenuStatus } from "@/redux/actions/layout";

const MobileMenu = () => {
  const { menuStatus } = useSelector(state => state.layout)
  const menuEl = useRef(null);
  const dispatch = useDispatch()

  const handleMenuClick = (e) => {
    e.preventDefault();
    dispatch(updateMenuStatus(!menuStatus))
  };
  return (
    <div className="mobile-menu animated fadeInLeft">
      <div className="mobile-menu__overlay" onClick={handleMenuClick}></div>
      <div className="mobile-menu__inner">
        <div className="mobile-menu__top">
          <h1 className="mobile-menu__logo">
            <a href="/">Printify</a>
          </h1>
          <a href="#" className="mobile-menu__close" onClick={handleMenuClick}>
            <i className="fa fa-times"></i>
          </a>
        </div>
        <nav className="mobile-menu__links" ref={menuEl}>
          <ul>
            {NavLinksData.map((links, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    undefined !== links.subItems ? "menu-item-has-children" : ""
                  }`}
                >
                  <Link href={links.url}>
                    <a>{links.name}</a>
                  </Link>
                  {undefined !== links.subItems ? (
                    <Fragment>
                      <button
                        onClick={(e) => {
                          menuEl.current
                            .querySelectorAll(".sub-menu")
                            .forEach((item) => {
                              item.classList.remove("show");
                            });

                          let clickedItem = e.currentTarget.parentNode;
                          clickedItem
                            .querySelector(".sub-menu")
                            .classList.toggle("show");
                        }}
                      >
                        <i className="fa fa-angle-down"></i>
                      </button>
                      <ul className="sub-menu">
                        {links.subItems.map((subLinks, index) => (
                          <li key={index}>
                            <Link href={subLinks.url}>
                              <a>{subLinks.name}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Fragment>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mobile-menu__text">
          Printify is a premium Template for Digital Agencies, Start Ups, Small
          Business and a wide range of other agencies.
        </div>
        <div className="mobile-menu__socials">
          {FooterBottomData.social.map(({ icon, url }, index) => {
            return (
              <a key={index} href={url} className={`${icon} hvr-pulse`}></a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
