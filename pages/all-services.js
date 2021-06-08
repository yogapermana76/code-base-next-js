import React from "react";
import ClientCarousel from "@/components/client-carousel";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import ServiceOne from "@/components/service-one";
import HeaderOne from "@/components/header-one";

const AllServices = () => {
  return (
    <Layout PageTitle="All Services">
      <HeaderOne />
      <PageHeader title="All Services" name="Services" />
      <ServiceOne />
      <ClientCarousel />
      <Footer />
    </Layout>
  );
};

export default AllServices;
