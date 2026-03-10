// src/pages/Tenders/Tenders.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Tenders.css";

const Tenders = () => {
  const [keyword, setKeyword] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchFilter, setSearchFilter] = useState("active");
  const [tenderType, setTenderType] = useState("");
  const [division, setDivision] = useState("");
  const [department, setDepartment] = useState("");

  const handleKeywordSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleDateSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleFilterSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="tenders-page">
      {/* Breadcrumb */}
      <div className="tenders-breadcrumb">
        <div className="tenders-container">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span>Tender Information</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-active">Tenders</span>
        </div>
      </div>

      <div className="tenders-container tenders-layout">
        {/* Sidebar */}
        <aside className="tenders-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Tender Information</h3>
            <ul className="sidebar-links">
                    <ul className="sidebar-links">
                        <li className="sidebar-link">
                          <Link to="/tenders">Tenders</Link>
                        </li>

                        <li className="sidebar-link">
                          <Link to="/tenders/eoi">Expression of Interest</Link>
                        </li>

                        <li className="sidebar-link">
                          <Link to="/tenders/awarded">View Awarded Tenders</Link>
                        </li>

                        <li className="sidebar-link">
                          <Link to="/tenders/surplus">Surplus Items</Link>
                        </li>

                        <li className="sidebar-link">
                          <Link to="/tenders/contracts">Store Supply Contracts</Link>
                        </li>

                        <li className="sidebar-link">
                          <Link to="/tenders/bid-documents">Bid Document & IRS Conditions</Link>
                        </li>
                        </ul>
                
              </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="tenders-main">
          <div className="tenders-header-bar">
            <h1 className="tenders-page-title">CPP Tenders</h1>
          </div>

          {/* Active Tenders CTA */}
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
              <a href="https://www.ireps.gov.in" target="_blank" rel="noopener noreferrer">
                www.ireps.gov.in
              </a>{" "}
              for tenders to be opened in Civil Department
            </p>
          </div>

          {/* Search by Keyword */}
          <div className="search-card">
            <div className="search-card-header">
              <h2 className="search-card-title">Search Tenders by Keyword</h2>
            </div>
            <div className="search-card-body">
              <form onSubmit={handleKeywordSearch} className="search-form keyword-form">
                <label htmlFor="keyword-input" className="search-label">
                  Please enter search keyword:
                </label>
                <div className="search-input-row">
                  <input
                    id="keyword-input"
                    type="text"
                    className="search-input"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Enter keyword..."
                  />
                  <button type="submit" className="search-btn">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Search by Date */}
          <div className="search-card">
            <div className="search-card-header">
              <h2 className="search-card-title">Search Tenders by Tender Opening Date</h2>
            </div>
            <div className="search-card-body">
              <form onSubmit={handleDateSearch} className="search-form date-form">
                <div className="date-form-row">
                  <label className="search-label">Tender Opening Date:</label>
                  <div className="date-inputs">
                    <span className="date-label-text">From:</span>
                    <input
                      type="date"
                      className="search-input date-input"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                    <span className="date-label-text">To:</span>
                    <input
                      type="date"
                      className="search-input date-input"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                    <button type="submit" className="search-btn">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Search by Type/Division/Department */}
          <div className="search-card filter-card">
            <div className="search-card-header">
              <h2 className="search-card-title">
                Search Tenders by Tender type, Division and Departments
              </h2>
            </div>
            <div className="search-card-body">
              <form onSubmit={handleFilterSearch} className="search-form filter-form">
                <div className="filter-row">
                  <label className="filter-label">Search Filter</label>
                  <div className="filter-radios">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="filter"
                        value="all"
                        checked={searchFilter === "all"}
                        onChange={() => setSearchFilter("all")}
                      />
                      Show All
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="filter"
                        value="active"
                        checked={searchFilter === "active"}
                        onChange={() => setSearchFilter("active")}
                      />
                      Active
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="filter"
                        value="archive"
                        checked={searchFilter === "archive"}
                        onChange={() => setSearchFilter("archive")}
                      />
                      Archive
                    </label>
                  </div>
                </div>

                <div className="filter-row">
                  <label className="filter-label">Tender Type</label>
                  <select
                    className="filter-select"
                    value={tenderType}
                    onChange={(e) => setTenderType(e.target.value)}
                  >
                    <option value="">--Select Tender Type--</option>
                    <option value="open">Open Tender</option>
                    <option value="limited">Limited Tender</option>
                    <option value="single">Single Tender</option>
                    <option value="global">Global Tender</option>
                  </select>
                </div>

                <div className="filter-row">
                  <label className="filter-label">Division</label>
                  <select
                    className="filter-select"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                  >
                    <option value="">--Select Division--</option>
                    <option value="rcf">RCF Kapurthala</option>
                  </select>
                </div>

                <div className="filter-row">
                  <label className="filter-label">Department</label>
                  <select
                    className="filter-select"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="">--Select Department--</option>
                    <option value="civil">Civil</option>
                    <option value="elec-plant">Electrical Plant</option>
                    <option value="elec-production">Electrical Production</option>
                    <option value="elec-services">Electrical Services</option>
                    <option value="it">I.T</option>
                    <option value="mechanical">Mechanical</option>
                    <option value="medical">Medical</option>
                    <option value="quality">Quality Department</option>
                    <option value="others">Others</option>
                    <option value="sandt">S &amp; T</option>
                  </select>
                </div>

                <div className="filter-actions">
                  <button type="submit" className="search-btn show-btn">
                    Show
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tenders;