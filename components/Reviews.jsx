"use client";

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ReviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "slapoutsourcing",
    review:
      "Umar, was one of the easiest people to work with that I have ever come across. He is polite, highly proficient, and has an incredible work ethic. If you are looking for website development, this is your guy. All around superstar.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "johngplacido",
    review:
      "Umar is so professional. He was able to do the work in a timely and professional manner. He knows what he was doing.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "nakulrawal",
    review:
      "Umar always works hard to complete his orders ahead of schedule and make any changes necessary to ensure client satisfaction. He is a very friendly person to work with. I will definitely do business with him again. Thank you, Umar!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "maurader",
    review:
      "He is very good at his work and very communicative, Highly recommend",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "odhiambo",
    review:
      "Website was delivered as requested. I would recommend and would work with Umar again.",
  },
];
const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {ReviewsData.map((person, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={person.avatar}
                      alt=""
                      height={70}
                      width={70}
                      priority
                    />
                    <div>
                      <CardTitle>{person.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {person.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
