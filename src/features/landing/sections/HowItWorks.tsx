"use client";

import { useLanguage } from "@/shared/providers/LanguageProvider";

export function HowItWorks() {
  const { copy } = useLanguage();
  const how = copy.how;

  return (
    <section id="how" className="section section-band" aria-labelledby="how-title">
      <div className="container how-grid">
        <div className="sticky-copy">
          <span className="eyebrow">{how.eyebrow}</span>
          <h2 className="section-title balance" id="how-title">
            {how.titleTop}
            <br />
            {how.titleBottom}
          </h2>
          <p className="section-copy pretty" style={{ marginTop: 24, maxWidth: 360 }}>{how.description}</p>
          <div className="time-card">
            <div className="micro-label">{how.workflowLabel}</div>
            <div className="time-value" style={{ fontSize: 28 }}>{how.workflowValue}</div>
          </div>
        </div>
        <div>
          {how.steps.map((step) => (
            <article className="step-row" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div>
                <h3>{step.title}</h3>
                <p className="pretty">{step.description}</p>
              </div>
            </article>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
