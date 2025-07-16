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
    <div className="relative min-h-screen w-full bg-[url('/image/首页大图.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h1" color="white" className="mb-2">
            药小智
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl">
            生物医药行业大模型
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            DeepSeek基座模型 &nbsp;&nbsp;
            千万+满血版蒸馏数据 &nbsp;&nbsp;
            700亿参数大模型基座
          </Typography>
          <div className="flex items-center gap-4">
            {/* 根据登录状态来显示合适的按钮 */}
            {isLoggedIn ? 
              <a href="https://chatmeds.yaozh.com/home" target="_blank">
                <Button 
                  variant="gradient" 
                  color="white" 
                  className="bg-white text-black hover:bg-gray-200">
                  立即体验
                </Button> 
              </a>:
              <Button 
                variant="gradient" 
                color="white" 
                className="bg-white text-black hover:bg-gray-200"
                onClick={handleOpen}>
                立即申请
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
