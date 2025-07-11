"use client";

import { Typography, Button, IconButton } from "@material-tailwind/react";
import Copyright from "./Copyright";

const CURRENT_YEAR = new Date().getFullYear();
// const LINKS = ["关于我们", "产品与服务", "资质荣誉", "联系我们", "帮助中心"];
const LINKS = [{
  content: "关于我们",
  linkto: "https://about.yaozh.com/intro.html"
},
{
  content: "产品与服务",
  linkto: "https://about.yaozh.com/about.html"
},
{
  content: "资质荣誉",
  linkto: "https://about.yaozh.com/qualification.html"
},
{
  content: "联系我们",
  linkto: "https://about.yaozh.com/contact.html"
},
{
  content: "帮助中心",
  linkto: "https://help.yaozh.com/"
},]
export function Footer() {
  return (
    <footer className="pb-5 md:pt-10 border-t-[3px]">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <a href="https://www.yaozh.com/" target="_blank" rel="noopener noreferrer" className="flex-1">
            <img
            className="w-[50%] h-auto"
            src="/image/赞.jpg"
            alt="药智网Logo"/>
          </a>
          <div className="flex-2">
            <ul className="flex my-4 md:my-0 mx-auto items-center gap-4 w-full">
              {LINKS.map((link, index) => (
                <li key={index}>
                  <Typography
                    as="a"
                    href={link.linkto}
                    variant="small"
                    color="white"
                    target="_blank"
                    className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                  >
                    {link.content}
                  </Typography>
                </li>
              ))}
            </ul>
            <Copyright/>
          </div>
          <div className="flex-1 flex flex-col w-fit gap-2 pl-[3rem]">
            <div className="flex flex-col items-center">
              <img alt="微信公众号" src="/image/yaozh.png" className="w-[60%] h-auto"></img>
              <span>药智网公众号</span> 
            </div>
            <div className="flex flex-col items-center">
              <img alt="企业试用申请" src="/image/qrcode-zhihu.png"className="w-[60%] h-auto"></img>
              <span>药智数据试用申请</span>
            </div>
          </div>
        </div>
        {/* <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            Material Tailwind
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a>
          .
        </Typography> */}
      </div>
    </footer>
  );
}

export default Footer;
