import * as React from "react";
import { Link } from "gatsby";
import Divider from "../Divider";

export interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  cta?: string;
}

export default function ContactCTA({
  title = "Get in Touch",
  subtitle = "Want to know more about our breeding process or puppy care? Drop us a message!",
  cta = "Contact Us",
}: ContactCTAProps) {
  return (
    <div className="mx-auto w-full max-w-screen-lg">
      <h2 className="mb-5 font-playfair text-5xl font-black text-amber-50 shadow-black/20 text-shadow-lg">
        {title}
      </h2>
      <Divider />
      <p className="my-5 mb-8 font-montserrat text-lg text-zinc-50 shadow-black/20 text-shadow-sm">
        {subtitle}
      </p>
      <Link to="/contact">
        <button className="rounded-md border-2 border-amber-400 bg-black/25 px-5 py-2 font-montserrat text-sm font-semibold text-amber-400 shadow transition-all hover:bg-amber-400 hover:text-gray-700 hover:shadow-xl md:text-lg">
          {cta}
        </button>
      </Link>
    </div>
  );
}
