import "./SimilarItemsTender.css";
import { Link } from "react-router-dom";

const SimilarItemsTender = () => {
  return (
    <main className="sit-main">
        {/* Page Heading */}
      <div>
        <div className="main-title">List of Similar Items for Tender</div>
        <div className="title-underline"></div>
      </div>

      <div className="sit-content">
        <section className="sit-section">

          <div className="sit-links-list">
            <a href="#" className="sit-link-item">
              <span className="sit-link-icon">📄</span>
              <span className="sit-link-text">List of Similar Items for Tender</span>
              <span className="sit-link-arrow">→</span>
            </a>
          </div>

          <div className="sit-notice">
            <span className="sit-notice-icon">📢</span>
            <div>
              <a href="#" className="sit-notice-link">
                Similar Items in Eligibility Criteria for procurement (DRAFT)
              </a>
              <p className="sit-notice-text">
                Comments, if any may please be sent to Dy.CME/Fur Design at{" "}
                <a href="mailto:designrcf08@gmail.com" className="sit-email">
                  designrcf08@gmail.com
                </a>{" "}
                by 13.11.2025 positively.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SimilarItemsTender;