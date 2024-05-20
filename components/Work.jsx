"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    img: "/work/1.png",
    category: "React js",
    name: "Vercel",
    link: "/",
    github: "/",
  },
  {
    img: "/work/2.png",
    category: "Html CSS & JS",
    name: "Join the Real World",
    link: "/",
    github: "/",
  },
  {
    img: "/work/2.png",
    category: "Html CSS & JS",
    name: "Join the Real World",
    link: "/",
    github: "/",
  },
  {
    img: "/work/2.png",
    category: "Html CSS & JS",
    name: "Join the Real World",
    link: "/",
    github: "/",
  },
  {
    img: "/work/2.png",
    category: "Html CSS & JS",
    name: "Join the Real World",
    link: "/",
    github: "/",
  },
  {
    img: "/work/2.png",
    category: "Html CSS & JS",
    name: "Join the Real World",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-4">
            Introducing my latest projects, where innovation meets excellence.
            With meticulous planning and creativity, I've crafted a solution
            that sets a new industry standard. From conception to execution,
            these projects exemplifies my dedication to delivering impactful
            results
          </p>
          <Link href="/projects">
            <Button className="bg-orange-500">All Projects</Button>
          </Link>
        </div>

        <div>
          <Swiper>
            {projectData.slice(0.4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
