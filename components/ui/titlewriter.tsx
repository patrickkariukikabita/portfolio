"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function TitleWriter() {
  const words = [
    {
      text: "Patrick",
      className: "text-sky-500 ",
    },
    {
      text: "Kariuki",
      className: "text-sky-500 ",
    },
    {
      text: "is",
      className: "text-sky-500 ",
    },
    {
      text: "a",
      className: "text-sky-500 ",
    },
    {
      text: "fullstack",
      className: "text-gray-200 ",
    },
    {
        text: "Software",
        className: "text-gray-200 ",
      },
    {
      text: "Developer.",
      className: "text-sky-500 ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-start h-8 ">
      <TypewriterEffect words={words} />
    </div>
  );
}
