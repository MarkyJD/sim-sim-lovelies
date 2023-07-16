import * as React from "react";
import OurFamilyPhoto from "../Landing/OurFamilyPhoto";
import Divider from "../Divider";
import InfoField from "../InfoField";
import { add, format, formatDistanceStrict } from "date-fns";
import Puppy from "./Puppy";
import LitterTitle from "./LitterTitle";
import { TLitter } from "@/types";
import MarkdownContent from "../MarkdownContent";

type LitterProps = {
  litter: TLitter;
};

export default function Litter({ litter }: LitterProps) {
  const { dob, description, parents, puppies } = litter;
  const { puppy: pups } = puppies;

  function getAge(date: string) {
    const days = formatDistanceStrict(new Date(), new Date(date), {
      unit: "day",
    }).split(" ");

    const weeks = Math.floor(Number.parseInt(days[0]) / 7);
    const numDays = Number.parseInt(days[0]) % 7;

    const includeWeeks = weeks > 0;
    const includeDays = numDays > 0;

    if (includeWeeks && includeDays) {
      return `${weeks} ${weeks > 1 ? "weeks" : "week"} and ${numDays} ${
        numDays > 1 ? "days" : "day"
      }`;
    } else if (includeWeeks && !includeDays) {
      return `${weeks} ${weeks > 1 ? "weeks" : "week"}`;
    } else {
      return `${numDays} ${numDays > 1 ? "days" : "day"}`;
    }
  }

  function getAvailableDate(date: string) {
    const availableDate = add(new Date(dob), { weeks: 8 });
    return format(availableDate, "do MMMM, yyyy");
  }

  return (
    <div className=" px-5 py-10">
      <LitterTitle title="Latest Litter" type="h1" />
      <div className="flex flex-wrap justify-between lg:space-x-5">
        <main className="min-w-1/2 mb-5 flex-1">
          <LitterTitle title="Information" type="h3" />
          <MarkdownContent content={description} className="prose mb-5" />
          <InfoField
            field="date of birth"
            value={format(new Date(dob), "do MMMM, yyyy")}
          />
          <InfoField field="age" value={getAge(dob)} />
          <InfoField field="available from" value={getAvailableDate(dob)} />
          <InfoField
            field="litter size"
            value={`${pups.length} ${pups.length > 1 ? "pups" : "pup"}`}
          />
          <InfoField field="sire" value={parents.male.name} />
          <InfoField field="dam" value={parents.female.name} />
        </main>
        <aside className="text-left">
          <LitterTitle title="Parents" type="h3" />
          <div className="flex flex-wrap">
            <OurFamilyPhoto
              image={parents.male.image}
              name={parents.male.name}
              text={parents.male.text}
              small
            />
            <OurFamilyPhoto
              image={parents.female.image}
              name={parents.female.name}
              text={parents.female.text}
              small
            />
          </div>
        </aside>
      </div>
      <section>
        <LitterTitle title="Puppies" type="h3" />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {pups.map(puppy => (
            <Puppy key={puppy.name} puppy={puppy} />
          ))}
        </div>
      </section>
    </div>
  );
}
