export function seededSeries(length: number, seed: number, start = 0.52, drift = 0.48) {
  let state = seed;
  let value = start;
  const out: number[] = [];

  for (let index = 0; index < length; index += 1) {
    state = (state * 1664525 + 1013904223) % 4294967296;
    const random = state / 4294967296;
    value += (random - drift) * 0.09;
    value = Math.max(0.12, Math.min(0.94, value));
    out.push(Number(value.toFixed(4)));
  }

  return out;
}

export function pointsToPath(data: number[], width: number, height: number, top = 0) {
  if (data.length === 0) return "";
  return data
    .map((value, index) => {
      const x = (index * width) / Math.max(1, data.length - 1);
      const y = top + (1 - value) * height;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}
