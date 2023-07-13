import * as React from "react";
import Article from "@/components/About/Article";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import ContactCTA from "@/components/Landing/ContactCTA";
import Parallax from "@/components/Parallax";
import { TAboutPageQueryResult } from "@/types";
import { ar } from "date-fns/locale";
import MainSection from "@/components/MainSection";
import Disclaimer from "@/components/About/Disclaimer";

type AboutPageTemplateProps = {
  data: TAboutPageQueryResult;
};

export default function AboutPageTemplate({ data }: AboutPageTemplateProps) {
  const {
    banner,
    contact_parallax: contactParallax,
    articles,
  } = data.markdownRemark.frontmatter;

  const dummyContent = {
    title: "Our Process",
    subtitle:
      "Important information about our puppies and process. Please read carefully",
    content:
      "Lorem ipsum dolor sit amet, ea sint proident excepteur nulla eiusmod et voluptate anim excepteur laborum non ipsum voluptate pariatur culpa ut Lorem laboris officia proident amet culpa occaecat ad adipisicing sit consequat do dolor",
  };

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
      <Disclaimer />

      {contactParallax.show && (
        <Parallax image={contactParallax.image}>
          <ContactCTA />
        </Parallax>
      )}
    </>
  );
}
