"use client";

import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/muhammad-umar-aziz-khan-ba5aa3269/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/MuhammadUmar969",
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
