import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./AboutLayout.css";

const sidebarItems = [
  { label: "Certificates Issued to RCF", path: "/about/certificates" },
  { label: "Organisation Profile", path: "/about/organisation-profile" },
  { label: "General Managers", path: "/about/general-managers" },
  { label: "About RCF", path: "/about/about-rcf" },
  { label: "Organisation Structure", path: "/about/organisationstructure" },
  { label: "Environment Management at RCF", path: "/about/environment" },
  { label: "Annual Report", path: "/about/annual-report" },
  { label: "Photo Gallery", path: "/about/gallery" },
  { label: "Resident's Need", path: "/about/residents-need" },
  { label: "Holidays", path: "/about/holidays" },
  { label: "Staff Welfare Amenities", path: "/about/staff-welfare" },
  { label: "Rajbhasha", path: "/about/rajbhasha" },
  { label: "Important Statistics and Achievements", path: "/about/statistics" },
  { label: "Portal Policies", path: "/about/policies" },
  { label: "RCF Golf Course", path: "/about/golf-course" }
];

interface LayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="official-layout">
      {/* SIDEBAR */}
      <aside className="official-sidebar">
        <div className="sidebar-brand">ABOUT RCF</div>
        <nav className="sidebar-menu">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`sidebar-item ${
                location.pathname === item.path ? "is-active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="official-main">
        <div className="content-inner">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AboutLayout;