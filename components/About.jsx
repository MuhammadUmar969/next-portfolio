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
  Briefcase,
} from "lucide-react";

const InfoData = [
  {
    icon: <User2 size={20} />,
    text: "Muhammad Umar Aziz Khan",
  },
  {
    icon: <Phone size={20} />,
    text: "+92 333 2404969",
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
    text: "P63A Punjab Town Malir Halt, Karachi",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        head: "Matriculation",
        School: "Sadequain Academy",
        Year: "2019",
      },
      {
        head: "Intermediate",
        School: "Govt PECHS Education Foundation Science College",
        Year: "2021",
      },
      {
        head: "University",
        School: "Sindh madressatul islam university",
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
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Git",
      },
      {
        name: "Firebase",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "React Js",
      },
      {
        name: "Next Js",
      },
      {
        name: "Node Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "MongoDB",
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
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-x-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Services Quality for over 1 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialized in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences{" "}
                    </p>

                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {InfoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Urdu</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>

                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experience").data.map(
                            (item, index) => {
                              const { Company, Qualfication, Year } = item;
                              return (
                                <div className="group" key={index}>
                                  <div className="flex gap-x-8">
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {Company}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {Qualfication}
                                      </div>
                                      <div className="text-base font-medium">
                                        {Year}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item, index) => {
                              const { head, School, Year } = item;
                              return (
                                <div className="group" key={index}>
                                  <div className="flex gap-x-8">
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {head}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {School}
                                      </div>
                                      <div className="text-base font-medium">
                                        {Year}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>

                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>

                      <div>
                        {getData(skillsData, "Skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>

                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "Tools").data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  priority
                                  alt=""
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
