import * as React from "react";
import OurFamilyPhoto from "../Landing/OurFamilyPhoto";
import Divider from "../Divider";
import InfoField from "../InfoField";
import { formatDistanceStrict } from "date-fns";

type LitterProps = {
  litter: any;
};

const dummyLitter = {
  date: "2023-06-15",
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
};

export default function Litter({ litter }: LitterProps) {
  const { date, description, parents, puppies } = dummyLitter;

  function getAge(date: string) {
    const days = formatDistanceStrict(new Date(), new Date(date), {
      unit: "day",
    }).split(" ");

    const weeks = Number.parseInt(days[0]) / 7;

    return `${Math.floor(weeks)} ${weeks > 1 ? "weeks" : "week"}, ${
      Number.parseInt(days[0]) % 7
    } ${Number.parseInt(days[0]) % 7 > 1 ? "days" : "day"}`;
  }
  return (
    <div className="p-5">
      <div className="flex flex-wrap justify-between">
        <main className="flex-1">
          <h2 className="mb-3 font-merriweather text-3xl font-black text-zinc-800">
            Latest Litter
          </h2>
          <Divider className="mb-5" />
          <InfoField field="date of birth" value={date} />
          <InfoField field="age" value={getAge(date)} />
          <InfoField field="description" value={description} />
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
              image="https://static.wixstatic.com/media/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg/v1/fill/w_900,h_679,al_c,q_85,enc_auto/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg"
              name="Jerry"
              text="Jerry"
              small
            />
            <OurFamilyPhoto
              image="https://static.wixstatic.com/media/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg/v1/fill/w_900,h_679,al_c,q_85,enc_auto/925887_8399ac0f82a646a7bf38119b732618d2~mv2.jpg"
              name="Jenny"
              text="jeccy"
              small
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
