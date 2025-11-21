type DiagramStep = {
  label: string;
  detail: string;
};

function DiagramGrid({ steps }: { steps: DiagramStep[] }) {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {steps.map((step) => (
        <div
          key={step.label}
          className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left dark:border-gray-800 dark:bg-gray-900"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{step.label}</p>
          <p className="mt-2 text-xs leading-relaxed text-gray-700 dark:text-gray-300">{step.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function InvestAiArchitectureDiagram() {
  const steps: DiagramStep[] = [
    { label: "Market & ETF Data", detail: "Tiingo, Stooq, FRED snapshots" },
    { label: "Portfolio Engine", detail: "Risk profiles, guardrails, optimizers" },
    { label: "Simulation Layer", detail: "Historical + Monte Carlo runs" },
    { label: "UI Layer", detail: "Streamlit insights & dashboards" },
  ];
  return <DiagramGrid steps={steps} />;
}

export function UnifiedScraperArchitectureDiagram() {
  const steps: DiagramStep[] = [
    { label: "Input Sources", detail: "Job boards, hiring APIs, marketplaces" },
    { label: "Scraper Fleet", detail: "Airflow + Cloud Run extractors" },
    { label: "Parser & Drift", detail: "dbt normalization + anomaly scoring" },
    { label: "Delivery", detail: "BigQuery, Looker, Salesforce webhooks" },
  ];
  return <DiagramGrid steps={steps} />;
}

export function NeurodivulgeArchitectureDiagram() {
  const steps: DiagramStep[] = [
    { label: "Interviews", detail: "180 sessions + behavioral tagging" },
    { label: "Narrative Layer", detail: "Topic clustering + archetype modeling" },
    { label: "Portal", detail: "React + Plotly storytelling canvases" },
    { label: "Insights", detail: "Pricing + TAM calculators for partners" },
  ];
  return <DiagramGrid steps={steps} />;
}

export function RenderpubVrArchitectureDiagram() {
  const steps: DiagramStep[] = [
    { label: "Creative Briefs", detail: "Notion + Jira scenes and goals" },
    { label: "VR Builds", detail: "Unity editors + automated QA" },
    { label: "Telemetry", detail: "Python logs → BigQuery dashboards" },
    { label: "Optimization", detail: "Looker + retros that guide next sprints" },
  ];
  return <DiagramGrid steps={steps} />;
}
