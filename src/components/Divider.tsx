import * as React from "react";
type DividerProps = {
  format?: "horizontal" | "vertical";
  className?: string;
};

export default function Divider({
  format = "horizontal",
  className = "",
}: DividerProps) {
  return (
    <hr
      className={`${className} h-[2px] w-16 rounded border-0 bg-amber-400 ${
        format === "vertical" && "rotate-90"
      }`}
    />
  );
}
