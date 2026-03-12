import "./MSMEPosition.css";
import { Link } from "react-router-dom";

const MSMEPosition = () => {
  return (
    <main className="msme-main">
        {/* Page Heading */}
      <div>
        <div className="main-title">MSME Position</div>
        <div className="title-underline"></div>
      </div>

      <div className="msme-content">
        <section className="msme-section">

          <div className="msme-links-list">
            <a href="#" className="msme-link-item">
              <span className="msme-link-icon">📊</span>
              <div className="msme-link-body">
                <span className="msme-link-title">
                  MSME POSITION (Industry Type Wise ordering Details)
                </span>
              </div>
              <span className="msme-link-arrow">→</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MSMEPosition;