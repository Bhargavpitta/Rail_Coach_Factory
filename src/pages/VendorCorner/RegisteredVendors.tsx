import "./Registeredvendors.css";
import { Link } from "react-router-dom";

const RegisteredVendors = () => {
  return (
    <main className="rv-main">
        {/* Page Heading */}
      <div>
        <div className="main-title">List of Registered Vendors</div>
        <div className="title-underline"></div>
      </div>


      <div className="rv-content">
        <section className="rv-section">
          <div className="rv-links-list">
            <a href="#" className="rv-link-item">
              <span className="rv-link-icon">📋</span>
              <div className="rv-link-body">
                <span className="rv-link-title">
                  List of Registered Vendors for Trade Groups with Validity
                </span>
                <span className="rv-link-date">As on 27.02.2026</span>
              </div>
              <span className="rv-link-arrow">→</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisteredVendors;
