import { pointsToPath, seededSeries } from "@/shared/lib/chart-data";
import type { SiteCopy } from "@/features/landing/content/statica";

type DashboardMockProps = {
  copy: SiteCopy["dashboard"]["mock"];
};

export function DashboardMock({ copy }: DashboardMockProps) {
  const wave = seededSeries(60, 818, 0.5);
  const wave2 = seededSeries(60, 1212, 0.4);
  const path1 = pointsToPath(wave, 560, 180, 10);
  const path2 = pointsToPath(wave2, 560, 180, 30);
  const displayFont = { fontFamily: "var(--font-display)" };
  const bodyFont = { fontFamily: "var(--font-body)" };
  const monoFont = { fontFamily: "var(--font-mono)" };

  return (
    <svg aria-label={copy.ariaLabel} role="img" viewBox="0 0 1200 740" width="100%">
      <defs>
        <linearGradient id="dashboard-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="740" fill="var(--card)" />
      <rect width="220" height="740" fill="var(--paper)" />
      <text x="28" y="40" style={displayFont} fontSize="20" fill="var(--ink)">Statica</text>
      <circle cx="190" cy="36" r="3" fill="var(--accent)" />
      {copy.sidebar.map((label, index) => (
        <g key={label} transform={`translate(20, ${90 + index * 36})`}>
          {index === 0 ? <rect x="0" y="-12" width="180" height="26" rx="6" fill="var(--ink)" opacity="0.06" /> : null}
          <circle cx="10" cy="0" r="2.5" fill={index === 0 ? "var(--accent)" : "var(--ink-3)"} />
          <text x="22" y="4" style={bodyFont} fontSize="13" fill={index === 0 ? "var(--ink)" : "var(--ink-2)"} fontWeight={index === 0 ? 600 : 400}>
            {label}
          </text>
        </g>
      ))}
      <line x1="220" y1="64" x2="1200" y2="64" stroke="var(--line)" />
      <text x="248" y="40" style={monoFont} fontSize="11" fill="var(--ink-3)" letterSpacing="0.1em">{copy.overviewToday}</text>
      <rect x="700" y="22" width="300" height="28" rx="6" fill="var(--bg)" stroke="var(--line)" />
      <text x="716" y="40" style={bodyFont} fontSize="12" fill="var(--ink-3)">{copy.searchPlaceholder}</text>
      <rect x="1020" y="22" width="92" height="28" rx="6" fill="var(--ink)" />
      <text x="1066" y="40" textAnchor="middle" style={bodyFont} fontSize="11" fill="var(--bg)">{copy.live}</text>

      {copy.cards.map((card, index) => (
        <g key={card.label} transform={`translate(${248 + index * 195}, 84)`}>
          <rect width="180" height="120" rx="8" fill="var(--bg)" stroke="var(--line)" />
          <text x="14" y="22" style={monoFont} fontSize="10" fill="var(--ink-3)" letterSpacing="0.1em">{card.label.toUpperCase()}</text>
          <text x="14" y="62" style={displayFont} fontSize="32" fill="var(--ink)">{card.value}</text>
          <text x="14" y="84" style={monoFont} fontSize="11" fill={card.color}>{card.delta}</text>
          <path d={pointsToPath((index % 2 === 0 ? wave : wave2).slice(0, 30), 70, 40, 10)} transform="translate(96, 50)" fill="none" stroke={card.color} strokeWidth="1.5" />
        </g>
      ))}

      <g transform="translate(248, 220)">
        <rect width="600" height="280" rx="8" fill="var(--bg)" stroke="var(--line)" />
        <text x="20" y="28" style={monoFont} fontSize="10" fill="var(--ink-3)" letterSpacing="0.12em">{copy.recordFlowLabel}</text>
        <text x="20" y="58" style={displayFont} fontSize="20" fill="var(--ink)">{copy.recordFlowTitle}</text>
        <g transform="translate(380, 24)">
          <circle r="4" fill="var(--accent)" /><text x="10" y="4" style={bodyFont} fontSize="11" fill="var(--ink-2)">{copy.recordFlowLegend[0]}</text>
          <circle cx="80" r="4" fill="var(--accent-3)" /><text x="90" y="4" style={bodyFont} fontSize="11" fill="var(--ink-2)">{copy.recordFlowLegend[1]}</text>
          <circle cx="180" r="4" fill="var(--accent-2)" /><text x="190" y="4" style={bodyFont} fontSize="11" fill="var(--ink-2)">{copy.recordFlowLegend[2]}</text>
        </g>
        <g transform="translate(20, 80)">
          {[0, 1, 2, 3].map((index) => <line key={index} x1="0" x2="560" y1={index * 50} y2={index * 50} stroke="var(--line)" strokeDasharray="2 4" />)}
          <path d={`${path1} L560,190 L0,190 Z`} fill="url(#dashboard-gradient)" />
          <path d={path1} fill="none" stroke="var(--accent)" strokeWidth="2" />
          <path d={path2} fill="none" stroke="var(--accent-3)" strokeWidth="2" />
        </g>
      </g>

      <g transform="translate(868, 220)">
        <rect width="312" height="280" rx="8" fill="var(--bg)" stroke="var(--line)" />
        <text x="20" y="28" style={monoFont} fontSize="10" fill="var(--ink-3)" letterSpacing="0.12em">{copy.topReasonsLabel}</text>
        <text x="20" y="58" style={displayFont} fontSize="20" fill="var(--ink)">{copy.topReasonsTitle}</text>
        {copy.topReasons.map((row, index) => (
          <g key={row.name} transform={`translate(20, ${88 + index * 34})`}>
            <text x="0" y="12" style={bodyFont} fontSize="13" fill="var(--ink)">{row.name}</text>
            <rect x="0" y="20" width="272" height="4" rx="2" fill="var(--line)" />
            <rect x="0" y="20" width={272 * (row.value / 168)} height="4" rx="2" fill={row.color} />
            <text x="272" y="12" textAnchor="end" style={monoFont} fontSize="11" fill="var(--ink-2)">{row.value}</text>
          </g>
        ))}
      </g>

      <g transform="translate(248, 520)">
        <rect width="932" height="200" rx="8" fill="var(--bg)" stroke="var(--line)" />
        <text x="20" y="28" style={monoFont} fontSize="10" fill="var(--ink-3)" letterSpacing="0.12em">{copy.departmentHealthLabel}</text>
        <text x="20" y="58" style={displayFont} fontSize="20" fill="var(--ink)">{copy.departmentHealthTitle}</text>
        <g transform="translate(20, 80)">
          {copy.departmentHeaders.map((heading, index) => (
            <text key={heading} x={[0, 240, 360, 500, 760][index]} y="0" style={monoFont} fontSize="10" fill="var(--ink-3)" letterSpacing="0.1em">
              {heading.toUpperCase()}
            </text>
          ))}
          <line x1="0" x2="892" y1="12" y2="12" stroke="var(--line)" />
          {copy.departmentRows.map((row, index) => (
            <g key={row.department} transform={`translate(0, ${28 + index * 28})`}>
              <text x="0" y="0" style={bodyFont} fontSize="12" fill="var(--ink)">{row.department}</text>
              <text x="240" y="0" style={monoFont} fontSize="12" fill="var(--ink-2)">{row.records}</text>
              <rect x="360" y="-8" width="100" height="6" rx="3" fill="var(--line)" />
              <rect x="360" y="-8" width={100 * row.retention} height="6" rx="3" fill={row.color} />
              <text x="466" y="0" style={monoFont} fontSize="10" fill="var(--ink-3)">{Math.round(row.retention * 100)}%</text>
              <circle cx="766" cy="-3" r="3" fill={row.color} />
              <text x="776" y="0" style={bodyFont} fontSize="12" fill="var(--ink)" fontWeight="500">{row.status}</text>
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}
