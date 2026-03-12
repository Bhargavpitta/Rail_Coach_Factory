import "./VendorDirElectrical.css";
import { Link } from "react-router-dom";

const VendorDirElectrical = () => {
  return (
    <main className="vde-main">
        {/* Page Heading */}
      <div>
        <div className="main-title">Vendor Directory Electrical</div>
        <div className="title-underline"></div>
      </div>

      <div className="vde-content">
        <section className="vde-section">

          <div className="vde-links-list">
            <a href="#" className="vde-link-item">
              <span className="vde-link-icon">📄</span>
              <span className="vde-link-text">
                Amendment-1 to Eligibility criteria for similar class of items procurement of non critical electrical items
              </span>
              <span className="vde-link-arrow">→</span>
            </a>
            <a href="#" className="vde-link-item">
              <span className="vde-link-icon">📋</span>
              <span className="vde-link-text">
                Eligibility criteria for similar class of items procurement of non critical electrical items
              </span>
              <span className="vde-link-arrow">→</span>
            </a>
          </div>

          <div className="vde-info-card">
            <div className="vde-info-row">
              <span className="vde-bullet">•</span>
              <span>RCF Electrical Vendor Directory is available on UVAM Portal under the IREPS website</span>
            </div>
            <div className="vde-info-row">
              <span className="vde-bullet">•</span>
              <a href="#" className="vde-uvam-link">Login to UVAM</a>
            </div>
          </div>

          <div className="vde-str-link-block">
            <a href="#" className="vde-str-link">
              📑 Notice for revision of Schedule of Technical Requirements (STR)
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default VendorDirElectrical;