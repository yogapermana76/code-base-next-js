import React from "react";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import HeaderOne from "@/components/header-one";

const BlogDetailsPage = () => {
  return (
    <Layout PageTitle="Blog Details">
      <HeaderOne />
      <PageHeader title="Blog Details" name="Blog Details" />
      <BlogDetails />
      <Footer />
    </Layout>
  );
};

export default BlogDetailsPage;
