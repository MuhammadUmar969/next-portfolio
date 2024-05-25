"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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

const uniqueCategory = projectData.reduce(
  (acc, item) => {
    const lowerCaseCategory = item.category.toLowerCase();
    if (!acc.some((entry) => entry.toLowerCase() === lowerCaseCategory)) {
      acc.push(item.category);
    }
    return acc;
  },
  ["All Projects"]
);

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("All Projects");

  const filteredProjects = projectData.filter((project) => {
    return (
      category.toLowerCase() === "all projects" ||
      project.category.toLowerCase() === category.toLowerCase()
    );
  });

  console.log(filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <Tabs defaultValue={category} className="mb-24 xl:48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((item, index) => (
              <TabsTrigger
                onClick={() => setCategory(item)}
                value={item}
                key={index}
                className="capitalize w-[162px] md:mx-auto"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
