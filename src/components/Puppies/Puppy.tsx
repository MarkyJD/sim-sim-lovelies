import React from "react";

type PuppyProps = {
  puppy: any;
};

export default function Puppy({ puppy }: PuppyProps) {
  const { name, color } = puppy;
  return (
    <div>
      <h3>{name}</h3>
      <p>{color}</p>
    </div>
  );
}
