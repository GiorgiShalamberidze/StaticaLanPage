"use client";

import { useLanguage } from "@/shared/providers/LanguageProvider";

export function FAQ() {
  const { copy } = useLanguage();
  const faq = copy.faq;

  return (
    <section id="faq" className="section faq-section" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq-grid">
          <div className="sticky-copy">
            <span className="eyebrow">{faq.eyebrow}</span>
            <h2 className="section-title" id="faq-title">
              {faq.titleTop}
              <br />
              {faq.titleBottom}
            </h2>
            <p className="section-copy pretty" style={{ fontSize: 15, marginTop: 16, maxWidth: 320 }}>
              {faq.intro} <a href="#start-project" style={{ borderBottom: "1px solid currentColor", color: "var(--ink)" }}>{faq.linkLabel}</a>.
            </p>
          </div>
          <div>
            {faq.items.map((item, index) => (
              <details className="faq" key={item.question} open={index === 0}>
                <summary>
                  <span className="balance">{item.question}</span>
                  <span className="plus" aria-hidden="true">+</span>
                </summary>
                <p className="ans pretty">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
