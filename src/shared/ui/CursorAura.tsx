"use client";

import { useEffect } from "react";

export function CursorAura() {
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div aria-hidden="true" className="cursor-aura" />;
}
