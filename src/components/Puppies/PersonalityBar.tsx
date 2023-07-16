import React from "react";
export default function PersonalityBar({
  personality,
  value,
  color,
}: {
  personality: string;
  value: string;
  color: "blue" | "lime" | "fuchsia" | "amber" | "pink";
}) {
  function getTextColour() {
    switch (color) {
      case "blue":
        return "text-blue-600";
      case "lime":
        return "text-lime-600";
      case "fuchsia":
        return "text-fuchsia-600";
      case "amber":
        return "text-amber-600";
      case "pink":
        return "text-pink-600";
      default:
        return "text-zinc-600";
    }
  }

  function getBgColour() {
    switch (color) {
      case "blue":
        return "bg-blue-600";
      case "lime":
        return "bg-lime-600";
      case "fuchsia":
        return "bg-fuchsia-600";
      case "amber":
        return "bg-amber-600";
      case "pink":
        return "bg-pink-600";
      default:
        return "bg-zinc-600";
    }
  }

  return (
    <>
      <h4 className={getTextColour()}>{personality}</h4>
      <div className="mb-2 h-2 w-full rounded-full bg-zinc-200">
        <div
          className={`h-2 rounded-full ${getBgColour()}`}
          style={{ width: `${(Number.parseInt(value) / 10) * 100}%` }}
        />
      </div>
    </>
  );
}
