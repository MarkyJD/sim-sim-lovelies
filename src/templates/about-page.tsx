import * as React from "react";
import Article from "@/components/About/Article";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import ContactCTA from "@/components/Landing/ContactCTA";
import Parallax from "@/components/Parallax";
import { TAboutPageQueryResult } from "@/types";
import { ar } from "date-fns/locale";
import MainSection from "@/components/MainSection";

type AboutPageTemplateProps = {
  data: TAboutPageQueryResult;
};

export default function AboutPageTemplate({ data }: AboutPageTemplateProps) {
  const {
    banner,
    contact_parallax: contactParallax,
    articles,
  } = data.markdownRemark.frontmatter;

  return (
    <>
      <Banner
        heading={banner.heading}
        image={banner.image}
        description={banner.subtitle}
      />

      <MainSection background="sharp">
        {articles.map((article, index) => (
          <Article
            key={`${article.heading}-${index}`}
            title={article.heading}
            image={article.image}
            content={article.content}
            index={index}
            lastItem={index === articles.length - 1}
          />
        ))}
      </MainSection>

      {contactParallax.show && (
        <Parallax image={contactParallax.image}>
          <ContactCTA />
        </Parallax>
      )}
    </>
  );
}
