import React, { useRef, useEffect } from "react";
import { useTypedOnVisible } from "@/hooks/useTypedOnVisible";

interface TypedElementProps {
  children: string;
  className?: string;
  tag: keyof JSX.IntrinsicElements;
}

export function TypedElement({
  children,
  className = "",
  tag: Tag = "p",
}: TypedElementProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = ""; // 清空
    }
  }, [children]); // 每次文字变化时清空

  useTypedOnVisible(ref, {
    strings: [children],
    typeSpeed: 50,
    showCursor: false,
  });

  return React.createElement(Tag, { ref, className }, children);
}
