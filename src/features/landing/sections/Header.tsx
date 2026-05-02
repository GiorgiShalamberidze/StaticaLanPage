"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/shared/providers/LanguageProvider";
import { BrandMark, ButtonLink } from "@/shared/ui";
import { languages } from "@/features/landing/content/statica";

export function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, copy } = useLanguage();

  return (
    <header className="site-header" id="top">
      <div className="container nav-bar">
        <BrandMark />
        <nav id="site-navigation" className={`nav-links ${open ? "open" : ""}`} aria-label={copy.header.navLabel}>
          {copy.header.navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <ButtonLink href="#start-project" showArrow className="nav-cta mobile-nav-cta" onClick={() => setOpen(false)}>
            {copy.header.startProject}
          </ButtonLink>
        </nav>
        <div className="header-actions">
          <div className="language-toggle" role="group" aria-label={copy.header.languageLabel}>
            {languages.map((entry) => (
              <button
                key={entry}
                aria-pressed={language === entry}
                className={`language-toggle-button ${language === entry ? "active" : ""}`}
                type="button"
                onClick={() => setLanguage(entry)}
              >
                {copy.header.languageNames[entry]}
              </button>
            ))}
          </div>
          <ButtonLink href="#start-project" showArrow className="header-cta">
            {copy.header.startProject}
          </ButtonLink>
          <button
            aria-controls="site-navigation"
            aria-expanded={open}
            aria-label={open ? copy.header.closeMenu : copy.header.openMenu}
            className="mobile-menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
