import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    {
      to: "/about", label: "About RCF",
      dropdown: [
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
            { label: "Achievements (Previous Years)", path: "/about/statistics/prev-achievements" }
          ]
        },
        { label: "Portal Policies", path: "/about/policies" },
        { label: "RCF Golf Course", path: "/about/golf-course" }
      ]
    },
    {
      to: "/departments", label: "Departments",
      dropdown: [
        { label: "News & Announcements", path: "/departments/news" },
        {
          label: "All Departments",
          path: "/departments/all",
          subDropdown: [
            { label: "Administration", path: "/dept/admin" },
            { label: "Accounts", path: "/dept/accounts" },
            { label: "Civil", path: "/dept/civil" },
            {
              label: "Design",
              path: "/dept/design",
              subDropdown: [
                { label: "Coach Alteration Instructions", path: "/dept/design/cai" },
                { label: "Color Scheme", path: "/dept/design/color" },
                { label: "Design Specifications", path: "/dept/design/specs" },
                { label: "List of Drawings", path: "/dept/design/drawings" }
              ]
            },
            { label: "Electrical", path: "/dept/electrical" },
            { label: "Information Technology", path: "/dept/it" },
            { label: "Medical", path: "/dept/medical" },
            { label: "Mechanical", path: "/dept/mechanical" },
            { label: "Personnel", path: "/dept/personnel" },
            { label: "Quality", path: "/dept/quality" },
            { label: "Signal & Telecommunication", path: "/dept/st" },
            { label: "Stores", path: "/dept/stores" },
            { label: "Security", path: "/dept/security" },
            { label: "Sports", path: "/dept/sports" },
            {
              label: "Technical Training Centre",
              path: "/dept/ttc" ,
              subDropdown: [
                { label: "Technical Training Calendar", path: "/dept/ttc/calendar" },
                { label: "Recruitment Info", path: "/dept/ttc/recruitment" }
              ]
            },

          ]
        },
        {
          label: "Quality",
          path: "/departments/quality",
          subDropdown: [
            { label: "Warranty", path: "/quality/warranty" },
            { label: "Rolling Stock Warranty Certificate", path: "/quality/rolling-stock" },
            { label: "LHB Spares", path: "/quality/lhb" },
            
          ]
        },
        { label: "Annual Immovable Property Returns", path: "/departments/property" },
        { label: "Official Tours of Officers", path: "/departments/tours" },
        { label: "Technical Information", path: "/departments/technical" },
        { label: "Swachh Bharat Abhiyan", path: "/departments/swachh-bharat" }
      ]
    },
    {
      to: "/products", label: "Products",
      dropdown: [
        { label: "Materials Purchase", path: "/products/materials" },
        { label: "Production", path: "/products/production" },
        { label: "Product Catalogue", path: "/products/catalogue" },
        { label: "Export Enquiries", path: "/products/export" },
        { label: "Production Programme", path: "/products/programme" }
      ]
    },
    {
      to: "/tenders", label: "Tender Information",
      dropdown: [
        { label: "Tenders", path: "/tenders" },
        { label: "Expression of Interest", path: "/tenders/eoi" },
        { label: "View Awarded Tenders", path: "/tenders/awarded" },
        {
          label: "Surplus Items",
          path: "/tenders/surplus",
          subDropdown: [
            { label: "Stores", path: "/tenders/surplus/stores" },
            { label: "Mechanical", path: "/tenders/surplus/mechanical" }
          ]
        },
        { label: "Store Supply Contracts", path: "/tenders/contracts" },
        { label: "Bid Document & IRS Conditions", path: "/tenders/bid-documents" }
      ]
    },
   {
            to: "/vendor-corner",
            label: "Vendor Corner",
            dropdown: [
              { label: "Important Notice for Vendors", path: "/vendor-corner/important-notice" },
              { label: "List of Stores Officer", path: "/vendor-corner/stores-officer" },
              { label: "Product Gallery", path: "/vendor-corner/product-gallery" },
              { label: "Vendor Registration for Tender Downloading", path: "/vendor-corner/vendor-registration" },
              { label: "Vendor Login", path: "/vendor-corner/vendor-login" },
              { label: "New Specifications For Comment", path: "/vendor-corner/new-specifications" },
              { label: "M and P Specifications", path: "/vendor-corner/mp-specifications" },
              { label: "Vendor Development", path: "/vendor-corner/vendor-development" },
              { label: "Procedure for New / Renewal of Registration", path: "/vendor-corner/registration-procedure" },
              { label: "PL Unification", path: "/vendor-corner/pl-unification" },

              {
                label: "Vendor Directory",
                path: "/vendor-corner/vendor-directory",
                subDropdown: [
                  { label: "Vendor Directory Mechanical", path: "/vendor-corner/vendor-directory/mechanical" },
                  { label: "Vendor Directory Electrical", path: "/vendor-corner/vendor-directory/electrical" },
                  { label: "List of Registered Vendors", path: "/vendor-corner/vendor-directory/registered-vendors" },
                  { label: "STR and ISP-04 for Mech. Item", path: "/vendor-corner/vendor-directory/str-isp04" },
                  { label: "MDTS Specification", path: "/vendor-corner/vendor-directory/mdts" }
                ]
              },

              {
                label: "Electrical Design Specifications",
                path: "/vendor-corner/electrical-design",
                subDropdown: [
                  { label: "EDTS", path: "/vendor-corner/electrical-design/edts" },
                  { label: "EDML", path: "/vendor-corner/electrical-design/edml" },
                  { label: "STR", path: "/vendor-corner/electrical-design/str" },
                  { label: "CAI", path: "/vendor-corner/electrical-design/cai" },
                  { label: "Coach Drawings", path: "/vendor-corner/electrical-design/coach-drawings" }
                ]
    },

    { label: "Vendor Suggestions and Complaints", path: "/vendor-corner/suggestions-complaints" },
    { label: "MSME Position", path: "/vendor-corner/msme-position" },
    { label: "I Card and Pass Forms", path: "/vendor-corner/icard-pass-forms" },
    { label: "List of Similar Items for Tender", path: "/vendor-corner/similar-items-tender" }
  ]
},
        {
      to: "/contact", label: "Contact Us",
      dropdown: [
        { label: "Contact Details of Senior Management", path: "/contact/senior-management" },
        { label: "Other Officers' Contact Numbers", path: "/contact/other-officers" },
        { label: "Staff Grievances", path: "/contact/staff-grievances" },
        { label: "Nodal Officer for e-Gazette", path: "/contact/nodal-officer" },
        { label: "Customer Feedback", path: "/contact/customer-feedback" },
        { label: "Vigilance", path: "/contact/vigilance" },
        { label: "How to Reach RCF", path: "/contact/how-to-reach" },
        {
          label: "Right To Information",
          path: "/contact/rti",
          subDropdown: [
            { label: "Information under section 4(1)b of RTI Act", path: "/contact/rti/rti-act" },
            { label: "RCF Related Grievances", path: "/contact/rti/rcf-grievances" },
          ]
        },
        { label: "Citizen Charter", path: "/contact/citizen-charter" },
        { label: "Important Links", path: "/contact/important-links" },
        { label: "Sitemap", path: "/contact/sitemap" },
        { label: "Other Railway Sites", path: "/contact/other-railway-sites" },
        { label: "Privacy Policy", path: "/contact/privacy-policy" },
        { label: "Terms and Conditions", path: "/contact/terms-conditions" },
        { label: "Help", path: "/contact/help" },
        { label: "Disclaimer", path: "/contact/disclaimer" },
        { label: "Feedback", path: "/contact/feedback" },
      ]
    },
    {
      to: "/staff", label: "Staff Corner",
      dropdown: [
        { label: "Act Apprentice", path: "/staff/apprentice" },
        { label: "CBT for NG Staff", path: "/staff/cbt" },
        { label: "Secret Ballot Election-2024", path: "/staff/election" },
        { label: "Recruitments", path: "/staff/recruitments" },
        {
          label: "Employee Seniority List",
          path: "/staff/seniority",
          subDropdown: [
            { label: "Accounts", path: "/staff/seniority/accounts" },
            { label: "Civil", path: "/staff/seniority/civil" },
            { label: "Electrical", path: "/staff/seniority/electrical" },
            { label: "Mechanical", path: "/staff/seniority/mechanical" },
            { label: "Personnel", path: "/staff/seniority/personnel" },
            { label: "Stores", path: "/staff/seniority/stores" },
            { label: "Others", path: "/staff/seniority/others" }
          ]
        },
        {
          label: "Compassionate Ground",
          path: "/staff/compassionate",
          subDropdown: [
            { label: "Pending Status", path: "/staff/comp/status" },
            { label: "Proforma Recruitment", path: "/staff/comp/proforma" }
          ]
        },
        { label: "Pensioners", path: "/staff/pensioners" },
        { label: "Railnet Mail Login", path: "/staff/railnet" },
        { label: "Staff Benefit Fund", path: "/staff/sbf" },
        { label: "Quarters Allotment", path: "/staff/quarters" },
        { label: "Holiday Home Booking", path: "/staff/holiday-home" }
      ]
    }
  ];

  const renderDropdown = (items: any[]) => (
    <ul className="main-nav__dropdown">
      {items.map((item, idx) => (
        <li key={idx} className="main-nav__dropdown-item">
          <Link to={item.path} className="flex items-center justify-between w-full">
            <span>{item.label}</span>
            {item.subDropdown && <ChevronRight size={12} className="ml-2" />}
          </Link>
          {item.subDropdown && renderDropdown(item.subDropdown)}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <ul className="main-nav__list">
          {links.map((link, index) => (
            <li key={index} className="main-nav__item">
              <Link
                to={link.to}
                className={`main-nav__link ${location.pathname === link.to ? "main-nav__link--active" : ""}`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} className="ml-1" />}
              </Link>
              {link.dropdown && renderDropdown(link.dropdown)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;