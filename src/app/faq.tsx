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
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            常见问题
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-5 lg:w-3/5 !text-gray-500"
          >
            以下是一些常见问题，帮助您更好地了解我们的产品和我们公司。
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
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
            >
              <AccordionHeader className="text-left text-gray-900">
                {FAQS[0].title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {FAQS[0].desc}
                </Typography>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openQ2 === true}
              onClick={() => handleOpenQ2(openQ2)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {FAQS[1].title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
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
