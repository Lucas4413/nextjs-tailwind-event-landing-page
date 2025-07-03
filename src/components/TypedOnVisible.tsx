import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

interface TypedOnVisibleProps {
  strings: string[];
  className?: string;
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
}

export function TypedOnVisible({
  strings,
  className = "",
  typeSpeed = 50,
  backSpeed = 30,
  loop = false,
  showCursor = true
}: TypedOnVisibleProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!spanRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          new Typed(spanRef.current!, {
            strings,
            typeSpeed,
            backSpeed,
            loop,
            showCursor,
            onComplete: () => {
              if (!loop && !showCursor) {
                const cursor = document.querySelector(".typed-cursor");
                if (cursor) (cursor as HTMLElement).style.display = "none";
              }
            }
          });
          setAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(spanRef.current);

    return () => observer.disconnect();
  }, [animated]);

  return <span ref={spanRef} className={className} />;
}
