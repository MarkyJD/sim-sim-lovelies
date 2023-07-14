import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Intro from "../Intro";
import Divider from "../Divider";
import MarkdownContent from "../MarkdownContent";

export default function Disclaimer() {
  const data = useStaticQuery(graphql`
    query DisclaimerQuery {
      file(relativePath: { eq: "disclaimer.md" }) {
        childMarkdownRemark {
          frontmatter {
            disclaimer
          }
        }
      }
    }
  `);

  const disclaimerContent =
    data.file.childMarkdownRemark.frontmatter.disclaimer;
  return (
    <section
      id="disclaimer"
      className="bg-amber-50 px-5 py-16 font-montserrat text-zinc-700"
    >
      <div className="mx-auto max-w-screen-lg">
        <h2 className="font-merriweather text-3xl font-black text-zinc-700">
          Disclaimer
        </h2>
        <Divider className="my-3" />
        <h3 className="mb-3 text-lg italic text-zinc-600">
          Important information about our process. Please read carefully
        </h3>
        <hr className="mb-5" />
        <MarkdownContent
          content={disclaimerContent}
          className="prose min-w-full columns-1 md:columns-2"
        />
      </div>
    </section>
  );
}
