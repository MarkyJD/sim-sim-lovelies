import * as React from "react";
import Layout from "@/components/Layout";
import OurDogsPageTemplate from "@/templates/our-dogs-page";
import { graphql } from "gatsby";

export default function OurDogs({
  location,
  data,
}: {
  location: Location;
  data: any;
}) {
  return (
    <Layout location={location}>
      {/* Margin for nav */}
      <div className="h-16 w-full" />
      <OurDogsPageTemplate data={data} />
    </Layout>
  );
}

export const aboutPageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { template_key: { eq: "about_page" } }) {
      frontmatter {
        title
        template_key
        contact_parallax {
          image
          show
        }
        banner {
          heading
          image
          subtitle
        }
        articles {
          content
          heading
          image
        }
      }
    }
  }
`;
