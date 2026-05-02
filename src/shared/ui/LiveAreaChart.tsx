"use client";

import { useEffect, useMemo, useState } from "react";
import { pointsToPath, seededSeries } from "@/shared/lib/chart-data";

type LiveAreaChartProps = {
  ariaLabel?: string;
  axisLabels?: string[];
  height?: number;
  points?: number;
};

export function LiveAreaChart({ ariaLabel = "Live active user area chart", axisLabels = ["08:00", "10:00", "12:00", "14:00", "NOW"], height = 280, points = 80 }: LiveAreaChartProps) {
  const width = 920;
  const padTop = 16;
  const padBottom = 24;
  const innerHeight = height - padTop - padBottom;
  const [data, setData] = useState(() => seededSeries(points, 2401, 0.56));
  const monoFont = { fontFamily: "var(--font-mono)" };

  useEffect(() => {
    const id = window.setInterval(() => {
      setData((previous) => {
        const last = previous[previous.length - 1] ?? 0.56;
        const next = Math.max(0.15, Math.min(0.95, last + (Math.sin(Date.now() / 1400) * 0.04 + 0.012)));
        return [...previous.slice(1), Number(next.toFixed(4))];
      });
    }, 900);

    return () => window.clearInterval(id);
  }, []);

  const path = useMemo(() => pointsToPath(data, width, innerHeight, padTop), [data, innerHeight]);
  const area = `${path} L${width},${padTop + innerHeight} L0,${padTop + innerHeight} Z`;
  const last = data[data.length - 1] ?? 0;
  const lastX = width;
  const lastY = padTop + (1 - last) * innerHeight;

  return (
    <svg aria-label={ariaLabel} role="img" viewBox={`0 0 ${width} ${height}`} width="100%">
      <defs>
        <linearGradient id="live-area-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((grid) => (
        <line key={grid} x1="0" x2={width} y1={padTop + grid * innerHeight} y2={padTop + grid * innerHeight} stroke="var(--line)" strokeDasharray="2 4" />
      ))}
      <path d={area} fill="url(#live-area-gradient)" />
      <path d={path} fill="none" stroke="var(--accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <circle cx={lastX} cy={lastY} r="6" fill="var(--accent)" opacity="0.18" />
      <circle cx={lastX} cy={lastY} r="3" fill="var(--accent)" />
      <g transform={`translate(${lastX - 64}, ${lastY - 32})`}>
        <rect x="0" y="0" width="60" height="22" rx="4" fill="var(--ink)" />
        <text x="30" y="15" textAnchor="middle" style={monoFont} fontSize="11" fill="var(--bg)">
          {(last * 100).toFixed(1)}%
        </text>
      </g>
      {axisLabels.map((label, index) => (
        <text
          key={label}
          x={(index * width) / 4}
          y={height - 6}
          textAnchor={index === 0 ? "start" : index === 4 ? "end" : "middle"}
          style={monoFont}
          fontSize="10"
          fill="var(--ink-3)"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}
