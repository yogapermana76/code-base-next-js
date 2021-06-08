import React from "react";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import PricingOne from "@/components/pricing-one";
import ProgressOne from "@/components/progress-one";
import Footer from "@/components/footer";
import ContactOne from "@/components/contact-one";
import HeaderOne from "@/components/header-one";

const PricingPage = () => {
  return (
    <Layout PageTitle="Pricing Page">
      <HeaderOne />
      <PageHeader title="Our Pricing" name="Pricing" />
      <PricingOne />
      <ProgressOne />
      <ContactOne />
      <Footer />
    </Layout>
  );
};

export default PricingPage;
