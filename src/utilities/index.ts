export function toKebabCase(word: string): string {
  return word.toLowerCase().split(" ").join("-");
}

export function toTitleCase(word: string): string {
  if (word.length === 0) return "";
  return (
    word.toLowerCase().split("")[0].toUpperCase() +
    word.toLowerCase().split("").slice(1).join("")
  );
}
