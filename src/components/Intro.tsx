import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Divider from "./Divider";
import MarkdownContent from "./MarkdownContent";

type IntroProps = {
  heading: string;
  title: string;
  description: any;
  image?: any;
  dark?: boolean;
  className?: string;
  leftAlign?: boolean;
};

export default function Intro({
  heading,
  dark = false,
  title,
  description,
  image = null,
  className = "",
  leftAlign = false,
}: IntroProps) {
  return (
    <div
      className={`${className} ${
        leftAlign ? "items-start" : "mx-auto items-center"
      } flex max-w-screen-lg flex-col  space-y-5  px-5 pt-5`}
    >
      <h1
        className={`text-center font-merriweather text-2xl font-bold shadow-black/10 text-shadow-sm md:text-3xl xl:text-4xl ${
          dark ? "text-zinc-50" : "text-zinc-600"
        }`}
      >
        {title}
      </h1>
      <Divider />

      {image ? (
        <div className="w-full items-center py-5 md:flex md:space-x-5">
          <div className="h-full w-full flex-1 overflow-hidden">
            <img
              alt="hero"
              src={image}
              className="h-full shadow transition-all duration-1000 hover:scale-110"
            />
          </div>
          <div className="h-full py-5 md:w-1/2">
            <h2 className="mb-5 font-merriweather text-lg font-bold text-zinc-500">
              <span className="font-black shadow-black/10 text-shadow">
                {heading}
              </span>
            </h2>
            <MarkdownContent
              content={description}
              className="prose my-5 font-montserrat text-zinc-500"
            />
            <Link to="/about">
              <button className="rounded-md border-2 border-sky-800 bg-sky-800 px-5 py-2 font-montserrat text-sm font-normal text-gray-100 shadow transition-all hover:border-sky-900 hover:bg-sky-900 hover:shadow-xl">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="  h-full">
          <h2 className="mb-5 font-merriweather text-lg font-bold text-zinc-500">
            <span className=" font-black  shadow-black/10 text-shadow">
              {heading}
            </span>
          </h2>
        </div>
      )}
    </div>
  );
}
