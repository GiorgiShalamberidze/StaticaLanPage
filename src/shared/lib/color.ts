export type AccentPalette = {
  accent: string;
  accent2: string;
  accent3: string;
  accent4: string;
};

export function deriveAccents(primary: string): AccentPalette {
  const hex = primary.replace("#", "");
  const r = Number.parseInt(hex.slice(0, 2), 16) / 255;
  const g = Number.parseInt(hex.slice(2, 4), 16) / 255;
  const b = Number.parseInt(hex.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    if (max === g) h = ((b - r) / d + 2) / 6;
    if (max === b) h = ((r - g) / d + 4) / 6;
  }

  const toHex = (hue: number, sat: number, light: number) => {
    const c = (1 - Math.abs(2 * light - 1)) * sat;
    const x = c * (1 - Math.abs(((hue * 6) % 2) - 1));
    const m = light - c / 2;
    let rr = 0;
    let gg = 0;
    let bb = 0;

    if (hue < 1 / 6) [rr, gg, bb] = [c, x, 0];
    else if (hue < 2 / 6) [rr, gg, bb] = [x, c, 0];
    else if (hue < 3 / 6) [rr, gg, bb] = [0, c, x];
    else if (hue < 4 / 6) [rr, gg, bb] = [0, x, c];
    else if (hue < 5 / 6) [rr, gg, bb] = [x, 0, c];
    else [rr, gg, bb] = [c, 0, x];

    const part = (n: number) => Math.round((n + m) * 255).toString(16).padStart(2, "0");
    return `#${part(rr)}${part(gg)}${part(bb)}`;
  };

  return {
    accent: primary,
    accent2: toHex((h + 0.1) % 1, Math.min(1, s + 0.05), Math.min(0.65, l + 0.1)),
    accent3: toHex((h + 0.55) % 1, s, Math.max(0.32, l - 0.05)),
    accent4: toHex((h - 0.3 + 1) % 1, s * 0.7, Math.max(0.3, l - 0.1))
  };
}
