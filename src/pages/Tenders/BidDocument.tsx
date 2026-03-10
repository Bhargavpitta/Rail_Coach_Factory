// src/pages/Tenders/BidDocument.tsx

import { Link } from "react-router-dom";
import "./Tenders.css";
import "./BidDocument.css";

interface BidDoc {
  label: string;
  href: string;
  isBase?: boolean;
}

const bidDocuments: BidDoc[] = [
  { label: "Corrigendum 15 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 14 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 13 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 12 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 11 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 10 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 9 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 8 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 7 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 6 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 5 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 4 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 3 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 2 to Bid Document Document Version 14.0", href: "#" },
  { label: "Corrigendum 1 to Bid Document Document Version 14.0", href: "#" },
  { label: "Bid Document 14.0", href: "#", isBase: true },
];

const BidDocument = () => {
  return (
    <div className="tenders-page">
      {/* Breadcrumb */}
      <div className="tenders-breadcrumb">
        <div className="tenders-container">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span>Tender Information</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-active">Bid Document &amp; IRS Conditions</span>
        </div>
      </div>

      <div className="tenders-container tenders-layout">
        {/* Sidebar */}
        <aside className="tenders-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Tender Information</h3>
            <ul className="sidebar-links">

                <li className="sidebar-link">
                  <Link to="/tenders">Tenders</Link>
                </li>

                <li className="sidebar-link">
                  <Link to="/tenders/eoi">Expression of Interest</Link>
                </li>

                <li className="sidebar-link">
                  <Link to="/tenders/awarded">View Awarded Tenders</Link>
                </li>

                <li className="sidebar-link">
                  <Link to="/tenders/surplus">Surplus Items</Link>
                </li>

                <li className="sidebar-link">
                  <Link to="/tenders/contracts">Store Supply Contracts</Link>
                </li>

                <li className="sidebar-link">
                  <Link to="/tenders/bid-documents">
                    Bid Document & IRS Conditions
                  </Link>
                </li>


               </ul>
               
          </div>
        </aside>

        {/* Main */}
        <main className="tenders-main">
          <div className="tenders-header-bar">
            <h1 className="tenders-page-title">Bid Document &amp; IRS Conditions</h1>
          </div>

          <div className="bid-card">
            <div className="bid-card-header">
              <h2 className="bid-card-title">IRS Conditions</h2>
            </div>
            <div className="bid-card-body">
              <div className="bid-info-note">
                <span className="bid-info-icon">ℹ️</span>
                <p>
                  Below are the IRS Conditions and Bid Document files for the Rail Coach Factory
                  Kapurthala. Click on any document to download or view.
                </p>
              </div>

              <div className="bid-doc-list">
                {bidDocuments.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.href}
                    className={`bid-doc-row ${doc.isBase ? "bid-doc-base" : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bid-doc-icon">{doc.isBase ? "📘" : "📄"}</span>
                    <span className="bid-doc-label">{doc.label}</span>
                    {doc.isBase && <span className="bid-base-badge">Base Document</span>}
                    <span className="bid-doc-dl">⬇</span>
                  </a>
                ))}
              </div>

              <p className="bid-source-note">
                Source: Welcome to Rail Coach Factory Kapurthala Official Website CMS Team — Last
                Reviewed on: 23-09-2025
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BidDocument;