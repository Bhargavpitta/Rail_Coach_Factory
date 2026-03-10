import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AboutLayout.css";

interface SidebarItem {
  label: string;
  path: string;
  subDropdown?: { label: string; path: string }[];
}

const sidebarItems: SidebarItem[] = [
  { label: "Certificates Issued to RCF", path: "/about/certificates" },
  { label: "Organisation Profile", path: "/about/organisation-profile" },
  { label: "General Managers", path: "/about/general-managers" },
  { label: "About RCF", path: "/about/about-rcf" },
  { label: "Organisation Structure", path: "/about/organisationstructure" },
  { label: "Environment Management at RCF", path: "/about/environment" },
  { label: "Annual Report", path: "/about/annualreports" },
  { label: "Photo Gallery", path: "/about/gallery" },
  { label: "Resident's Need", path: "/about/residentsneed" },
  { label: "Holidays", path: "/about/holidays" },
  { label: "Staff Welfare Amenities", path: "/about/staff-welfare" },
  { label: "Rajbhasha", path: "/about/rajbhasha" },

  {
    label: "Important Statistics and Achievements",
    path: "/about/statistics",
    subDropdown: [
      { label: "Important Statistics", path: "/about/statistics" },
      { label: "Major Milestones", path: "/about/statistics/milestones" },
      {
        label: "Achievements (Previous Years)",
        path: "/about/statistics/prev-achievements",
      },
    ],
  },

  { label: "Portal Policies", path: "/about/policies" },
  { label: "RCF Golf Course", path: "/about/golf-course" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="official-layout">

      {/* SIDEBAR */}
      <aside className="official-sidebar">
        <div className="sidebar-brand">ABOUT RCF</div>

        <nav className="sidebar-menu">
          {sidebarItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <div key={index} className="sidebar-group">

                {/* MAIN MENU ITEM */}
                {item.subDropdown ? (
                  <>
                    <div
                      className={`sidebar-item dropdown ${
                        openDropdown === index ? "open" : ""
                      }`}
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.label}
                    </div>

                    {/* SUB DROPDOWN */}
                    {openDropdown === index && (
                      <div className="sub-menu">
                        {item.subDropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`sidebar-subitem ${
                              location.pathname === subItem.path
                                ? "is-active"
                                : ""
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`sidebar-item ${isActive ? "is-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="official-main">
        <div className="content-inner">{children}</div>
      </main>

    </div>
  );
};

export default AboutLayout;