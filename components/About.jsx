import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  BriefCase,
  Phone,
} from "lucide-react";

const InfoData = [
  {
    icon: <User2 size={20} />,
    text: "Muhammad Umar Aziz Khan",
  },
  {
    icon: <Phone size={20} />,
    text: "+923332404969",
  },
  {
    icon: <MailIcon size={20} />,
    text: "umarazizkhanm23@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 8th Sept, 2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Dastagir Society FB Area, Karachi, Pakistan",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        School: "Sadequain Academy",
        Year: "2019",
      },
      {
        College: "Govt PECHS Education Foundation Science College",
        Year: "2021",
      },
      {
        University: "Sindh madressatul islam university",
        Year: "Present",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        Company: "Bytewise",
        Qualfication: "Frontend Developer",
        Year: "March 2023 - June 2023",
      },
      {
        Company: "Internee.pk",
        Qualfication: "React Js Developer",
        Year: "June 2023 - August 2023",
      },
      {
        Company: "Server4Sale",
        Qualfication: " Web Developer",
        Year: "August 2023 - February 2024",
      },
      {
        Company: "VPro",
        Qualfication: "MERN Stack Developer",
        Year: "May 2024 - Present",
      },
    ],
  },
];

const skillsData = [
  {
    title: "Skills",
    data: [
      {
        imgPath: "HTML CSS",
      },
      {
        name: "HTML CSS JavaScript",
      },
      {
        name: "Frontend Development",
      },
      {
        name: "Backend Development",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "about/wordpress.svg",
      },
      {
        imgPath: "about/git.svg",
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container-mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>

        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>

          <div className="flex-1">
            <Tabs>
              <TabsList>
                <TabsTrigger>Personal Info</TabsTrigger>
                <TabsTrigger>Qualifications</TabsTrigger>
                <TabsTrigger>Skills</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
