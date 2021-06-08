import React from "react";
import Error from "@/components/error";
import Layout from "@/components/layout";

const ErrorPage = () => {
  return (
    <Layout PageTitle="Error 404 Page">
      <Error />
    </Layout>
  );
};

export default ErrorPage;
