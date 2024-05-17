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
    desc: "Welcome to my Frontend Development portfolio, where creativity meets functionality! As a passionate frontend developer, I specialize in crafting captivating digital experiences that seamlessly blend aesthetics with user-friendly interfaces. With expertise in HTML, CSS, JavaScript, and various frameworks like React and Next, I thrive in transforming ideas into visually stunning and responsive web applications. Explore my portfolio to witness how I turn visions into reality, one pixel at a time",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Backend Development",
    desc: "Discover seamless backend solutions tailored to your needs. I specialize in crafting efficient, scalable systems using Node.js. From API development to database management, trust me to power your applications with precision and reliability. Let's bring your backend vision to life.",
  },
];

const Services = () => {
  return (
    <section className="mb-13 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title">My Services</h2>
      </div>
    </section>
  );
};

export default Services;
