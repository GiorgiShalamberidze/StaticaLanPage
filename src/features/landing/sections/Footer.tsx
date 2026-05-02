"use client";

import type { FormEvent } from "react";
import { useLanguage } from "@/shared/providers/LanguageProvider";
import { BrandMark } from "@/shared/ui";

export function Footer() {
  const { copy } = useLanguage();
  const footer = copy.footer;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    // Future backend integration for the contact request belongs here.
  }

  return (
    <footer className="site-footer" id="start-project" aria-labelledby="start-project-title">
      <div className="container footer-inner">
        <div className="footer-shell">
          <div className="footer-content">
            <BrandMark />
            <div>
              <span className="eyebrow">{footer.eyebrow}</span>
              <h2 className="footer-title balance" id="start-project-title">
                {footer.titleLines[0]}
                <br />
                {footer.titleLines[1]}
                <br />
                {footer.titleLines[2]}
              </h2>
              <p className="footer-copy pretty">{footer.description}</p>
            </div>
            <div className="footer-signals">
              {footer.signals.map((signal) => <span key={signal}>{signal}</span>)}
            </div>
          </div>
          <div className="frame footer-form-frame">
            <div className="footer-form-intro">
              <div className="micro-label">{footer.intakeLabel}</div>
              <p className="footer-form-copy">{footer.intakeCopy}</p>
            </div>

            <form className="footer-form" onSubmit={handleSubmit}>
              <label className="footer-field">
                <span className="footer-field-top">
                  <span className="footer-field-label">{footer.fields.name}</span>
                  <span className="footer-required" aria-hidden="true">*</span>
                </span>
                <input className="footer-input" name="name" autoComplete="name" required />
              </label>

              <label className="footer-field">
                <span className="footer-field-top">
                  <span className="footer-field-label">{footer.fields.company}</span>
                </span>
                <input className="footer-input" name="company" autoComplete="organization" />
              </label>

              <label className="footer-field">
                <span className="footer-field-top">
                  <span className="footer-field-label">{footer.fields.contact}</span>
                  <span className="footer-required" aria-hidden="true">*</span>
                </span>
                <input className="footer-input" name="contact" required />
              </label>

              {footer.fields.project ? (
                <label className="footer-field footer-field-textarea">
                  <span className="footer-field-top">
                    <span className="footer-field-label">{footer.fields.project}</span>
                  </span>
                  <textarea className="footer-textarea" name="projectDetails" rows={7} />
                </label>
              ) : null}

              <div className="footer-actions">
                <button className="btn btn-primary footer-submit" type="submit">
                  {footer.submitLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
