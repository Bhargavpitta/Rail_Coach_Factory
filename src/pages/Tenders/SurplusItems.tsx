// src/pages/Tenders/SurplusItems.tsx

import { Link } from "react-router-dom";
import "./Tenders.css";
import "./SurplusItems.css";

interface StoreItem {
  label: string;
  href: string;
  isLink: boolean;
}

const storeItems: StoreItem[] = [
  { label: "Surplus Items (Fur Depot)", href: "#", isLink: true },
  { label: "Surplus Items (Shell Depot)", href: "#", isLink: false },
  {
    label: "Inactive Items (Shell Depot)",
    href: "/uploads/INACTIVE%20ITEMS%20Fab%2026.pdf",
    isLink: true,
  },
  { label: "Sparable Items (Fur Depot)", href: "#", isLink: true },
  { label: "Inactive Items (Fur Depot)", href: "#", isLink: true },
];

const SurplusItems = () => {
  return (
    <div className="tenders-page">
      {/* Breadcrumb */}
      <div className="tenders-breadcrumb">
        <div className="tenders-container">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span>Tender Information</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-active">Surplus Items</span>
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
            <h1 className="tenders-page-title">Surplus Items</h1>
          </div>

          {/* Stores Sub-section */}
          <div className="surplus-card">
            <div className="surplus-card-header">
              <h2 className="surplus-card-title">Stores</h2>
            </div>
            <div className="surplus-card-body">
              <div className="surplus-note-box">
                <p className="surplus-note">
                  <strong>NOTE:</strong> RCF shall make arrangements to issue material to all zonal
                  Railways / Pus on all working days of the week subject to availability of staff.
                </p>
              </div>

              <p className="surplus-desc">
                Following items are surplus at RCF. Railways may review these lists and send their
                requirements, if any.
              </p>

              <div className="surplus-contact">
                <p>
                  For any inquiry please contact <strong>CMM, RCF Kapurthala</strong> at the
                  following Telephone Nos.
                </p>
                <div className="surplus-contact-grid">
                  <span className="contact-type">DOT</span>
                  <span className="contact-number">01822-227408</span>
                  <span className="contact-type">RCF</span>
                  <span className="contact-number">92900</span>
                </div>
              </div>

              <div className="items-spared-section">
                <h3 className="items-spared-title">ITEMS TO BE SPARED FOR RAILWAYS</h3>
                <div className="surplus-items-list">
                  {storeItems.map((item, idx) => (
                    <div key={idx} className="surplus-item-row">
                      <span className="surplus-item-icon">📄</span>
                      {item.isLink ? (
                        <a
                          href={item.href}
                          className="surplus-item-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="surplus-item-text">{item.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SurplusItems;