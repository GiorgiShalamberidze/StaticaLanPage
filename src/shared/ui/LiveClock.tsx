"use client";

import { useEffect, useState } from "react";

export function LiveClock() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour12: false }));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time} UTC</span>;
}
