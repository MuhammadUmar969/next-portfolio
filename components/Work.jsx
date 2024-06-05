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
    name: "Get Resume",
    desc: "Create your perfect resume effortlessly with our user-friendly website. Input all your details, customize the layout, and download your professional resume in minutes. Simplify your job search and stand out from the crowd with ease.",
    link: "https://get-resume-one.vercel.app/",
    github: "https://github.com/MuhammadUmar969/GetResume",
  },
  {
    img: "/work/2.png",
    category: "React Js",
    name: "Real Estate",
    desc: "Step into a world of real estate refinement where elegance meets functionality. Our website is meticulously designed, offering intuitive navigation and captivating visuals that bring properties to life.",
    link: "https://real-estate-nu-ebon.vercel.app/",
    github: "https://github.com/MuhammadUmar969/Real-Estate",
  },
  {
    img: "/work/3.png",
    category: "Html CSS & JS",
    name: "Blog Website",
    desc: "Embark on a journey into the realm of blogging excellence, where creativity meets convenience. Our website is a testament to thoughtful design, offering easy navigation and engaging visuals that bring ideas to life.",
    link: "https://blog-website-six-theta.vercel.app/",
    github: "https://github.com/MuhammadUmar969/BlogWebsite",
  },
  {
    img: "/work/4.png",
    category: "Next Js",
    name: "Promptopia",
    desc: "Welcome to Promptopia, where imagination knows no bounds. Sign up and dive into a universe of endless creativity. Join us in shaping a community where ideas flourish and creativity thrives.",
    link: "https://promptopia-five-indol.vercel.app/",
    github: "https://github.com/MuhammadUmar969/Promptopia",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 pt-7">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-4">
            Introducing my latest projects, where innovation meets excellence.
            With meticulous planning and creativity, I have crafted a solution
            that sets a new industry standard. From conception to execution,
            these projects exemplifies my dedication to delivering impactful
            results
          </p>
          <Link href="/projects">
            <Button className="bg-orange-500">All Projects</Button>
          </Link>
        </div>

        <div className="xl:max-w-[800px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[500px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
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
