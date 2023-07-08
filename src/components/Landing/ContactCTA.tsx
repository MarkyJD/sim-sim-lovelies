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
    <div className="max-w-screen-lg w-full mx-auto">
      <h2 className="mb-5 text-shadow-lg shadow-black/20 font-playfair font-black text-5xl text-amber-50">
        {title}
      </h2>
      <Divider />
      <p className="my-5 mb-8 text-lg font-montserrat text-zinc-50 shadow-black/20 text-shadow-sm">
        {subtitle}
      </p>
      <Link to="/contact">
        <button className="transition-all font-montserrat px-5 py-2 border-2 border-amber-400 rounded-md bg-black/25 hover:shadow-xl shadow hover:text-gray-700 hover:bg-amber-400 text-sm md:text-lg font-semibold text-amber-400">
          {cta}
        </button>
      </Link>
    </div>
  );
}
