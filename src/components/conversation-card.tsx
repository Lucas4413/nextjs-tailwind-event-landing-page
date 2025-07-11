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

interface AboutCardProp {
  title: string;
  question: string;
  answer: string;
}

export function ConversationCard({ title = "", question = "", answer = "" }: AboutCardProp) {
  return (
    <Card shadow={false} className="">
      <CardBody className="conversation-card-body h-[600px] p-5 flex flex-col justify-start rounded-2xl bg-white">
        <div className="text-black font-bold text-4xl mb-2 text-center">{title}</div>
        
        {/* 设置边框分割标题和问答 */}
        <div className="w-full border border-black rounded-lg p-4 flex flex-col gap-4 flex-grow overflow-hidden">
          <div className="text-black text-2xl">
            <i className="fa-solid fa-circle-user pr-[1rem]"> :</i>{question}
          </div>
          <div className="flex-grow flex flex-row gap-1 min-h-0 text-black">
            <div className="pr-4 text-2xl shrink-0">
              <i className="fa-solid fa-robot"> : </i>
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
      </CardBody>
    </Card>
  );
}

export default ConversationCard;
