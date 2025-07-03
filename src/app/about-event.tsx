"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";
import { useTypedOnVisible } from "@/hooks/useTypedOnVisible";
import { useRef } from "react";
import { AnimatedNumberInView } from '@/components/AnimateedNumberInView';

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  const contentToType = useRef(null);

  useTypedOnVisible(contentToType,{
    strings: ["关于我们的产品"],
    typeSpeed: 50,
    showCursor: false,
    loop: false,
  })

  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h4" className="text-centeer mb-2 text-blue-500" color="orange">
        <AnimatedNumberInView end={1000} className=""></AnimatedNumberInView>万
      </Typography>

      <Typography variant="h6" className="text-center mb-2" color="orange">
        {/* About the event */}
        <span ref={contentToType}/>
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Attend?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Welcome to the AI Conference 2023, where the future unfolds! Whether
        you&apos;re a seasoned AI professional, a curious newcomer, or a
        business leader looking to harness the power of AI, this conference is
        designed to inspire, educate, and connect.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
