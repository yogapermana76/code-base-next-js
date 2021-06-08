import React from "react";
import ContactOne from "@/components/contact-one";
import Footer from "@/components/footer";
import GoogleMap from "@/components/google-map";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";

const Contact = () => {
  return (
    <Layout PageTitle="Contact Page">
      <HeaderOne />
      <GoogleMap extraClassName="contact-page" />
      <ContactOne />
      <Footer />
    </Layout>
  );
};

export default Contact;
