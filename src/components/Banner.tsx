import * as React from "react";
import Divider from "./Divider";

type BannerProps = {
  image: string;
  heading: string;
  description: string;
};
export default function Banner({ image, heading, description }: BannerProps) {
  return (
    <div className="w-full p-5 pt-16 object-cover min-h-[35vh] relative ">
      {/* Shading */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={image}
        alt="banner dog img"
      />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center pt-10 relative z-10">
        <h1 className="text-zinc-100 text-shadow-lg  shadow-black/20 text-5xl font-playfair mb-5">
          {heading}
        </h1>
        <Divider />
        <p className="text-zinc-300 font-merriweather mt-10">{description}</p>
      </div>
    </div>
  );
}
