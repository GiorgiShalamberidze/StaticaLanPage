"use client";

import { Play } from "lucide-react";
import { useLanguage } from "@/shared/providers/LanguageProvider";
import { ButtonLink, Counter, LiveAreaChart } from "@/shared/ui";

export function Hero() {
  const { copy } = useLanguage();
  const hero = copy.hero;
  const hasMetaStrip = Boolean(hero.issue || hero.status);

  return (
    <section className="container hero" aria-labelledby="hero-title">
      {hasMetaStrip ? (
        <div className="meta-strip">
          {hero.issue ? <span>{hero.issue}</span> : null}
          {hero.status ? <span>{hero.status}</span> : null}
        </div>
      ) : null}

      <div className="hero-grid">
        <div>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="hero-title balance" id="hero-title">
            {hero.titleTop}
            <br />
            <em>{hero.titleEmphasis}</em> <span>{hero.titleAccent}</span>
          </h1>
          <p className="hero-copy pretty">{hero.description}</p>
          <div className="button-row">
            <ButtonLink href="#start-project" showArrow>{hero.primaryCta}</ButtonLink>
            <ButtonLink href="#how" variant="ghost">
              <Play aria-hidden="true" size={14} fill="currentColor" />
              {hero.secondaryCta}
            </ButtonLink>
          </div>
          <div className="assurance-row">
            {hero.assurances.map((item) => (
              <span key={item}>
                <span className="check" aria-hidden="true">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="frame hero-panel">
            <div className="panel-heading">
              <div>
                <div className="panel-kicker">{hero.panelKicker}</div>
                <div className="panel-title">{hero.panelTitle}</div>
              </div>
              <div className="range-pills">
                {hero.rangePills.map((range) => <span className="range-pill" key={range}>{range}</span>)}
              </div>
            </div>
            <div className="stat-row">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value">
                    <Counter to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </div>
                  <div className="stat-delta">{stat.delta}</div>
                </div>
              ))}
            </div>
            <LiveAreaChart ariaLabel={hero.chartAriaLabel} axisLabels={hero.chartAxisLabels} />
          </div>
          <div className="secondary-grid">
            {hero.cards.map((card) => (
              <div className="frame small-tile" key={card.label}>
                <div className="micro-label">{card.label}</div>
                <div className="small-tile-title">{card.title}</div>
                <div className={`small-tile-meta ${card.danger ? "danger" : ""}`}>{card.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
