"use client";

import { Search } from "lucide-react";
import { useLanguage } from "@/shared/providers/LanguageProvider";
import type { SiteCopy } from "@/features/landing/content/statica";

export function Features() {
  const { copy } = useLanguage();
  const section = copy.featuresSection;

  return (
    <section id="features" className="container section" aria-labelledby="features-title">
      <div className="section-intro-grid">
        <div>
          <span className="eyebrow">{section.eyebrow}</span>
          <h2 className="section-title balance" id="features-title">
            {section.titleTop}
            <br />
            {section.titleBottom}
          </h2>
        </div>
        <p className="section-copy pretty">{section.description}</p>
      </div>
      <div className="feature-grid">
        {section.items.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <div>
              <div className="micro-label">{section.featurePrefix} - {feature.number}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <div className="feature-preview">
              <Preview copy={section} kind={feature.preview} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Preview({ copy, kind }: { copy: SiteCopy["featuresSection"]; kind: SiteCopy["featuresSection"]["items"][number]["preview"] }) {
  if (kind === "ingestion") return <IngestionPreview rows={copy.previews.ingestion} />;
  if (kind === "sync") return <SyncPreview copy={copy.previews.sync} />;
  if (kind === "analysis") return <AnalysisPreview rows={copy.previews.analysis} />;
  if (kind === "reporting") return <ReportingPreview rows={copy.previews.reporting} />;
  if (kind === "comparison") return <ComparisonPreview rows={copy.previews.comparison} />;
  if (kind === "search") return <SearchPreview copy={copy.previews.search} />;
  return null;
}

function IngestionPreview({ rows }: { rows: SiteCopy["featuresSection"]["previews"]["ingestion"] }) {
  return (
    <div>
      {rows.map((row) => (
        <div className="bar-row" key={row.label}>
          <span className="bar-label">{row.label}</span>
          <span className="bar-track"><span className="bar-fill" style={{ width: `${(row.value / 168) * 100}%`, background: row.color }} /></span>
          <span className="bar-value">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

function SyncPreview({ copy }: { copy: SiteCopy["featuresSection"]["previews"]["sync"] }) {
  const monoFont = { fontFamily: "var(--font-mono)" };

  return (
    <svg aria-hidden="true" viewBox="0 0 280 90" width="100%" height="90">
      <defs>
        <linearGradient id="sync-preview" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" x2="280" y1="45" y2="45" stroke="var(--line)" strokeDasharray="2 4" />
      <path d="M0,55 C40,30 60,70 90,40 C120,20 140,55 170,35 C200,18 220,40 250,28 L280,32" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <path d="M0,55 C40,30 60,70 90,40 C120,20 140,55 170,35 C200,18 220,40 250,28 L280,32 L280,90 L0,90 Z" fill="url(#sync-preview)" />
      <path d="M0,65 C40,55 60,72 90,60 C120,48 140,65 170,55 C200,42 220,55 250,48 L280,52" fill="none" stroke="var(--accent-3)" strokeDasharray="3 3" strokeWidth="1.5" />
      <text x="6" y="14" style={monoFont} fontSize="9" fill="var(--ink-3)">{copy.synced}</text>
      <text x="270" y="86" style={monoFont} fontSize="9" fill="var(--ink-3)" textAnchor="end">{copy.missing}</text>
    </svg>
  );
}

function AnalysisPreview({ rows }: { rows: SiteCopy["featuresSection"]["previews"]["analysis"] }) {
  return (
    <div className="code-preview">
      {rows.map((row, index) => (
        <span key={row.label}>
          {row.label}: <strong>{row.value}</strong>
          {index === rows.length - 2 ? <span className="blinker" style={{ color: "var(--ink)" }}>|</span> : null}
        </span>
      ))}
    </div>
  );
}

function ReportingPreview({ rows }: { rows: SiteCopy["featuresSection"]["previews"]["reporting"] }) {
  return (
    <div className="alert-list">
      {rows.map((row) => (
        <div className="alert-row" key={row.name}>
          <span>{row.name}</span>
          <span className="mono" style={{ color: row.color }}>● {row.value}</span>
        </div>
      ))}
    </div>
  );
}

function ComparisonPreview({ rows }: { rows: SiteCopy["featuresSection"]["previews"]["comparison"] }) {
  return (
    <div>
      {rows.map((row) => (
        <div className="bar-row" key={row.label}>
          <span className="bar-label">{row.label}</span>
          <span className="bar-track"><span className="bar-fill" style={{ width: `${row.value}%`, background: row.color }} /></span>
          <span className="bar-value">{row.value}%</span>
        </div>
      ))}
    </div>
  );
}

function SearchPreview({ copy }: { copy: SiteCopy["featuresSection"]["previews"]["search"] }) {
  return (
    <div>
      <div className="search-preview-box">
        <Search aria-hidden="true" size={14} />
        <span className="mono">{copy.query}<span className="blinker">|</span></span>
      </div>
      <div className="search-preview-meta">
        <span>{copy.meta}</span>
        <span style={{ color: "var(--accent)" }}>{copy.note}</span>
      </div>
    </div>
  );
}
