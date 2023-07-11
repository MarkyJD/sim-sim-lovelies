import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import MainSection from "@/components/MainSection";
import Litter from "@/components/Puppies/Litter";
import * as React from "react";
export default function PuppiesPageTemplate() {
  return (
    <>
      <Banner heading="Puppies" description="asldkfj" image="" />
      <MainSection background="shiny">
        <Litter litter="" />
      </MainSection>
    </>
  );
}
