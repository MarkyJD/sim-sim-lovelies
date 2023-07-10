import * as React from "react";
import Divider from "./Divider";

type BannerProps = {
  image: string;
  heading: string;
  description: string;
};
export default function Banner({ image, heading, description }: BannerProps) {
  return (
    <div className="relative min-h-[35vh] w-full object-cover p-5 pt-16 ">
      {/* Shading */}
      <div className="absolute inset-0 z-10 bg-black/50" />
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={image}
        alt="banner dog img"
      />
      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col items-center pt-10">
        <h1 className="mb-5 font-playfair  text-5xl text-zinc-100 shadow-black/20 text-shadow-lg">
          {heading}
        </h1>
        <Divider />
        <p className="mt-10 font-merriweather text-zinc-300">{description}</p>
      </div>
    </div>
  );
}
