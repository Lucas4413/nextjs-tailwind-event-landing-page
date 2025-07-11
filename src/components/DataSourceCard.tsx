import { AnimatedNumberInView } from "./AnimateedNumberInView";
import { Typography } from "@material-tailwind/react";

export function DataSourceCard({item}) {
  if(!item) return<></>

  return (
    <Typography variant="h3">
      <AnimatedNumberInView end={item.count}/>{item.unit}
      <span className="font-normal text-lg block text-gray-700">{item.title}</span>
    </Typography>
  );
}