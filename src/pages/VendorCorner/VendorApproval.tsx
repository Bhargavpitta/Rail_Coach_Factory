import "./VendorApproval.css";
import { Link } from "react-router-dom";

const VendorApproval = () => {
  return (
    <main className="va-main">
      <section className="va-hero">
        <div className="va-hero-inner">
          <div className="va-hero-badge">Vendor Corner</div>
          <h1 className="va-hero-title">
            Procedure for Vendor Registration, Vendor Approval and Vendor Development
          </h1>
          <p className="va-hero-subtitle">
            Official procedure documents for vendor registration, approval and development at RCF Kapurthala.
          </p>
        </div>
      </section>

      <div className="va-breadcrumb">
        <div className="va-breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="va-sep">›</span>
          <Link to="/vendor-corner">Vendor and Contractors Corner</Link>
          <span className="va-sep">›</span>
          <span>Procedure for Vendor Registration, Vendor Approval and Vendor Development</span>
        </div>
      </div>

      <div className="va-content">
        <section className="va-section">
          <h2 className="va-section-title">
            Procedure for Vendor Registration, Vendor Approval and Vendor Development
          </h2>

          <div className="va-links-list">
            <a href="#" className="va-link-item">
              <span className="va-link-icon">📄</span>
              <span className="va-link-text">Procedure for Vendor Registration</span>
              <span className="va-link-arrow">→</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default VendorApproval;