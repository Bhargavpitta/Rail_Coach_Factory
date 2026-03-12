import "./VendorDirMechanical.css";
import { Link } from "react-router-dom";

const VendorDirMechanical = () => {
  return (
    <main className="vdm-main">
        {/* Page Heading */}
      <div>
        <div className="main-title">Vendor Directory Mechanical</div>
        <div className="title-underline"></div>
      </div>

     

      <div className="vdm-content">
        <section className="vdm-section">

          {/* U-VAM Notice */}
          <div className="vdm-uvam-banner">
            <div className="vdm-uvam-icon">🔗</div>
            <div>
              <a href="#" className="vdm-uvam-link">
                RCF VENDOR DIRECTORY ON U-VAM PORTAL FROM 01.04.2022
              </a>
              <span className="vdm-new-badge">NEW</span>
            </div>
          </div>

          {/* Policy Documents */}
          <div className="vdm-policy-block">
            <div className="vdm-links-list">
              <a href="#" className="vdm-link-item">
                <span className="vdm-link-icon">📄</span>
                <span className="vdm-link-text">Policy on First Article Inspection 1</span>
                <span className="vdm-link-arrow">→</span>
              </a>
              <a href="#" className="vdm-link-item">
                <span className="vdm-link-icon">📄</span>
                <span className="vdm-link-text">Policy on First Article Inspection 2</span>
                <span className="vdm-link-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Additional Links */}
          <div className="vdm-additional-block">
            <a href="#" className="vdm-additional-link">
              📋 List of items having Limited no of vendors
            </a>
            <a href="#" className="vdm-additional-link">
              📝 Letter regarding the complete Switch over of RCF Vendor directory (mechanical)
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default VendorDirMechanical;