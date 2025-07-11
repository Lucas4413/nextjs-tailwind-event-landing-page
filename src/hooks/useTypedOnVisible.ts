import { useEffect, useState, RefObject } from "react";
import Typed from "typed.js";

// 打字动画的属性
interface UseTypedOnVisibleOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
}

// hook函数用于通过ref绑定组件与动画效果
export function useTypedOnVisible(
  targetRef: RefObject<HTMLElement>,
  options: UseTypedOnVisibleOptions
) {
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasTyped) {
          new Typed(targetRef.current!, {
            strings: options.strings,
            typeSpeed: options.typeSpeed ?? 50,
            backSpeed: options.backSpeed ?? 30,
            loop: options.loop ?? false,
            showCursor: options.showCursor ?? true,
            onComplete: () => {
              if (!options.loop && !options.showCursor) {
                const cursor = document.querySelector(".typed-cursor");
                if (cursor) (cursor as HTMLElement).style.display = "none";
              }
            }
          });

          setHasTyped(true);
        }
      },
      { threshold: 0 }
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef, hasTyped, options]);
}
