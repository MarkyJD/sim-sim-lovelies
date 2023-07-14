import * as React from "react";
import OurFamilyPhoto from "../Landing/OurFamilyPhoto";
import Divider from "../Divider";
import InfoField from "../InfoField";
import {
  add,
  format,
  formatDistanceStrict,
  formatDistanceToNowStrict,
} from "date-fns";
import Puppy from "./Puppy";

type LitterProps = {
  litter: any;
};

const dummyLitters = [
  {
    latest: false,
    date: "2023-04-04",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    parents: {
      male: {
        name: "Jerry",
        image:
          "https://static.wixstatic.com/media/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg/v1/fill/w_900,h_679,al_c,q_85,enc_auto/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg",
        text: "Jerry",
      },
      female: {
        name: "Jenny",
        image:
          "https://static.wixstatic.com/media/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg/v1/fill/w_900,h_679,al_c,q_85,enc_auto/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg",
        text: "Jenny",
      },
    },
    puppies: [
      {
        name: "Jerry",
        image: "",
        color: "apricot",
        personality: {
          active: 4,
          cuddly: 3,
          playful: 5,
          friendly: 5,
          trainable: 3,
        },
        dob: "2023-07-22",
        sex: "male",
        description: "Lorem ipsum dolor sit",
        sold: false,
        reserved: false,
      },
      {
        name: "Spartacus",
        image: "",
        color: "brown",
        personality: {
          active: 4,
          cuddly: 3,
          playful: 5,
          friendly: 5,
          trainable: 3,
        },
        dob: "2023-07-22",
        sex: "male",
        description: "Lorem ipsum dolor sit",
        sold: false,
        reserved: false,
      },
      {
        name: "Spinach",
        image: "",
        color: "green",
        personality: {
          active: 2,
          cuddly: 5,
          playful: 5,
          friendly: 5,
          trainable: 5,
        },
        dob: "2023-07-22",
        sex: "male",
        description: "Lorem ipsum dolor sit",
        sold: false,
        reserved: false,
      },
    ],
  },
  {
    latest: true,
    date: "2023-03-04",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    parents: {
      male: {
        name: "Harry",
        image:
          "https://static.wixstatic.com/media/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg/v1/fill/w_900,h_679,al_c,q_85,enc_auto/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg",
        text: "harrrs",
      },
      female: {
        name: "Bettsy",
        image:
          "https://static.wixstatic.com/media/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg/v1/fill/w_900,h_679,al_c,q_85,enc_auto/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg",
        text: "bettsy",
      },
    },
    puppies: [
      {
        name: "Jerry",
        image: "",
        color: "apricot",
        personality: {
          active: 4,
          cuddly: 3,
          playful: 5,
          friendly: 5,
          trainable: 3,
        },
        dob: "2023-07-22",
        sex: "male",
        description: "Lorem ipsum dolor sit",
        sold: false,
        reserved: false,
      },
      {
        name: "Spartacus",
        image: "",
        color: "brown",
        personality: {
          active: 4,
          cuddly: 3,
          playful: 5,
          friendly: 5,
          trainable: 3,
        },
        dob: "2023-07-22",
        sex: "male",
        description: "Lorem ipsum dolor sit",
        sold: false,
        reserved: false,
      },
      {
        name: "Spinach",
        image: "",
        color: "green",
        personality: {
          active: 2,
          cuddly: 5,
          playful: 5,
          friendly: 5,
          trainable: 5,
        },
        dob: "2023-07-22",
        sex: "male",
        description: "Lorem ipsum dolor sit",
        sold: false,
        reserved: false,
      },
    ],
  },
];

export default function Litter({ litter }: LitterProps) {
  const latestLitter = dummyLitters.filter(litter => litter.latest);

  const { date, description, parents, puppies } = latestLitter[0];

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
    const availableDate = add(new Date(date), { weeks: 8 });
    return format(availableDate, "do MMMM, yyyy");
  }

  return (
    <div className="px-5 py-10">
      <div className="flex flex-wrap justify-between">
        <main className="mb-5 flex-1">
          <h2 className="mb-3 font-merriweather text-3xl font-black text-zinc-800">
            Latest Litter
          </h2>
          <Divider className="mb-5" />
          <InfoField field="" value={description} />
          <InfoField
            field="date of birth"
            value={format(new Date(date), "do MMMM, yyyy")}
          />
          <InfoField field="age" value={getAge(date)} />
          <InfoField field="available from" value={getAvailableDate(date)} />
          <InfoField
            field="litter size"
            value={`${puppies.length} ${puppies.length > 1 ? "pups" : "pup"}`}
          />
          <InfoField field="sire" value={parents.male.name} />
          <InfoField field="dam" value={parents.female.name} />
        </main>
        <aside className="">
          <h3 className="font-montserrat text-2xl font-black  text-zinc-700">
            Parents
          </h3>
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
        <h2 className="mb-3 mt-5 font-merriweather text-3xl font-black text-zinc-800">
          Puppies
        </h2>
        <Divider className="mb-5" />
        <div>
          {puppies.map((puppy: any) => (
            <Puppy key={puppy.name} puppy={puppy} />
          ))}
        </div>
      </section>
    </div>
  );
}
