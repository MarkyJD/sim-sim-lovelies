import * as React from "react";
import { toKebabCase } from "@/utilities";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BiArrowToRight } from "react-icons/bi";
import MarkdownContent from "../MarkdownContent";

type OurFamilyPhotoProps = {
  name: string;
  image: any;
  text: string;
  small?: boolean;
};

export default function OurFamilyPhoto({
  name,
  image,
  text,
  small = false,
}: OurFamilyPhotoProps) {
  if (small) {
    return (
      <div
        className="group mx-auto w-max
         p-5 sm:w-1/2  lg:w-80"
      >
        <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-zinc-200 drop-shadow-xl">
          <div className="h-[200px] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-all duration-[3000ms] group-hover:scale-110"
            />
          </div>
          <div className="flex items-end justify-between">
            <div className="flex-1 p-5">
              <h2 className="mb-2 font-montserrat text-xl font-bold text-zinc-700 decoration-amber-400 decoration-4 underline-offset-2 group-hover:underline">
                {name}
              </h2>
              <MarkdownContent
                content={text}
                className="markdown prose w-full font-montserrat text-sm text-zinc-600"
              />
            </div>
            <Link to={`/our-dogs#${toKebabCase(name)}`}>
              <button className="btn-learn-more-amber m-5 flex items-center">
                More
                <span className="ml-1 text-xl">
                  <BiArrowToRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group w-full p-5
        md:w-1/2 lg:w-96"
    >
      <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-zinc-200 drop-shadow-xl">
        <div className="h-[200px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-all duration-[3000ms] group-hover:scale-110"
          />
        </div>

        <div className="flex-1 p-5">
          <h2 className="mb-2 font-montserrat text-xl font-bold text-zinc-700 decoration-amber-400 decoration-4 underline-offset-2 group-hover:underline">
            {name}
          </h2>
          <MarkdownContent
            content={text}
            className="markdown prose w-full font-montserrat text-sm text-zinc-600"
          />
        </div>
        <Link to={`/our-dogs#${toKebabCase(name)}`}>
          <button className="btn-learn-more-amber m-5 flex items-center">
            More
            <span className="ml-1 text-xl">
              <BiArrowToRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
