import * as React from "react";
import Layout from "@/components/Layout";
import FaqsPageTemplate from "@/templates/faqs-page";
import { TFaqsPageQueryResult } from "@/types";
import { graphql } from "gatsby";

export default function Faqs({
  location,
  data,
}: {
  location: Location;
  data: TFaqsPageQueryResult;
}) {
  return (
    <Layout location={location}>
      <FaqsPageTemplate data={data} />
    </Layout>
  );
}

export const faqsPageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { template_key: { eq: "faqs_page" } }) {
      id
      frontmatter {
        contact_parallax {
          show
          image
        }
        faqs {
          question
          answer
        }
        banner {
          heading
          subtitle
          image
        }
      }
    }
  }
`;
