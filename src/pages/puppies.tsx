import * as React from "react";
import Layout from "@/components/Layout";
import PuppiesPageTemplate from "@/templates/puppies-page";

export default function Puppies({ location }: any) {
  return (
    <Layout location={location}>
      {/* Margin for nav */}
      <PuppiesPageTemplate />
    </Layout>
  );
}
