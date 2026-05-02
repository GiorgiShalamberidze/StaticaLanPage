"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

export function Counter({ to, from = 0, duration = 1400, decimals = 0, prefix = "", suffix = "" }: CounterProps) {
  const [value, setValue] = useState(from);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min(1, (time - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + (to - from) * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [decimals, duration, from, to]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return (
    <span className="tab-num">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
