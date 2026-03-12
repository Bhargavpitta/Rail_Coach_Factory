// src/pages/VendorCorner/VendorCorner.tsx
import "./VendorCorner.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

interface LinkItem {
  title: string;
  path: string;
  subDropdown?: LinkItem[];
}

// Existing links
const vendorLinks: LinkItem[] = [
  { title: "Important Notice for Vendors", path: "important-notice" },
  { title: "List of Stores Officer", path: "stores-officer" },
  { title: "Product Gallery", path: "product-gallery" },
  { title: "Vendor Registration for Tender Downloading", path: "vendor-registration" },
  { title: "Vendor Login", path: "vendor-login" },
  { title: "New Specifications For Comment", path: "new-specifications" },
  { title: "M and P Specifications", path: "mp-specifications" },
  { title: "Vendor Development", path: "vendor-development" },
  { title: "Procedure for New / Renewal of Registration", path: "registration-procedure" },
  { title: "PL Unification", path: "pl-unification" },
  {
    title: "Vendor Directory",
    path: "vendor-directory",
    subDropdown: [
      { title: "Vendor Directory Mechanical", path: "mechanical" },
      { title: "Vendor Directory Electrical", path: "electrical" },
      { title: "List of Registered Vendors", path: "registered-vendors" },
      { title: "STR and ISP-04 for Mech. Item", path: "str-isp04" },
      { title: "MDTS Specification", path: "mdts" },
    ],
  },
  { title: "Electrical Design Specifications", path: "electrical-design" },
  { title: "Vendor Suggestions and Complaints", path: "suggestions-complaints" },
  { title: "MSME Position", path: "msme-position" },
  { title: "I Card and Pass Forms", path: "icard-pass-forms" },
  { title: "List of Similar Items for Tender", path: "similar-items-tender" },
];

const VendorCorner = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  // Automatically open dropdowns if a child is active
  useEffect(() => {
    const activeDropdowns: string[] = [];

    const checkActive = (links: LinkItem[], parentPath = "/vendor-corner") => {
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

    checkActive(vendorLinks);
    setOpenMenus(activeDropdowns);
  }, [location.pathname]);

  const toggleMenu = (path: string) => {
    setOpenMenus((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  const renderLinks = (links: LinkItem[], parentPath = "/vendor-corner") => (
    <ul className="vc-sidebar-links">
      {links.map((item) => {
        const fullPath = `${parentPath}/${item.path}`;
        const hasSub = !!item.subDropdown?.length;
        const isOpen = openMenus.includes(fullPath);

        // Active logic: exact match OR parent of active child
        const isActive =
          location.pathname === fullPath ||
          (item.subDropdown &&
            item.subDropdown.some((sub) => location.pathname === `${fullPath}/${sub.path}`));

        return (
          <li key={fullPath} className={`vc-sidebar-link ${hasSub ? "has-submenu" : ""}`}>
            {hasSub ? (
              <>
                <div
                  className={`vc-dropdown-title ${isActive ? "active" : ""}`}
                  onClick={() => toggleMenu(fullPath)}
                >
                  {item.title}{" "}
                  <ChevronDown size={12} className={`vc-chevron ${isOpen ? "rotate" : ""}`} />
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

  // Check if current path is main Vendor Corner page
  const isVendorHome = location.pathname === "/vendor-corner";

  return (
    <main className="vc-main">
      <div className="vc-layout">
        {/* Sidebar */}
        <aside className="vc-sidebar">
          <h3 className="vc-sidebar-title">Vendor Corner</h3>
          {renderLinks(vendorLinks)}
        </aside>

        {/* Main Content */}
        <section className="vc-content">
          <div key={location.pathname} className="vc-container">
            {isVendorHome ? (
              <>
                <h1 className="main-title">Vendor Corner</h1>
                <div className="title-underline"></div>
                <p className="main-description">
                  Welcome to the Vendor Corner. Here, vendors can access important notices,
                  registration details, and updates regarding tenders and vendor-related processes.
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

export default VendorCorner;