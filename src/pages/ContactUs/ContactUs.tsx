// src/pages/ContactUs/ContactUs.tsx

import "./ContactUs.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import crisbanner from "../../assets/images/crisbanner.gif";

interface LinkItem {
  title: string;
  path: string;
  subDropdown?: LinkItem[];
}

const contactLinks: LinkItem[] = [
  { title: "Contact Details of Senior Management", path: "senior-management" },
  { title: "Other Officers' Contact Numbers", path: "other-officers" },
  { title: "Staff Grievances", path: "staff-grievances" },
  { title: "Nodal Officer for e-Gazette", path: "nodal-officer" },
  { title: "Customer Feedback", path: "customer-feedback" },
  { title: "Vigilance", path: "vigilance" },
  { title: "How to Reach RCF", path: "how-to-reach" },
  {
    title: "Right To Information",
    path: "rti",
    subDropdown: [
      { title: "Information under section 4(1)b of RTI Act", path: "rti-act" },
      { title: "RCF Related Grievances", path: "rcf-grievances" },
    ],
  },
  { title: "Citizen Charter", path: "citizen-charter" },
  { title: "Important Links", path: "important-links" },
  { title: "Sitemap", path: "sitemap" },
  { title: "Other Railway Sites", path: "other-railway-sites" },
  { title: "Privacy Policy", path: "privacy-policy" },
  { title: "Terms and Conditions", path: "terms-conditions" },
  { title: "Help", path: "help" },
  { title: "Disclaimer", path: "disclaimer" },
  { title: "Feedback", path: "feedback" },
];

const ContactUs = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  // Auto open dropdown if child is active
  useEffect(() => {
    const activeDropdowns: string[] = [];

    const checkActive = (links: LinkItem[], parentPath = "/contact") => {
      links.forEach((item) => {
        const fullPath = `${parentPath}/${item.path}`;
        if (item.subDropdown) {
          const childActive = item.subDropdown.some(
            (sub) => location.pathname === `${fullPath}/${sub.path}`
          );
          if (childActive) activeDropdowns.push(fullPath);
          checkActive(item.subDropdown, fullPath);
        }
      });
    };

    checkActive(contactLinks);
    setOpenMenus(activeDropdowns);
  }, [location.pathname]);

  const toggleMenu = (path: string) => {
    setOpenMenus((prev) =>
      prev.includes(path)
        ? prev.filter((p) => p !== path)
        : [...prev, path]
    );
  };

  const renderLinks = (links: LinkItem[], parentPath = "/contact") => (
    <ul className="cu-sidebar-links">
      {links.map((item) => {
        const fullPath = `${parentPath}/${item.path}`;
        const hasSub = !!item.subDropdown?.length;
        const isOpen = openMenus.includes(fullPath);

        const isActive =
          location.pathname === fullPath ||
          (item.subDropdown &&
            item.subDropdown.some(
              (sub) => location.pathname === `${fullPath}/${sub.path}`
            ));

        return (
          <li
            key={fullPath}
            className={`cu-sidebar-link ${hasSub ? "has-submenu" : ""}`}
          >
            {hasSub ? (
              <>
                <div
                  className={`cu-dropdown-title ${
                    isActive ? "active" : ""
                  }`}
                >
                  <NavLink
                    to={fullPath}
                    className={({ isActive: navIsActive }) =>
                      navIsActive ? "cu-nav-active" : ""
                    }
                    style={{ flex: 1 }}
                  >
                    {item.title}
                  </NavLink>

                  <ChevronDown
                    size={12}
                    className={`cu-chevron ${isOpen ? "rotate" : ""}`}
                    onClick={() => toggleMenu(fullPath)}
                  />
                </div>

                {isOpen && renderLinks(item.subDropdown!, fullPath)}
              </>
            ) : (
              <NavLink
                to={fullPath}
                className={({ isActive: navIsActive }) =>
                  navIsActive ? "active" : ""
                }
              >
                {item.title}
              </NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );

  const isContactHome = location.pathname === "/contact";

  return (
    <main className="cu-main">
      <div className="cu-layout">
        {/* Sidebar */}
        <aside className="cu-sidebar">
          <h3 className="cu-sidebar-title">Contact Us</h3>

          {renderLinks(contactLinks)}

          {/* GIF Image at bottom */}
          <div className="cu-sidebar-banner">
            <a
                href="https://www.indianrail.gov.in/enquiry/StaticPages/StaticEnquiry.jsp?StaticPage=index.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={crisbanner} alt="Indian Railway Enquiry" />
            </a>
            </div>
        </aside>

        {/* Main Content */}
        <section className="cu-content">
          <div key={location.pathname} className="cu-container">
            {isContactHome ? (
              <>
                <h1 className="main-title">Contact Us</h1>
                <div className="title-underline"></div>
                <p className="main-description">
                  Welcome to the Contact Us section. Here you can find contact
                  details of senior management, staff grievances, customer
                  feedback, and other important contact information for Rail
                  Coach Factory, Kapurthala.
                </p>
              </>
            ) : (
              <Outlet />
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactUs;