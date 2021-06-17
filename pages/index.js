import React from 'react';
import Layout from '@/components/layout';
import Footer from '@/components/footer';
import Wonderful from '@/components/Pages/Home/CleanHomepage';
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

const Home = () => {
  return (
    <Layout PageTitle="Home Page">
      <HeaderOne />
      <SliderOne />
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
