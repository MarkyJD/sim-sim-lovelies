import * as React from "react";
import { useState, useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import MarkdownContent from "./MarkdownContent";

type FAQProps = {
  question: string;
  answer: any;
  index: number;
  searchTerm?: string;
  open?: boolean;
};
export default function FAQ({
  question,
  answer,
  index,
  searchTerm = "",
  open = false,
}: FAQProps) {
  const [isOpen, setIsOpen] = useState<boolean>();
  const isOddRow = index % 2 === 0;

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const toggleAnswer = () => {
    setIsOpen(prevState => !prevState);
  };

  let pattern = new RegExp(searchTerm, "gi");
  if (searchTerm.length > 0) {
    question = question.replace(
      pattern,
      match => `<mark class="bg-amber-200">${match}</mark>`
    );
  }

  return (
    <div
      role="button"
      onClick={toggleAnswer}
      className="relative p-3 py-5 border-b border-zinc-400 group"
    >
      <div className="flex space-x-3">
        <div className="text-2xl text-amber-600 group-hover:text-sky-800">
          {isOpen ? <BiMinus /> : <BiPlus />}
        </div>
        <h3
          dangerouslySetInnerHTML={{ __html: `<p>${question}</p>` }}
          className="font-merriweather font-semibold text-zinc-700 group-hover:text-sky-800 flex items-center justify-between"
        ></h3>
      </div>
      <p
        className={`font-montserrat  overflow-hidden text-sm pl-9 ${
          !isOpen ? "h-0 pt-0" : "h-max pt-5"
        }`}
      >
        <MarkdownContent content={answer} className="prose" />
      </p>
    </div>
  );
}
