import React, { useState } from "react";
import AboutLayout from "../AboutRCF/AboutLayout";
import "../AboutRCF/AnnualReports.css";

interface ReportYear {
  year: string;
  label: string;
  size: string;
  pages: number;
  pdf: string;
  isNew?: boolean;
  highlight?: boolean;
}

const reports: ReportYear[] = [
  { year: "2024-25", label: "ANNUAL REPORT 2024-25", size: "4.2 MB", pages: 68, pdf: "/annual-reports/2024-25.pdf", isNew: true, highlight: true },
  { year: "2023-24", label: "ANNUAL REPORT 2023-24", size: "3.8 MB", pages: 64, pdf: "/annual-reports/2023-24.pdf" },
  { year: "2022-23", label: "ANNUAL REPORT 2022-23", size: "3.5 MB", pages: 60, pdf: "/annual-reports/2022-23.pdf" },
  { year: "2021-22", label: "ANNUAL REPORT 2021-22", size: "3.2 MB", pages: 58, pdf: "/annual-reports/2021-22.pdf" },
  { year: "2020-21", label: "ANNUAL REPORT 2020-21", size: "2.9 MB", pages: 56, pdf: "/annual-reports/2020-21.pdf" },
  { year: "2019-20", label: "ANNUAL REPORT 2019-20", size: "2.7 MB", pages: 54, pdf: "/annual-reports/2019-20.pdf" },
  { year: "2018-19", label: "ANNUAL REPORT 2018-19", size: "2.5 MB", pages: 52, pdf: "/annual-reports/2018-19.pdf" },
  { year: "2017-18", label: "ANNUAL REPORT 2017-18", size: "2.4 MB", pages: 50, pdf: "/annual-reports/2017-18.pdf" },
  { year: "2016-17", label: "ANNUAL REPORT 2016-17", size: "2.2 MB", pages: 48, pdf: "/annual-reports/2016-17.pdf" },
  { year: "2015-16", label: "ANNUAL REPORT 2015-16", size: "2.0 MB", pages: 46, pdf: "/annual-reports/2015-16.pdf" },
  { year: "2014-15", label: "ANNUAL REPORT 2014-15", size: "1.9 MB", pages: 44, pdf: "/annual-reports/2014-15.pdf" },
  { year: "2013-14", label: "ANNUAL REPORT 2013-14", size: "1.8 MB", pages: 42, pdf: "/annual-reports/2013-14.pdf" },
  { year: "2012-13", label: "ANNUAL REPORT 2012-13", size: "1.7 MB", pages: 40, pdf: "/annual-reports/2012-13.pdf" },
  { year: "2011-12", label: "ANNUAL REPORT 2011-12", size: "1.6 MB", pages: 38, pdf: "/annual-reports/2011-12.pdf" },
  { year: "2010-11", label: "ANNUAL REPORT 2010-11", size: "1.5 MB", pages: 36, pdf: "/annual-reports/2010-11.pdf" },
];

const AnnualReport: React.FC = () => {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  return (
    <AboutLayout title="Annual Report">
      <main className="annual-report-main">

        <div className="ar-featured">
          <div className="ar-featured__badge">🆕 Latest Release</div>

          <div className="ar-featured__content">
            <div className="ar-featured__left">

              <div className="ar-featured__year-tag">2024–25</div>

              <h2 className="ar-featured__title">
                Annual Report 2024-25
              </h2>

              <p className="ar-featured__desc">
                Comprehensive report covering coach production milestones,
                financial performance, infrastructure development,
                HR achievements and environmental initiatives.
              </p>

              <div className="ar-featured__meta">
                <span>📄 68 Pages</span>
                <span>📦 4.2 MB PDF</span>
                <span>🗓️ March 2025</span>
              </div>

              <div className="ar-featured__actions">
                <a
                  href="/annual-reports/2024-25.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ar-btn ar-btn--primary"
                >
                  👁 View PDF
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="ar-grid">

          {reports.map((report) => (

            <a
              key={report.year}
              href={report.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`ar-card
              ${report.highlight ? "ar-card--highlight" : ""}
              ${hoveredYear === report.year ? "ar-card--hovered" : ""}
              `}
              onMouseEnter={() => setHoveredYear(report.year)}
              onMouseLeave={() => setHoveredYear(null)}
            >

              <div className="ar-card__year-band">
                <span className="ar-card__year">{report.year}</span>

                {report.isNew && (
                  <span className="ar-card__new-badge">NEW</span>
                )}
              </div>

              <div className="ar-card__body">
                <div className="ar-card__icon">📄</div>

                <div className="ar-card__label">
                  {report.label}
                </div>

                <div className="ar-card__meta">
                  <span>{report.size}</span>
                  <span>·</span>
                  <span>{report.pages} pages</span>
                </div>

                <div className="ar-card__download">
                  👁 View PDF
                </div>
              </div>

            </a>

          ))}

        </div>

      </main>
    </AboutLayout>
  );
};

export default AnnualReport;