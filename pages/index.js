import React from 'react';
import Layout from '@/components/layout';
import AboutTwo from '@/components/about-two';
import ClientCarousel from '@/components/client-carousel';
import RecentProject from '@/components/recent-project';
import CallToActionTwo from '@/components/call-to-action-two';
import CallToActionThree from '@/components/call-to-action-three';
import AboutThree from '@/components/about-three';
import VideoDesignGuide from '@/components/video-design-guide';
import TeamOne from '@/components/team-one';
import FaqFeature from '@/components/faq-feature';
import TestimonialsOne from '@/components/testimonials-one';
import ServiceTwo from '@/components/service-two';
import HeaderOne from '@/components/header-one';
import SliderOne from '@/components/slider-one';

import Header from '@/components/Header/Header';
import Product from '@/components/Sections/Product/Product';
import Footer from '@/components/Footer/index';
import Wonderful from '@/components/Pages/Home/CleanHomepage';


const Home = () => {
  return (
    <Layout PageTitle="Home Page">
      {/* <HeaderOne /> */}
      <Header />
      <SliderOne />
      <Product />
      <Wonderful />
      <AboutTwo />
      <ServiceTwo />
      <TestimonialsOne />
      <FaqFeature />
      <CallToActionTwo />
      <TeamOne />
      <AboutThree />
      <VideoDesignGuide />
      <CallToActionThree />
      <RecentProject />
      <ClientCarousel />
      <Footer />
    </Layout>
  );
};

export default Home;
