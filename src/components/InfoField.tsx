import { toTitleCase } from "@/utilities";
import React from "react";

type InfoFieldProps = {
  field: string;
  value: string;
};

export default function InfoField({ field, value }: InfoFieldProps) {
  return (
    <div className="flex w-full border-b border-dotted border-zinc-300 py-2 font-montserrat">
      <h3
        className={`${
          field !== "" && "mr-3"
        }  w-max text-base font-bold text-zinc-700`}
      >
        {toTitleCase(field)}
        {field !== "" && ":"}
      </h3>
      <p className="text-zinc-700">{value}</p>
    </div>
  );
}
