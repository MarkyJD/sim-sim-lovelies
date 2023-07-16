import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import ContactCTA from "@/components/Landing/ContactCTA";
import MainSection from "@/components/MainSection";
import Parallax from "@/components/Parallax";
import Litter from "@/components/Puppies/Litter";
import { TPuppiesPageQueryResult } from "@/types";
import * as React from "react";

type PuppiesPageTemplateProps = {
  data: TPuppiesPageQueryResult;
};

export default function PuppiesPageTemplate({
  data,
}: PuppiesPageTemplateProps) {
  const {
    contact_parallax: contactParallax,
    banner,
    litters,
  } = data.markdownRemark.frontmatter;

  return (
    <>
      <Banner heading={banner.heading} description={banner.subtitle} image="" />
      <MainSection background="none" className="">
        {litters.map((litter: any) => (
          <Litter litter={litter} key={litter.dob} />
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
