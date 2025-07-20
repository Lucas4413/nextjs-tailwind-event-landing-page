import { Typography } from "@material-tailwind/react";

export default function YaoXiaoZhiLogo({className}) {
  return (
    <a href="https://www.yaozh.com/" target="_blank" rel="noopener noreferrer" 
      className={className}>
        <img
          className="md:w-[5%] w-[15%] h-auto"
          src="/image/药小智_3D.png"
          alt="药小智Logo"
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
  );
}