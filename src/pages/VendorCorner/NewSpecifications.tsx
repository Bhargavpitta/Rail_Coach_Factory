// src/pages/VendorCorner/NewSpecifications.tsx
import "./NewSpecifications.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const divisions = [
  "Kapurthala", "Varanasi", "Chennai", "Raebareli", "Latur",
];

const NewSpecifications = () => {
  const [dtsType, setDtsType] = useState("");
  const [division, setDivision] = useState("");

  return (
    <main className="ns-main">
      <div className="vc-container">
        {/* Page Heading */}
        <h1 className="main-title">New Specifications for Comment</h1>
        <div className="title-underline"></div>

        {/* Content Section */}
        <div className="ns-content">
          <section className="ns-section">

            <div className="ns-filter-card">
              <div className="ns-filter-group">
                <label className="ns-filter-label">
                  Please select Design Technical Specification Type:
                </label>
                <select
                  className="ns-select"
                  value={dtsType}
                  onChange={(e) => setDtsType(e.target.value)}
                >
                  <option value="">-- SELECT DTS TYPE --</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Mechanical">Mechanical</option>
                </select>
              </div>

              <div className="ns-filter-group">
                <label className="ns-filter-label">Select Division:</label>
                <select
                  className="ns-select"
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                >
                  <option value="">-- Select --</option>
                  {divisions.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <button className="ns-btn-submit" type="button">Submit</button>
            </div>

            {!dtsType && (
              <div className="ns-empty-state">
                <div className="ns-empty-icon">📋</div>
                <p>Please select a DTS Type and Division to search for specifications.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default NewSpecifications;