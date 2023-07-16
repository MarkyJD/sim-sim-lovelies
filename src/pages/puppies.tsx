import * as React from "react";
import { graphql } from "gatsby";
import Layout from "@/components/Layout";
import PuppiesPageTemplate from "@/templates/puppies-page";
import { TPuppiesPageQueryResult } from "@/types";

export default function Puppies({
  location,
  data,
}: {
  location: Location;
  data: TPuppiesPageQueryResult;
}) {
  return (
    <Layout location={location}>
      {/* Margin for nav */}
      <PuppiesPageTemplate data={data} />
    </Layout>
  );
}

export const puppiesPageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { template_key: { eq: "puppies_page" } }) {
      frontmatter {
        banner {
          heading
          subtitle
          image
        }
        contact_parallax {
          show
          image
        }
        litters {
          description
          dob
          latest
          parents {
            female {
              name
              image
              text
            }
            male {
              name
              image
              text
            }
          }
          puppies {
            puppy {
              images {
                image
                alt_text
              }
              personality {
                shyness
                playfulness
                affectionate
                energetic
              }
              color
              description
              name
              reserved
              sex
              sold
            }
          }
        }
      }
    }
  }
`;
