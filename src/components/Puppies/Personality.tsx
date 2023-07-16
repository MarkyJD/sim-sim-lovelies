import { TPersonality } from "@/types";
import React from "react";
import PersonalityBar from "./PersonalityBar";
import { BiChevronDown } from "react-icons/bi";

type PersonalityProps = {
  personality: TPersonality;
};

export default function Personality({ personality }: PersonalityProps) {
  const { affectionate, energetic, playfulness, shyness, trainability } =
    personality;
  return (
    <section>
      <h3 className="mb-1 mt-2 text-xl font-medium">Personality</h3>
      <div className="w-1/2">
        <PersonalityBar
          personality="Affectionate"
          value={affectionate}
          color="blue"
        />
        <PersonalityBar
          personality="Energetic"
          value={energetic}
          color="lime"
        />
        <PersonalityBar
          personality="Playfulness"
          value={playfulness}
          color="fuchsia"
        />
        <PersonalityBar personality="Shyness" value={shyness} color="amber" />
        <PersonalityBar
          personality="Trainability"
          value={trainability}
          color="pink"
        />
      </div>
    </section>
  );
}
