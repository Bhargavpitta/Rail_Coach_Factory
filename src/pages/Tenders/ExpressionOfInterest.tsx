// src/pages/Tenders/ExpressionOfInterest.tsx

import { Link } from "react-router-dom";
import "./Tenders.css";
import "./ExpressionOfInterest.css";

interface EOIItem {
  sno: number;
  title: string;
  uploadDate: string;
  link: string;
}

const eoiElectrical: EOIItem[] = [
  {
    sno: 1,
    title: "EOI for Safety Audit Of Electrical Systems in LHB Coaches",
    uploadDate: "18-07-2024",
    link: "#",
  },
];

const eoiMedical: EOIItem[] = [
  {
    sno: 1,
    title: "EOI for empanelment of private diagnostic laboratories & Radiology centres/Hospitals",
    uploadDate: "23-11-2023",
    link: "#",
  },
  {
    sno: 2,
    title: "EOI/Registration of Local Medicine Suppliers/ wholesalers",
    uploadDate: "29-07-2025",
    link: "#",
  },
];

const eoiMechanical: EOIItem[] = [
  {
    sno: 1,
    title:
      "EOI for Design Consultancy to completely redesign the Layout, Interior of Indian & Western Lavatory Module including outside Dustbin and Washbasin",
    uploadDate: "17-04-2023",
    link: "#",
  },
  {
    sno: 2,
    title:
      "Expression of Interest for Updation of FIAT bogie being used in LHB type coaches in Indian Railways",
    uploadDate: "29-07-2023",
    link: "#",
  },
];

const EOITable = ({ items, dept }: { items: EOIItem[]; dept: string }) => (
  <div className="eoi-section">
    <h2 className="eoi-dept-title">Expression of Interest ({dept})</h2>
    <div className="eoi-table-wrapper">
      <table className="eoi-table">
        <thead>
          <tr>
            <th className="col-sno">S.No.</th>
            <th className="col-title">Title</th>
            <th className="col-date">Upload Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.sno}>
              <td className="col-sno">{item.sno}</td>
              <td className="col-title">
                <a href={item.link} className="eoi-link" target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </td>
              <td className="col-date">{item.uploadDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ExpressionOfInterest = () => {
  return (
    <div className="tenders-page">
      {/* Breadcrumb */}
      <div className="tenders-breadcrumb">
        <div className="tenders-container">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span>Tender Information</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-active">Expression of Interest</span>
        </div>
      </div>

      <div className="tenders-container tenders-layout">
        {/* Sidebar */}
        <aside className="tenders-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Tender Information</h3>
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
                    <Link to="/tenders/bid-documents">
                      Bid Document & IRS Conditions
                    </Link>
                  </li>

              </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="tenders-main">
          <div className="tenders-header-bar">
            <h1 className="tenders-page-title">Expression of Interest</h1>
          </div>

          <EOITable items={eoiElectrical} dept="Electrical" />
          <EOITable items={eoiMedical} dept="Medical" />
          <EOITable items={eoiMechanical} dept="Mechanical" />
        </main>
      </div>
    </div>
  );
};

export default ExpressionOfInterest;