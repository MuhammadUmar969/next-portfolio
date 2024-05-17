import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    desc: "Step into a world where creativity meets functionality. I specialize in crafting visually stunning and user-friendly websites that elevate your brand. Let's collaborate to turn your digital vision into a captivating reality",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Frontend Development",
    desc: "Step into my Frontend Development portfolio, where creativity meets functionality! Specializing in HTML, CSS, JavaScript, and frameworks like React, I craft captivating digital experiences.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Backend Development",
    desc: "Explore tailored backend solutions designed for your needs. Specializing in Node.js, I create efficient, scalable systems. Trust me for API development, database management, and turning your backend vision into reality.",
  },
];

const Services = () => {
  return (
    <section className="mb-13 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>

        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mt-3 mb-3">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
