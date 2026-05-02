"use client";

import { useLanguage } from "@/shared/providers/LanguageProvider";
import { DashboardMock } from "@/features/landing/components/DashboardMock";

export function Dashboard() {
  const { copy } = useLanguage();
  const dashboard = copy.dashboard;

  return (
    <section id="dashboard" className="container section" aria-labelledby="dashboard-title">
      <div className="center" style={{ marginBottom: 56 }}>
        <span className="eyebrow">{dashboard.eyebrow}</span>
        <h2 className="section-title balance" id="dashboard-title">
          {dashboard.titleTop}
          <br />
          {dashboard.titleBottom}
        </h2>
        <p className="section-copy pretty" style={{ margin: "16px auto 0" }}>{dashboard.description}</p>
      </div>
      <div className="frame dashboard-frame">
        <div className="dashboard-scroller">
          <DashboardMock copy={dashboard.mock} />
        </div>
      </div>
      <div className="caption-row">
        <span>{dashboard.captionLeft}</span>
        <span>{dashboard.captionRight}</span>
      </div>
    </section>
  );
}
