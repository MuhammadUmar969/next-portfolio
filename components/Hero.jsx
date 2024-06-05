import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:h-[120vh] lg:h-[140vh] sm:h-[80vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-orange-500 tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">
              Hello, my name is Muhammad Umar Aziz Khan
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage professionally
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                <a href="/cv/Umar.pdf" download="Umar.pdf">
                  Download CV
                </a>
              </Button>
            </div>

            <Socials
              containerStyles="flex px-[120px] gap-x-10 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-orange-500 transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[35rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Years of Experience"
            />
            <Badge
              containerStyles="absolute top-[78%] -left-[30rem]"
              icon={<RiTodoFill />}
              endCountNum={50}
              endCountText="+"
              badgeText="Finished Projects"
            />
            <Badge
              containerStyles="absolute top-[58%] -left-[12rem]"
              icon={<RiTeamFill />}
              endCountNum={20}
              endCountText="+"
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom "
                imgSrc="/hero/developer.png"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-0 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-orange-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
