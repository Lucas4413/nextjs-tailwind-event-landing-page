import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export function AnimatedNumberInView({ end = 650, className="" }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {start && <CountUp end={end} className={className} duration={2} />}
    </span>
  );
}
