import { useEffect, useState, RefObject } from "react";
import Typed from "typed.js";

interface UseTypedOnVisibleOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
}

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
      { threshold: 0.5 }
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef, hasTyped, options]);
}
