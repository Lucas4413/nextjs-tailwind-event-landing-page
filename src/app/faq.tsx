"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { FAQS } from "@/utility/FAQ";

export function Faq() {
  // const [open, setOpen] = React.useState(0);
  // const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const [openQ1, setOpenQ1] = React.useState(true);
  const [openQ2, setOpenQ2] = React.useState(true);
  const handleOpenQ1 = (value: Boolean) => setOpenQ1(!value);
  const handleOpenQ2 = (value: Boolean) => setOpenQ2(!value);

  return (
    <section className="py-8 px-8 lg:py-20 bg-[url('/image/bg-faq.png')] bg-cover bg-no-repeat bg-top bg-center">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h2" className="mb-4 text-[#333333]">
            常见问题
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-5 lg:w-3/5 text-[#666666]"
          >
            以下是一些常见问题，帮助您更好地了解我们的产品和我们公司。
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20 ">
          {/* TODO：如果要放的问题过多则重构此处的代码变成按问题个数自动绑定状态来方便添加和维护 */}
          {/* {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))} */}
          <Accordion
            open={openQ1 === true}
            onClick={() => handleOpenQ1(openQ1)}
            className="bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255, 255, 255, 0.9)] p-[1.25rem] rounded-[6px] shadow-[0_2px_8px_0_rgba(0,47,168,0.1)]"  
          >
            <AccordionHeader className="pointer-events-none text-left p-0 border-0">
              <p className="flex items-center gap-[1rem]">
                <span
                  className="flex items-center justify-center px-[7px] py-[7px] w-[2rem] h-[2rem] rounded-full bg-white text-[rgba(0,63,219,1)] font-semibold shadow-md"
                  style={{ textShadow: "0px 2px 6px rgba(0, 81, 255, 0.4)" }}                  
                >
                  01
                </span>
                <span className="bg-custom-gradient bg-clip-text text-transparent">
                  {FAQS[0].title}
                </span>
              </p>
            </AccordionHeader>
            <AccordionBody className="pt-[1.25rem] pb-0">
              <Typography
                className="font-normal text-[#333333]"
              >
                {FAQS[0].desc}
              </Typography>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={openQ2 === true}
            onClick={() => handleOpenQ2(openQ2)}
            className="bg-[rgba(255,255,255,0.2)] border-[1px] border-[rgba(255, 255, 255, 0.9)] p-[1.25rem] rounded-[6px] shadow-[0_2px_8px_0_rgba(0,47,168,0.1)] mt-[1.25rem]"  
          >
            <AccordionHeader className="pointer-events-none text-left p-0 border-0">
              <p className="flex items-center gap-[1rem]">
                <span
                  className="flex items-center justify-center px-[7px] py-[7px] w-[2rem] h-[2rem] rounded-full bg-white text-[rgba(0,63,219,1)] font-semibold shadow-md"
                  style={{ textShadow: "0px 2px 6px rgba(0, 81, 255, 0.4)" }}                  
                >
                  02
                </span>
                <span className="bg-custom-gradient bg-clip-text text-transparent">
                  {FAQS[1].title}
                </span>
              </p>
            </AccordionHeader>
            <AccordionBody className="pt-[1.25rem] pb-0">
              <Typography
                className="font-normal text-[#333333]"
              >
                {FAQS[1].desc}
              </Typography>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </section>
  );
}


export default Faq;
