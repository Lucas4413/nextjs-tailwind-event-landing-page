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
    <section className="container mock-conversation mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-10">
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
            className="!absolute top-2/4 left-0 -translate-y-2/4 bg-black/10 hover:bg-black/30 rounded-full"
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
            className="!absolute top-2/4 right-0 -translate-y-2/4 bg-black/10 hover:bg-black/30 rounded-full"
          >
            <i className="fas fa-chevron-right text-white text-2xl" />
          </IconButton>
        )} 
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute -bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2 bg-[rgba(0,0,0,0.1)] rounded-[24px] px-[0.625rem] py-[0.5rem]">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`block h-2 cursor-pointer rounded-full transition-all shadow-[0_0_4px_0_rgba(0,0,0,0.05)]
                ${
                  activeIndex === i ? "bg-white" : "bg-[rgba(255,255,255,0.5)]"
                }
                ${
                  activeIndex === i ? "w-[1.5rem]" : "w-[0.5rem]"
                }`}
              />
            ))}
          </div>
        )}
        autoplay={true}
        autoplayDelay={10000}
        className="md:w-1/2 rounded-xl basis-1/2">
        {CONVERSATIONS.map((item, idx) => (
          <ConversationCard key={`card-${idx}-${item.title}`} {...item} />
        ))}
      </Carousel>
      
      {/* 提示文字 */}
      <div className="basis-1/2 md:pl-[7rem]">
        <Typography variant="h6" 
          className="w-fit bg-custom-gradient text-white mb-6 font-medium px-[10px] py-px rounded-[0.25rem]">
          大模型效果演示
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight text-[#333333]"
          color="blue-gray"
        >
          生物医药领域全知道
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full text-[#333333]"
        >
          聚焦生物医药领域多个子领域的专业需求，“药小智” 大模型已实现对医药研发、专利布局、注册准入、中药查询等方向专业问题的深度解析与高效解答，为各细分场景的决策环节注入 AI 技术以实现赋能。
        </Typography>
      </div>
    </section>
  );
}

export default ConversationMock;
