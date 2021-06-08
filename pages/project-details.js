import React from "react";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import ClientCarousel from "@/components/client-carousel";
import ProjectDetails from "@/components/project-details";
import HeaderOne from "@/components/header-one";

const ProjectDetailsPage = () => {
  return (
    <Layout PageTitle="Project Details">
      <HeaderOne />
      <PageHeader title="Nintey Nine You" name="Project Details" />
      <ProjectDetails />
      <ClientCarousel />
      <Footer />
    </Layout>
  );
};

export default ProjectDetailsPage;
