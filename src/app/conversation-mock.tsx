"use client";

import { Typography, Carousel, IconButton } from "@material-tailwind/react";
import ConversationCard from "@/components/conversation-card";
import { useTypedOnVisible } from "@/hooks/useTypedOnVisible";
import { useRef, useState, useEffect } from "react";
import { AnimatedNumberInView } from '@/components/AnimateedNumberInView';
import { CONVERSATIONS } from "@/utility/conversation-content";

export function ConversationMock() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentToType = useRef(null);

  const handlePrevManually = () => {
    setCurrentIndex((prev) => (prev - 1 + CONVERSATIONS.length) % CONVERSATIONS.length);
  };

  const handleNextManually = () => {
    setCurrentIndex((prev) => (prev + 1) % CONVERSATIONS.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CONVERSATIONS.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useTypedOnVisible(contentToType,{
    strings: ["关于我们的产品"],
    typeSpeed: 60,
    showCursor: false,
    loop: false,
  })

  return (
    <section className="container mx-auto flex flex-row items-center px-4 py-10">
      {/* <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {CONVERSATIONS.map((item, idx) => (
          <ConversationCard key={idx} {...item} />
        ))}
      </div> */}
      <Carousel
        loop={true}
        prevArrow={({handlePrev}) => (
          <IconButton
           variant="text"
            color="white" 
            size="lg"
            onClick={()=>{handlePrev(); handlePrevManually();}}
            className="!absolute top-2/4 left-0 -translate-y-2/4 bg-black/20 hover:bg-black/40"
          >
            <i className="fas fa-chevron-left text-white text-2xl" />
          </IconButton>
        )}
        nextArrow={({handleNext}) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={()=>{handleNext(); handleNextManually();}}
            className="!absolute top-2/4 right-0 -translate-y-2/4 bg-black/20 hover:bg-black/40"
          >
            <i className="fas fa-chevron-right text-white text-2xl" />
          </IconButton>
        )} 
        autoplay={true}
        autoplayDelay={10000}
        className="w-1/2 rounded-xl basis-1/2">
        {CONVERSATIONS.map((item, idx) => (
          <ConversationCard key={`card-${idx}-${item.title}`} {...item} />
        ))}
      </Carousel>
      
      {/* 提示文字 */}
      <div className="basis-1/2 pl-[10rem]">
        <Typography variant="h6" color="orange" className="mb-6 font-medium">
          大模型效果演示
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight"
          color="blue-gray"
        >
          生物医药领域全知道
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full !text-gray-500 "
        >
          我们药小智模型可以回答不同子领域的问题，包括医药研发、专利布局、注册准入、中药查询等方向。
        </Typography>
      </div>
    </section>
  );
}

export default ConversationMock;
