import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", dropdown: [] },
    {
      to: "/about",
      label: "About RCF",
      dropdown: [
        "Certificates Issued to RCF", "Organisation Profile", "General Managers",
        "About RCF", "Organisation Structure", "Environment Management at RCF",
        "Annual Report", "Photo Gallery", "Resident's Need", "Holidays",
        "Staff Welfare Amenities", "Rajbhasha", "Important Statistics and Achievements",
        "Portal Policies", "RCF Golf Course"
      ]
    },
    {
      to: "/departments",
      label: "Departments & Information",
      dropdown: [
        "News & Announcements", "All Departments", "Quality",
        "Annual Immovable Property Returns", "Official Tours of Officers",
        "Technical Information", "Swachh Bharat Abhiyan"
      ]
    },
    {
      to: "/products",
      label: "Products",
      dropdown: ["Materials Purchase", "PRODUCTION"]
    },
    {
      to: "/tenders",
      label: "Tender Information",
      dropdown: [
        "Tenders", "Expression of Interest", "View Awarded Tenders",
        "Surplus Items", "Store Supply Contracts", "Bid Document & IRS Conditions"
      ]
    },
    {
      to: "/vendor",
      label: "Vendor and Contractors Corner",
      dropdown: [
        "Important Notice for Vendors", "List of Stores officer", "Product Gallery",
        "Vendor Registration for Tender Downloading", "Vendor Login",
        "New Specifications For Comment", "M and P Specifications", "Vendor Development",
        "Procedure for New / Renewal of Registration", "PL Unification",
        "Procedure for Vendor Registration, Vendor Approval and Vendor Development",
        "Vendor Directory", "Electrical Design Specifications",
        "Vendor Suggestions and Complaints", "MSME POSITION", "I Card and Pass Forms",
        "List of Similar Items for Tender"
      ]
    },
    {
      to: "/contact",
      label: "Contact Us",
      dropdown: [
        "Contact Details of Senior Management", "Other Officers' Contact Numbers",
        "Nodal Officer for e-Gazette", "Staff Grievances", "Customer Feedback",
        "Vigilance", "How to Reach RCF", "Right To Information", "Citizen Charter",
        "Important Links", "Sitemap", "Other Railway Sites", "Privacy Policy",
        "Terms and Conditions", "Help", "Disclaimer", "Feedback"
      ]
    },
    {
      to: "/staff",
      label: "Staff Corner",
      dropdown: [
        "Act Apprentice", "CBT for NG Staff", "Secret Ballot Election-2024",
        "Schedule of Powers (SOP)", "e-Pass", "Internal Complaints Committee for Sexual Harassment",
        "Recruitments", "Employee Seniority List", "Guidelines on Retirement Benefits",
        "RETIREMENT LISTS", "Pensioners", "RCF's Holiday Home", "Gazetted Section",
        "Compassionate Ground Appointment", "Pledge", "Railnet Mail Login"
      ]
    }
  ];

  return (
    <nav className="main-nav">
      <div className="mx-auto max-w-7xl">
        <ul className="main-nav__list">
          {links.map((link) => (
            <li key={link.to} className="main-nav__item">
              <Link
                to={link.to}
                className={`main-nav__link ${location.pathname === link.to ? "main-nav__link--active" : ""}`}
              >
                {link.label}
                {link.dropdown?.length > 0 && <ChevronDown size={12} className="ml-1 inline" />}
              </Link>
              
              {link.dropdown?.length > 0 && (
                <ul className="main-nav__dropdown">
                  {link.dropdown.map((item, idx) => (
                    <li key={idx} className="main-nav__dropdown-item">
                      <Link to="#">{item}</Link>
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