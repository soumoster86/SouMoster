"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function parseStatValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

interface AnimatedStatValueProps {
  value: string;
}

export function AnimatedStatValue({ value }: AnimatedStatValueProps) {
  const { number, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(number * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, number]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}