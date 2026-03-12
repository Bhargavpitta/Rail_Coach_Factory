import "./VendorDevelopment.css";
import { Link } from "react-router-dom";

const gateway = [
  { step: 1, title: "Get Digital Certificate", desc: "Secure class III digital certificate for secure participation." },
  { step: 2, title: "Register on IREPS", desc: "Register on Indian Railway e-procurement System at www.ireps.gov.in" },
  { step: 3, title: "See Tender Notices", desc: "View all current and upcoming tender notices on IREPS." },
  { step: 4, title: "Study Specifications", desc: "Select tender item/items and study the specifications, drawings." },
  { step: 5, title: "Check Eligibility", desc: "Check eligibility criteria given in the Tender, Bid documents." },
  { step: 6, title: "Bid Online", desc: "Bid in the bidding format for the Tender on IREPS (www.ireps.gov.in)" },
  { step: 7, title: "No Cost for MSMEs", desc: "No tender cost and no EMD if manufacturer registered with MSME, NSIC, Railways/Production unit, etc." },
];

const msmeCategories = [
  "Udyog Aadhar MSME", "NSIC", "Railways/Production unit",
  "District Industries Centres", "Khadi and Village Industries Commission",
  "Khadi and Village Industries Board", "Coir Board",
  "Directorate of Handicraft and Handloom",
  "Any other board specified by Ministry of MSME",
];

const VendorDevelopment = () => {
  return (
    <main className="vd-main">
      {/* Page Heading */}
      <div>
        <div className="main-title">Vendor Development</div>
        <div className="title-underline"></div>
      </div>

      <div className="vd-content">
        {/* Quick Docs */}
        <section className="vd-doc-links">
          {[
            { label: "Procedure for CCA of Vendors", icon: "📋" },
            { label: "Revised Vendor Development Policy of RCF", sub: "Uploaded 24-05-2022", icon: "📄" },
            { label: "Engagement of RITES for carrying out CCA", icon: "🤝" },
          ].map((doc, i) => (
            <a href="#" className="vd-doc-link" key={i}>
              <span className="vd-doc-link-icon">{doc.icon}</span>
              <span className="vd-doc-link-title">{doc.label}</span>
              {doc.sub && <span className="vd-doc-link-sub">{doc.sub}</span>}
              <span className="vd-doc-link-arr">→</span>
            </a>
          ))}
        </section>

        {/* Gateway Steps */}
        <section className="vd-section">
          <h2 className="vd-section-title">Gateway for New Vendors / Startups</h2>
          <div className="vd-steps">
            {gateway.map((item) => (
              <div className="vd-step" key={item.step}>
                <div className="vd-step-num">{item.step}</div>
                <div className="vd-step-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MSME Benefits */}
        <section className="vd-section vd-msme-section">
          <div className="vd-msme-header">
            <div className="vd-msme-badge">MSME Benefits</div>
            <h2 className="vd-section-title">No Tender Cost &amp; No EMD for Manufacturers</h2>
            <p className="vd-msme-intro">
              If you are a manufacturer registered with any of the following bodies, you are exempt from tender cost and EMD:
            </p>
          </div>
          <div className="vd-msme-grid">
            {msmeCategories.map((cat, i) => (
              <div className="vd-msme-item" key={i}>
                <span className="vd-msme-check">✓</span>
                <span>{cat}</span>
              </div>
            ))}
          </div>
          <div className="vd-msme-note">
            Special price and quantity preference to MSME and MSME (SC/ST) entrepreneurs as per government policy.
            The bidder has to upload proof and details in the Bid form.
          </div>
        </section>

        {/* Contact Card */}
        <section className="vd-contact-section">
          <h2 className="vd-section-title">Contact for Assistance</h2>
          <div className="vd-contact-grid">
            <a href="https://www.ireps.gov.in/html/helpdesk/helpdesk.html" className="vd-contact-card" target="_blank" rel="noreferrer">
              <div className="vd-contact-card-icon">🖥️</div>
              <div>
                <div className="vd-contact-card-label">Help Desks (IREPS)</div>
                <div className="vd-contact-card-value">ireps.gov.in/helpdesk</div>
              </div>
              <span className="vd-contact-card-arr">→</span>
            </a>
            <div className="vd-contact-card">
              <div className="vd-contact-card-icon">📞</div>
              <div>
                <div className="vd-contact-card-label">Vendor Call (RCF)</div>
                <div className="vd-contact-card-value">01822-222724</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default VendorDevelopment;