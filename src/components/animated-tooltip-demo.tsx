"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Naveen Nunna",
    designation: "Designer",
    image:
      "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
  },
  {
    id: 2,
    name: "Yashwanth Inampudi",
    designation: "Project Member",
    image:
      "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
  },
  {
    id: 3,
    name: "Rishi Rohan Kalapala",
    designation: "Project Lead",
    image:
      "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
