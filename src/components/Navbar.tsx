import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },


    {
         to: "/about",label: "About RCF",
      dropdown: [
        { label: "Certificates Issued to RCF",  path: "/about/certificates"},
        { label: "Organisation Profile", path: "/organisation-profile" },
        { label: "General Managers", path: "/about/general-managers" },
        { label: "About RCF", path: "/about/about-rcf" },
        { label: "Organisation Structure", path: "/about/structure" },
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
      ]
    },

    {
       to:"/departments",label: "departments",
      dropdown: [
        { label: "News & Announcements", path: "/departments/news" },
        { label: "All Departments", path: "/departments/all" },
        { label: "Quality", path: "/departments/quality" },
        { label: "Annual Immovable Property Returns", path: "/departments/property" },
        { label: "Official Tours of Officers", path: "/departments/tours" },
        { label: "Technical Information", path: "/departments/technical" },
        { label: "Swachh Bharat Abhiyan", path: "/departments/swachh-bharat" }
      ]
    },

    {
      to:"/products",label: "Products",
      dropdown: [
        { label: "Materials Purchase", path: "/products/materials" },
        { label: "Production", path: "/products/production" }
      ]
    },

    {
      to:"/tenders",label: "Tender Information",
      dropdown: [
        { label: "Tenders", path: "/tenders" },
        { label: "Expression of Interest", path: "/tenders/eoi" },
        { label: "View Awarded Tenders", path: "/tenders/awarded" },
        { label: "Surplus Items", path: "/tenders/surplus" },
        { label: "Store Supply Contracts", path: "/tenders/contracts" },
        { label: "Bid Document & IRS Conditions", path: "/tenders/bid-documents" }
      ]
    },

    {
     to:"/vendors", label: "Vendor and Contractors Corner",
      dropdown: [
        { label: "Important Notice for Vendors", path: "/vendor/notice" },
        { label: "List of Stores Officer", path: "/vendor/stores-officer" },
        { label: "Product Gallery", path: "/vendor/gallery" },
        { label: "Vendor Registration for Tender Downloading", path: "/vendor/registration" },
        { label: "Vendor Login", path: "/vendor/login" },
        { label: "Vendor Development", path: "/vendor/development" },
        { label: "Vendor Directory", path: "/vendor/directory" },
        { label: "Vendor Suggestions and Complaints", path: "/vendor/complaints" }
      ]
    },

    {
      to:"/contact",label: "Contact Us",
      dropdown: [
        { label: "Contact Details of Senior Management", path: "/contact/senior-management" },
        { label: "Other Officers Contact Numbers", path: "/contact/officers" },
        { label: "Nodal Officer for e-Gazette", path: "/contact/e-gazette" },
        { label: "Customer Feedback", path: "/contact/feedback" },
        { label: "How to Reach RCF", path: "/contact/location" },
        { label: "Right To Information", path: "/contact/rti" },
        { label: "Citizen Charter", path: "/contact/charter" }
      ]
    },

    {
      to:"/Staffcorner",label: "Staff Corner",
      dropdown: [
        { label: "Act Apprentice", path: "/staff/apprentice" },
        { label: "CBT for NG Staff", path: "/staff/cbt" },
        { label: "Recruitments", path: "/staff/recruitments" },
        { label: "Employee Seniority List", path: "/staff/seniority" },
        { label: "Guidelines on Retirement Benefits", path: "/staff/retirement" },
        { label: "Pensioners", path: "/staff/pensioners" },
        { label: "Railnet Mail Login", path: "/staff/railnet" }
      ]
    }
  ];

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <ul className="main-nav__list">

          {links.map((link, index) => (
            <li key={index} className="main-nav__item">

              {link.to ? (
                <Link
                  to={link.to}
                  className={`main-nav__link ${
                    location.pathname === link.to ? "main-nav__link--active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <span className="main-nav__link">
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                </span>
              )}

              {link.dropdown && (
                <ul className="main-nav__dropdown">
                  {link.dropdown.map((item, idx) => (
                    <li key={idx} className="main-nav__dropdown-item">
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}

            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;