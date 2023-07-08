import React, { useState, useEffect } from "react";
import Banner from "@/components/Banner";
import ContactCTA from "@/components/Landing/ContactCTA";
import Parallax from "@/components/Parallax";
import { TFaq, TFaqsPageQueryResult } from "@/types";
import FAQ from "@/components/FAQ";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

type FaqsPageTemplateProps = {
  data: TFaqsPageQueryResult;
};

export default function FaqsPageTemplate({ data }: FaqsPageTemplateProps) {
  const {
    banner,
    contact_parallax: contactParallax,
    faqs,
  } = data.markdownRemark.frontmatter;

  const [displayedFaqs, setDisplayedFaqs] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allOpen, setAllOpen] = useState(false);

  useEffect(() => {
    setDisplayedFaqs(faqs);
  }, []);

  useEffect(() => {
    const filteredFaqs = faqs.filter((faq: TFaq) => {
      return faq.question.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDisplayedFaqs(filteredFaqs);
  }, [searchTerm]);

  return (
    <>
      <Banner
        heading={banner.heading}
        image={banner.image}
        description={banner.subtitle}
      />

      <section className="relative">
        {/* Background pattern */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          // xmlns:svgjs="http://svgjs.com/svgjs"
          width="1280"
          height="1280"
          preserveAspectRatio="none"
          viewBox="0 0 1280 1280"
          className="absolute inset-0 -z-10 w-full h-full"
        >
          <g mask='url("#SvgjsMask1859")' fill="none">
            <rect
              width="1280"
              height="1280"
              x="0"
              y="0"
              fill="url(#SvgjsLinearGradient1860)"
            ></rect>
            <path
              d="M1280 0L1164.38 0L1280 307.17z"
              fill="rgba(255, 255, 255, .1)"
            ></path>
            <path
              d="M1164.38 0L1280 307.17L1280 734.4300000000001L642.8300000000002 0z"
              fill="rgba(255, 255, 255, .075)"
            ></path>
            <path
              d="M642.83 0L1280 734.4300000000001L1280 767.9000000000001L562.3100000000001 0z"
              fill="rgba(255, 255, 255, .05)"
            ></path>
            <path
              d="M562.3100000000001 0L1280 767.9000000000001L1280 779.95L550.47 0z"
              fill="rgba(255, 255, 255, .025)"
            ></path>
            <path
              d="M0 1280L0.68 1280L0 1093.62z"
              fill="rgba(0, 0, 0, .1)"
            ></path>
            <path
              d="M0 1093.62L0.68 1280L393.85 1280L0 768.6299999999999z"
              fill="rgba(0, 0, 0, .075)"
            ></path>
            <path
              d="M0 768.63L393.85 1280L762.99 1280L0 767.47z"
              fill="rgba(0, 0, 0, .05)"
            ></path>
            <path
              d="M0 767.47L762.99 1280L1122.73 1280L0 395.33000000000004z"
              fill="rgba(0, 0, 0, .025)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1859">
              <rect width="1280" height="1280" fill="#ffffff"></rect>
            </mask>
            <linearGradient
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              gradientUnits="userSpaceOnUse"
              id="SvgjsLinearGradient1860"
            >
              <stop stopColor="rgba(255, 255, 255, 1)" offset="0"></stop>
              <stop stopColor="rgba(229, 231, 235, 1)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
        <main className="relative max-w-screen-lg mx-auto flex flex-col p-5">
          <div className="w-full flex justify-between">
            <div>
              <label
                className="text-amber-700 font-semibold mb-3 block"
                htmlFor="search"
              >
                Search for a question:
              </label>
              <input
                className="w-max p-3 mb-5 border border-zinc-400 rounded-md"
                id="search"
                placeholder="keyword..."
                type="text"
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
              />
            </div>
            <div className="font-bold self-end pl-2">
              <button
                className="text-3xl flex justify-center items-center"
                onClick={() => setAllOpen(prev => !prev)}
              >
                <p className="text-xs text-zinc-500 font-bold">
                  {allOpen ? "collapse all" : "open all"}
                </p>
                {allOpen ? (
                  <BiChevronUp className="text-sky-800" />
                ) : (
                  <BiChevronDown className="text-amber-800" />
                )}
              </button>
            </div>
          </div>
          {displayedFaqs.length > 0 &&
            displayedFaqs.map((faq: TFaq, i: number) => (
              <FAQ
                open={allOpen}
                searchTerm={searchTerm}
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
        </main>
      </section>

      {contactParallax.show && (
        <Parallax image={contactParallax.image}>
          <ContactCTA
            title="Have a question that isn't listed?"
            subtitle="Reach out to us and we will do our best to answer all your questions"
          />
        </Parallax>
      )}
    </>
  );
}
