
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
                <a
                  href={item.link}
                  className="eoi-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
    <>
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

      {/* Page Header */}
      <div className="tenders-header-bar">
        <h1 className="tenders-page-title">Expression of Interest</h1>
      </div>

      {/* Tables */}
      <EOITable items={eoiElectrical} dept="Electrical" />
      <EOITable items={eoiMedical} dept="Medical" />
      <EOITable items={eoiMechanical} dept="Mechanical" />
    </>
  );
};

export default ExpressionOfInterest;

