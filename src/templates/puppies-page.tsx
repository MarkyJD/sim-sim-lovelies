import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import MainSection from "@/components/MainSection";
import Litter from "@/components/Puppies/Litter";
import * as React from "react";
export default function PuppiesPageTemplate() {
  return (
    <>
      <Banner
        heading="Puppies"
        description="See our latest and upcoming litters. Reserve your puppy today!"
        image=""
      />
      <MainSection background="sharp">
        <Litter litter="" />
      </MainSection>
    </>
  );
}
