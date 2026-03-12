
// src/pages/Tenders/AwardedTenders.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Tenders.css";
import "./AwardedTenders.css";

const departments = [
  "Civil",
  "Electrical Plant",
  "Electrical Production",
  "Electrical Services",
  "I.T",
  "Mechanical",
  "Medical",
  "Quality Department",
  "Others",
  "S & T",
];

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const years = Array.from({ length: 12 }, (_, i) => (2014 + i).toString()).reverse();

const AwardedTenders = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dept, setDept] = useState("Civil");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="tenders-breadcrumb">
        <div className="tenders-container">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span>Tender Information</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-active">View Awarded Tenders</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="tenders-header-bar">
        <h1 className="tenders-page-title">Tender Information</h1>
      </div>

      {/* Info Box */}
      <div className="awarded-info-box">
        <p className="awarded-stores-note">
          <strong>Tender finalised for Stores Department</strong> please{" "}
          <a href="#" className="awarded-click-link">
            &lt;&lt;click here&gt;&gt;
          </a>
        </p>
      </div>

      {/* Search Card */}
      <div className="search-card">
        <div className="search-card-header">
          <h2 className="search-card-title">Search Awarded Tenders</h2>
        </div>

        <div className="search-card-body">
          <form onSubmit={handleSubmit} className="awarded-form">

            <div className="awarded-form-row">
              <label className="filter-label">Month of Finalised Tender</label>
              <select
                className="filter-select"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="">--Select Month--</option>
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div className="awarded-form-row">
              <label className="filter-label">Year of Finalised Tender</label>
              <select
                className="filter-select"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">--Select Year--</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="awarded-form-row">
              <label className="filter-label">Select Department</label>
              <select
                className="filter-select dept-select"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
              >
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="awarded-form-actions">
              <button type="submit" className="search-btn show-btn">Submit</button>

              <button
                type="reset"
                className="reset-btn"
                onClick={() => {
                  setMonth("");
                  setYear("");
                  setDept("Civil");
                }}
              >
                Reset
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Department Grid */}
      <div className="awarded-dept-grid">
        <h3 className="awarded-dept-grid-title">View by Department</h3>

        <div className="dept-badge-grid">
          {departments.map((d) => (
            <button
              key={d}
              className={`dept-badge ${dept === d ? "dept-badge-active" : ""}`}
              onClick={() => setDept(d)}
              type="button"
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AwardedTenders;


