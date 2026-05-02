type SparklineProps = {
  data: number[];
  color?: string;
  height?: number;
  width?: number;
};

export function Sparkline({ data, color = "var(--accent)", height = 36, width = 110 }: SparklineProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const path = data
    .map((value, index) => {
      const x = (index * width) / Math.max(1, data.length - 1);
      const y = height - ((value - min) / (max - min || 1)) * height;
      return `${index === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  return (
    <svg aria-hidden="true" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path d={path} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}
