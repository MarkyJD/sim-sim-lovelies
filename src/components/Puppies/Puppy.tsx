import { TPup } from "@/types";
import React from "react";
import {
  BiCamera,
  BiFemaleSign,
  BiMaleSign,
  BiShare,
  BiSolidShareAlt,
} from "react-icons/bi";
import LitterTitle from "./LitterTitle";
import { Carousel } from "react-responsive-carousel";
import Personality from "./Personality";

type PuppyProps = {
  puppy: TPup;
};

export default function Puppy({ puppy }: PuppyProps) {
  const { name, color, description, images, personality, reserved, sex, sold } =
    puppy;

  function getStatus() {
    if (sold) {
      return "Sold";
    } else if (reserved) {
      return "Reserved";
    } else {
      return "Available";
    }
  }

  const status = getStatus();

  return (
    <article className="w-full rounded bg-white  p-5 font-montserrat shadow-lg">
      {images && images.length > 0 && (
        <Carousel
          className="drop-shadow-md"
          emulateTouch
          showThumbs={false}
          // autoPlay
          stopOnHover
          showStatus={false}
          infiniteLoop
          onClickItem={(item, i) => console.log(item, i)}
        >
          {images.map((image, i) => (
            <img
              key={`${image.alt_text}-${i}`}
              src={image.image}
              alt={image.alt_text}
              className="h-80 w-full object-cover"
            />
          ))}
        </Carousel>
      )}

      <div className="flex w-full items-center justify-between py-3 text-xl text-zinc-500">
        <div className="flex items-center space-x-1">
          <BiCamera />
          <p className="text-sm">{images.length}</p>
        </div>
        <button
          type="button"
          onClick={() => {}}
          className="ml-3 rounded-md p-1 text-sm hover:bg-zinc-200"
        >
          Share <BiSolidShareAlt className="inline text-xl" />
        </button>
      </div>

      <div className="flex w-full items-start justify-between">
        <div>
          <h3 className="text-xl font-black text-stone-800">{name}</h3>
          <div className="mb-3 flex items-center space-x-1 py-1 text-sm font-medium text-stone-700">
            <p>{color}</p>
            <p>|</p>
            <p>{sex}</p>
            {sex === "Male" ? (
              <BiMaleSign className="text-base" />
            ) : (
              <BiFemaleSign className="text-base" />
            )}
          </div>
          <p className="text-base text-stone-700">{description}</p>
        </div>
        <p
          className={`rounded border-2 px-2 py-1 font-merriweather text-lg font-bold ${
            status === "Sold"
              ? "border-red-700 text-red-700"
              : status === "Reserved"
              ? "border-amber-600 text-amber-600"
              : "border-lime-600 text-lime-600"
          }`}
        >
          {status}
        </p>
      </div>
      <Personality personality={personality} />
    </article>
  );
}
