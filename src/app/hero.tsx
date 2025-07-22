"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useGlobalStates } from "@/store/useGlobalStates";
import { useState, useEffect } from "react";
import { ApplyForm } from "@/components/ApplyForm";

function Hero() {
  const { isLoggedIn, setLoggedIn } = useGlobalStates();
  const [ showApplyForm, setShowApplyForm ] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  // 去掉申请表单出现时自动给body添加的padding
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.paddingRight = "0px"; 
      body.classList.add("dialog-open"); // optional helper class
    } else {
      body.style.paddingRight = ""; // restore default when closed
      body.classList.remove("dialog-open");
    }
  }, [open]);

  return (
    <div className="relative min-h-screen w-full bg-[url('/intro/image/背景图.png')] bg-cover bg-no-repeat bg-top bg-center">
      {/* <div className="absolute inset-0 h-full w-full bg-gray-900/60" /> */}

      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h1" color="white" className="mb-2 bg-custom-gradient bg-clip-text text-transparent">
            药小智
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl text-black">
            生物医药行业大模型
          </Typography>
          <Typography as="div"
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-3xl flex"
          >
            <div className="px-[1.25rem] py-[0.5rem] bg-white text-black border-[6px] border-white rounded-full shadow-[inset_0_0_6px_0_rgba(168,196,255,1)] shadow-[0_0_8px_0_rgba(0,0,0,0.05)]">
              <span className="bg-custom-gradient bg-clip-text text-transparent">DeepSeek</span>
              <span>基座模型</span>
            </div>
            <div className="mx-[0.5rem] px-[1.25rem] py-[0.5rem] bg-white text-black border-[6px] border-white rounded-full shadow-[inset_0_0_6px_0_rgba(168,196,255,1)] shadow-[0_0_8px_0_rgba(0,0,0,0.05)]">
              <span className="bg-custom-gradient bg-clip-text text-transparent">千万+</span>
              <span>满血版蒸馏数据</span>
            </div>
            <div className="px-[1.25rem] py-[0.5rem] bg-white text-black border-[6px] border-white rounded-full shadow-[inset_0_0_6px_0_rgba(168,196,255,1)] shadow-[0_0_8px_0_rgba(0,0,0,0.05)]">
              <span className="bg-custom-gradient bg-clip-text text-transparent">700亿</span>
              <span>参数大模型基座</span>
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            {/* 根据登录状态来显示合适的按钮 */}
            {isLoggedIn ? 
              <a href="https://chatmeds.yaozh.com/home" target="_blank">
                <Button 
                  variant="gradient" 
                  color="white" 
                  className="bg-custom-gradient">
                  立即体验
                </Button> 
              </a>:
              <Button 
                variant="gradient" 
                color="white" 
                className="bg-custom-gradient text-white rounded-full h-[3rem] w-[12rem]"
                onClick={handleOpen}>
                内测申请
              </Button> 
            }          
          </div>
        </div>
      </div>
      <ApplyForm open={open} handleOpen={handleOpen}/>
    </div>
  );
}

export default Hero;
