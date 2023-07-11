import * as React from "react";
import OurFamilyPhoto from "../Landing/OurFamilyPhoto";
import Divider from "../Divider";
import InfoField from "../InfoField";

type LitterProps = {
  litter: any;
};

const dummyLitter = {
  date: "22/7/2023",
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
      dob: "22/7/2023",
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
      dob: "22/7/2023",
      sex: "male",
      description: "Lorem ipsum dolor sit",
      sold: false,
      reserved: false,
    },
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
      dob: "22/7/2023",
      sex: "male",
      description: "Lorem ipsum dolor sit",
      sold: false,
      reserved: false,
    },
  ],
};

export default function Litter({ litter }: LitterProps) {
  return (
    <div className="p-5">
      <header className="flex flex-wrap justify-between">
        <main>
          <h2 className="mb-3 font-merriweather text-3xl font-black text-zinc-800">
            Latest Litter
          </h2>
          <Divider />
          <InfoField field="date" value="22/7/2023" />
        </main>
        <aside className="">
          <h3 className="font-montserrat text-2xl font-black  text-zinc-700">
            Parents
          </h3>
          <div className="flex">
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
      </header>
    </div>
  );
}
