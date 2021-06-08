import React from "react";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogOne from "@/components/blog-one";
import HeaderOne from "@/components/header-one";

const BlogPage = () => {
  return (
    <Layout PageTitle="Blog Page">
      <HeaderOne />
      <PageHeader title="Latest News" name="Latest News" />
      <BlogOne />
      <Footer />
    </Layout>
  );
};

export default BlogPage;
