import {
  Card,
  CardBody,
  Typography,
  Button,
  CardHeader,
} from "@material-tailwind/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TypedElement } from "./TypedElement";
import { extractText } from "@/utility/utils";
import ThreeDots from "./ThreeDots";
import YaoXiaoZhiLogo from "./YaoXiaoZhiLogo";

interface AboutCardProp {
  title: string;
  question: string;
  answer: string;
}

export function ConversationCard({ title = "", question = "", answer = "" }: AboutCardProp) {
  return (
    <Card shadow={false} className="bg-transparent">
      <CardBody className="conversation-card-body py-5 px-[3.25rem] flex flex-col justify-start rounded-2xl">
        <div className="text-black font-bold text-4xl text-center">
          <span className="rounded-t-[8px] bg-[rgba(255,255,255,0.4)] border border-white shadow-[0_0_8px_0_rgba(0,0,0,0.05)] px-[1.25rem] pt-[0.25rem]">
            {title}
          </span>
        </div>

        {/* 设置边框分割标题和问答 */}
        <div className="border border-white p-[10px] bg-[rgba(255,255,255,0.1)] rounded-[16px] shadow-[0_0_8px_0_rgba(173,193,222,0.4)]">
        <div className="bg-[rgba(210,226,250,1)] h-[30px] rounded-t-[12px] flex items-center">
          <ThreeDots></ThreeDots>
          <div className="h-[1.5rem] self-end bg-white flex items-center justify-center rounded-t-[6px] p-[0.375rem] ml-[2.5rem]">
            <a href="https://www.yaozh.com/" target="_blank" rel="noopener noreferrer" 
              className="flex items-center h-full gap-2">
              <img
                className="h-full w-auto"
                src="/image/药小智_3D.png"
                alt="药智网Logo"
                      >
              </img>
              <Typography className="text-[13px] font-semibold leading-none">
                <span className="bg-custom-gradient bg-clip-text text-transparent">
                  药小智 -
                </span>
                <span className="text-[#333333]">
                  &nbsp;生物医药行业大模型
                </span>
              </Typography>
            </a>
          </div>
          <i className="fa-solid fa-plus pl-[0.5rem]"></i>
        </div>
        <div className="w-full border border-none rounded-b-[12px] h-[500px] p-4 flex flex-col gap-4 flex-grow overflow-hidden bg-white">
          <div className="text-black flex">
            <i className="fa-solid fa-circle-user text-[1.5rem] pr-[0.625rem] text-[rgba(195,202,217,1)]"></i>
            <div className="rounded-[0_8px_8px_8px] bg-[rgba(230,237,250,1)] px-[0.625rem] py-[0.5rem]">
              <span className="text-[16px] font-bold bg-custom-gradient bg-clip-text text-transparent">
                {question}
              </span>
            </div>
          </div>
          <div className="flex-grow flex flex-row min-h-0 text-black">
            <div className="pr-[0.625rem] text-2xl shrink-0">
              <img
                className="w-[1.5rem] h-[1.5rem]"
                src="/image/药小智_3D.png"
                alt="药智网Logo"
                      >
              </img>
            </div>
            <div className="flex-grow text-black overflow-auto scrollbar-hide prose prose-sm markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ children }) => (
                    <TypedElement tag="p" key={`typed-${title}-p`}>
                      {extractText(children)}
                    </TypedElement>
                  ),
                  h3: ({ children }) => (
                    <TypedElement tag="h3" className="text-lg font-bold" key={`typed-${title}-h3`}>
                      {extractText(children)}
                    </TypedElement>
                  ),
                  li: ({ children }) => (
                    <TypedElement tag="li" className="ml-4 list-disc" key={`typed-${title}-li`}>
                      {extractText(children)}
                    </TypedElement>
                  ),
                }}
              >
              {answer}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ConversationCard;
