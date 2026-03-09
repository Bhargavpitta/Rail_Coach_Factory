import React, { useState } from "react";
import AboutLayout from "./AboutLayout";
import "./ImportantStats.css";

const subNav = [
  { label: "Important Statistics", path: "/about/statistics/stats", key: "stats" },
  { label: "Major Milestones", path: "/about/statistics/milestones", key: "milestones" },
  { label: "Important Achievements", path: "/about/statistics/achievements", key: "achievements" },
];

type TabType = "stats" | "milestones" | "achievements";

const ImportantStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("stats");

  return (
    <AboutLayout>

      <div className="page-wrapper">

        {/* PAGE BANNER */}
        <div className="page-banner">
          <div className="page-banner__inner">

            <nav className="page-banner__breadcrumb">
              <a href="/">Home</a>
              <span>›</span>
              <a href="/about">About RCF</a>
              <span>›</span>
              <span className="page-banner__breadcrumb-active">
                Important Statistics & Achievements
              </span>
            </nav>

            <div className="page-banner__title-row">
              <div className="page-banner__icon">📈</div>

              <div>
                <h1 className="page-banner__heading">
                  Important Statistics & Achievements
                </h1>

                <p className="page-banner__sub">
                  Key figures, milestones and achievements of RCF Kapurthala
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="stats-tabs">

          {subNav.map((item) => (
            <button
              key={item.key}
              className={`stats-tab ${
                activeTab === item.key ? "stats-tab--active" : ""
              }`}
              onClick={() => setActiveTab(item.key as TabType)}
            >
              {item.label}
            </button>
          ))}

        </div>

        {/* CONTENT AREA */}
        <div className="stats-main">

          {/* STATISTICS TAB */}
          {activeTab === "stats" && (
            <div className="stats-content">
              <h2 className="section-heading">Important Statistics</h2>
              <p className="stats-date">As on 01.04.2025</p>

              <div className="stats-grid">

                <div className="stat-card">
                  <h3>Total Area</h3>
                  <p>1,178 Acres</p>
                </div>

                <div className="stat-card">
                  <h3>Workshop Covered Area</h3>
                  <p>2,89,265 Sq.mts</p>
                </div>

                <div className="stat-card">
                  <h3>Residential Quarters</h3>
                  <p>3,960</p>
                </div>

                <div className="stat-card">
                  <h3>Total Assets</h3>
                  <p>₹2418.06 Cr</p>
                </div>

                <div className="stat-card">
                  <h3>Hospital Beds</h3>
                  <p>76 Beds</p>
                </div>

                <div className="stat-card">
                  <h3>Employee Strength</h3>
                  <p>5,866</p>
                </div>

              </div>
            </div>
          )}

          {/* MILESTONES TAB */}
          {activeTab === "milestones" && (
            <div className="stats-content">

              <h2 className="section-heading">Major Milestones</h2>

              <table className="milestones-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Milestone</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>1</td>
                    <td>Laying of Foundation Stone of RCF complex</td>
                    <td>17.08.1985</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>First coach turned out</td>
                    <td>31.03.1988</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>First AC Chair Car coach</td>
                    <td>31.01.1992</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>First AC 3 Tier coach</td>
                    <td>06.10.1993</td>
                  </tr>

                </tbody>

              </table>

            </div>
          )}

          {/* ACHIEVEMENTS TAB */}
          {activeTab === "achievements" && (
            <div className="stats-content">

              <h2 className="section-heading">
                Important Achievements
              </h2>

              <div className="achievements-grid">

                <div className="achievement-card">
                  <h3>IRIS Silver Certificate</h3>
                  <p>
                    RCF received Silver Category Certification under the
                    International Railway Industry Standard (IRIS).
                  </p>
                </div>

                <div className="achievement-card">
                  <h3>Integrated Management System</h3>
                  <p>
                    First unit in Indian Railways to obtain Integrated
                    Management System certification.
                  </p>
                </div>

                <div className="achievement-card">
                  <h3>Golden Peacock Award 2024</h3>
                  <p>
                    RCF received the prestigious Golden Peacock Award
                    for Energy Efficiency.
                  </p>
                </div>

                <div className="achievement-card">
                  <h3>Record Coach Production</h3>
                  <p>
                    Highest annual coach production of 2102 coaches in 2024-25.
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>

    </AboutLayout>
  );
};

export default ImportantStats;