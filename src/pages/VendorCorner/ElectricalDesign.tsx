import "./ElectricalDesign.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const subSections = [
  {
    key: "edts",
    label: "EDTS",
    title: "Electrical Design Technical Specifications",
    description: "Electrical design technical specification documents for coach components.",
  },
  {
    key: "edml",
    label: "EDML",
    title: "Electrical Drawing Master List",
    description: "Master list of all electrical drawings for Rail Coach Factory coaches.",
  },
  {
    key: "str",
    label: "STR",
    title: "Standard Technical Requirements",
    description: "Standard technical requirements for electrical systems.",
  },
  {
    key: "cai",
    label: "CAI",
    title: "Coach Acceptance Inspection",
    description: "Electrical inspection criteria and acceptance standards for coaches.",
  },
  {
    key: "coach-drawings",
    label: "Coach Drawings",
    title: "Coach Drawings",
    description: "Complete electrical coach drawings and schematics.",
  },
];

const ElectricalDesign = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <main className="ed-main">

         {/* Page Heading */}
      <div>
        <div className="main-title">Electrical Design Specifications</div>
        <div className="title-underline"></div>
      </div>
     

      <div className="ed-breadcrumb">
        <div className="ed-breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="ed-sep">›</span>
          <Link to="/vendor-corner">Vendor and Contractors Corner</Link>
          <span className="ed-sep">›</span>
          <span>Electrical Design Specifications</span>
        </div>
      </div>

      <div className="ed-content">
        <section className="ed-section">

          <div className="ed-cards-grid">
            {subSections.map((item) => (
              <button
                key={item.key}
                className={`ed-card${active === item.key ? " ed-card--active" : ""}`}
                onClick={() => setActive(active === item.key ? null : item.key)}
                type="button"
              >
                <div className="ed-card-label">{item.label}</div>
                <div className="ed-card-title">{item.title}</div>
                <div className="ed-card-desc">{item.description}</div>
                <span className="ed-card-arrow">
                  {active === item.key ? "↑" : "→"}
                </span>
              </button>
            ))}
          </div>

          {active && (
            <div className="ed-detail-panel">
              <div className="ed-detail-icon">📂</div>
              <div>
                <h3>{subSections.find((s) => s.key === active)?.title}</h3>
                <p>
                  No documents are currently available for this section. Please check back later or
                  contact the Electrical Design department at RCF Kapurthala.
                </p>
                <a href="mailto:designrcf08@gmail.com" className="ed-detail-link">
                  ✉ designrcf08@gmail.com
                </a>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ElectricalDesign;