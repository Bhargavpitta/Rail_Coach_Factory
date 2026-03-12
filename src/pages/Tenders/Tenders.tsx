// src/pages/Tenders/Tenders.tsx

import { useState } from "react";
import "./Tenders.css";

const Tenders = () => {

  const [keyword, setKeyword] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleKeywordSearch = (e: React.FormEvent) => e.preventDefault();
  const handleDateSearch = (e: React.FormEvent) => e.preventDefault();

  return (
    <>
      {/* Page Header */}
      <div className="tenders-header-bar">
        <h1 className="tenders-page-title">CPP Tenders</h1>
      </div>

      {/* Active Tender CTA */}
      <div className="active-tenders-cta">
        <a
          href="https://eprocure.gov.in/cppp/"
          target="_blank"
          rel="noopener noreferrer"
          className="active-tenders-link"
        >
          🔗 Click here to show all active Tenders
        </a>

        <p className="ireps-note">
          <strong>Note:</strong> Please visit website{" "}
          <a
            href="https://www.ireps.gov.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ireps.gov.in
          </a>{" "}
          for tenders to be opened in Civil Department
        </p>
      </div>

      {/* Keyword Search */}
      <div className="search-card">

        <div className="search-card-header">
          <h2 className="search-card-title">Search Tenders by Keyword</h2>
        </div>

        <div className="search-card-body">
          <form onSubmit={handleKeywordSearch} className="keyword-form">

            <label className="search-label">
              Please enter search keyword:
            </label>

            <div className="search-input-row">
              <input
                type="text"
                className="search-input"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />

              <button type="submit" className="search-btn">
                Search
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* Date Search */}
      <div className="search-card">

        <div className="search-card-header">
          <h2 className="search-card-title">
            Search Tenders by Tender Opening Date
          </h2>
        </div>

        <div className="search-card-body">
          <form onSubmit={handleDateSearch} className="date-form-row">

            <label className="search-label">
              Tender Opening Date:
            </label>

            <div className="date-inputs">

              <span className="date-label-text">From:</span>

              <input
                type="date"
                className="search-input"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />

              <span className="date-label-text">To:</span>

              <input
                type="date"
                className="search-input"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />

              <button type="submit" className="search-btn">
                Search
              </button>

            </div>

          </form>
        </div>

      </div>
    </>
  );
};

export default Tenders;