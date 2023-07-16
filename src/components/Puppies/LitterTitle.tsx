import React from "react";
import Divider from "../Divider";

export default function LitterTitle({
  title,
  type,
  className = "",
}: {
  title: string;
  type: "h1" | "h2" | "h3" | "h4";
  className?: string;
}) {
  if (type === "h1") {
    return (
      <>
        <h2
          className={`${className} mb-3 text-center font-playfair text-5xl font-black text-zinc-700`}
        >
          {title}
        </h2>
        <Divider className="mx-auto mb-10 text-center" />
      </>
    );
  }

  if (type === "h2") {
    return (
      <>
        <h2
          className={`${className} mb-3 font-playfair text-5xl font-black text-zinc-700`}
        >
          {title}
        </h2>
        <Divider className="mb-5" />
      </>
    );
  }

  if (type === "h3") {
    return (
      <h2
        className={`${className} mb-3 font-merriweather text-3xl font-black text-stone-600`}
      >
        {title}
      </h2>
    );
  }
  if (type === "h4") {
    return (
      <h2
        className={`${className} mb-2 font-playfair text-xl font-black text-zinc-500`}
      >
        {title}
      </h2>
    );
  }

  // default
  return (
    <>
      <h2
        className={`${className} mb-3 font-playfair text-5xl font-black text-zinc-700`}
      >
        {title}
      </h2>
      <Divider className="mb-5" />
    </>
  );
}
