"use client";

import { useLanguage } from "@/shared/providers/LanguageProvider";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  const { copy } = useLanguage();

  return (
    <a className="brand" href="#top" aria-label={copy.brand.homeLabel}>
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22">
        <circle cx="11" cy="11" r="10" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
        <circle cx="11" cy="11" r="5" fill="var(--accent)" />
        <circle cx="11" cy="11" r="2" fill="var(--bg)" />
      </svg>
      <span className="brand-name">Statica</span>
      {!compact && copy.brand.versionPill ? <span className="version-pill">{copy.brand.versionPill}</span> : null}
    </a>
  );
}
