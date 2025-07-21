"use client";

import { Typography } from "@material-tailwind/react";
import { DataSourceCard } from "@/components/DataSourceCard";

const dataSource = [
  {
    count: 6,
    unit: "亿",
    title: "高质量问答对",
  },
  {
    count: 50,
    unit: "亿+",
    title: "总训练Toekn",
  },
  {
    count: 4000,
    unit: "万",
    title: "医药研发",
  },
  {
    count: 2000,
    unit: "万",
    title: "专利布局",
  },
  {
    count: 1000,
    unit: "万",
    title: "注册准入",
  },
  {
    count: 1,
    unit: "亿",
    title: "医疗器械",
  },
  {
    count: 300,
    unit: "万",
    title: "实体机构",
  },
  {
    count: 300,
    unit: "万",
    title: "市场销售",
  },
  {
    count: 50,
    unit: "万",
    title: "合理用药",
  },
  {
    count: 300,
    unit: "万",
    title: "仿制药",
  },
  {
    count: 300,
    unit: "万",
    title: "投融资",
  },
  {
    count: 100,
    unit: "万",
    title: "中药",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid px-8 pt-20 pb-10 lg:grid-cols-1 xl:grid-cols-2 xl:place-items-center">
      <Typography variant="h2" className="text-center md:col-span-2 pb-20" color="blue-gray">
        为什么选择药小智？
      </Typography>
      <div>
        <Typography variant="h6" 
          className="w-fit bg-custom-gradient mb-6 font-medium text-white px-[10px] py-px rounded-[0.25rem]">
          大模型训练数据
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4 text-[#333333]"
        >
          全精度训练数据
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full lg:w-9/12 text-[#333333]"
        >
          针对生物医药领域内多个细分领域，开展了系统性的海量数据集收集与标准化处理工作。依托该体系所奠定的坚实数据基础，成功完成了 “药小智” 大模型的全流程训练与性能优化，为其在生物医药全链条应用中的深度落地提供了核心技术支撑。
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-8 gap-x-28">
          {/* {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))} */}
          {dataSource.map((item, index)=>(
            <DataSourceCard key={index} item={item}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
