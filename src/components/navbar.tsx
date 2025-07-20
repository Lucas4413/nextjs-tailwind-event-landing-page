/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useGlobalStates } from '@/store/useGlobalStates';
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "应用",
    icon: RectangleStackIcon,
  },
  {
    name: "账户",
    icon: UserCircleIcon,
  },
  {
    name: "文档",
    icon: CommandLineIcon,
    href: "https://www.material-tailwind.com/docs/react/installation",
  },
];

export function Navbar() {
  const { isLoggedIn, setLoggedIn } = useGlobalStates();
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      // color="white"
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
      {/* <div className="container flex items-center justify-between"> */}
        <a href="https://www.yaozh.com/" target="_blank" rel="noopener noreferrer" 
        className="basis-1/2 flex items-center">
          <img
            className="md:w-[5%] w-[15%] h-auto"
            src="/image/药小智_3D.png"
            alt="药智网Logo"
          >
          </img>
          <Typography className="text-2xl font-semibold">
            <span className="bg-custom-gradient bg-clip-text text-transparent">
              药小智 -
            </span>
            <span className="text-[#333333]">
              &nbsp;生物医药行业大模型
            </span>
          </Typography>
        </a>
        {/* <Typography
          color={isScrolling ? "blue-gray" : "white"}
          className="text-lg font-bold"
        >
          公司名/平台名
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul> */}
        <div className="basis-1/2 flex items-center gap-4 justify-end">
          {/* 根据登录状态显示登录按钮或用户头像 */}
          { isLoggedIn ? "" : 
          <Button variant="text" 
            className={`hidden md:inline-block text-[#333333] rounded-[20px] shadow-[0_4px_8px_0_rgba(0,0,0,0.05) ${isScrolling ? 'bg-[rgba(237,244,255,1)]' : 'bg-white'}`}>
            登录
          </Button>}
          
          {/* <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"}>博客</Button>
          </a> */}
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "gray"}
          onClick={handleOpen}
          className="ml-auto inline-block md:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open} className="absolute">
        <div className="ml-auto mr-1 rounded-lg bg-white px-1 py-2 w-[20%] text-center">
          {/* <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul> */}
          <div className="">
            <Button variant="text" className="text-[#333333] rounded-[20px] shadow-[0_4px_8px_0_rgba(0,0,0,0.05)]">登录</Button>
            {/* <a href="https://www.materila-tailwind.com/blocks" target="_blank">
              <Button color="gray">博客</Button>
            </a> */}
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
