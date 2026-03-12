// src/pages/VendorCorner/StoresOfficer.tsx
import "./StoresOfficer.css";
import { Link } from "react-router-dom";

const purchaseOfficers = [
  { sr: 1, designation: "Principal Chief Material Manager", section: "——————————", contact: "01822-227787" },
  { sr: 2, designation: "Chief Material Manager/HSQ", section: "P-16, P-17", contact: "01822-285039" },
  { sr: 3, designation: "Chief Material Manager/G", section: "P-5, Vendor Section", contact: "01822-294910" },
  { sr: 4, designation: "Chief Material Manager/M", section: "P-2, P-4", contact: "9779241716" },
  { sr: 5, designation: "Chief Material Manager/M", section: "P-12, P-13, P-15, P-18", contact: "6283289770" },
  { sr: 6, designation: "Dy CMM/G", section: "P-13, P-14, P-18", contact: "9779241703" },
  { sr: 7, designation: "Dy CMM/LHB", section: "P-16, P-17", contact: "9717640108" },
  { sr: 8, designation: "Dy CMM/M", section: "P-12 & P-15", contact: "9779241710" },
  { sr: 9, designation: "Dy CMM/Shell", section: "General Section P-5 & Vendor Section", contact: "6283289780" },
  { sr: 10, designation: "AMM/LHB", section: "P-16, P-17", contact: "9779241705" },
  { sr: 11, designation: "AMM/G", section: "P-18", contact: "9417879608" },
];

const depotOfficers = [
  { sr: 1, designation: "Dy CMM/D/Fur", section: "Furnishing Depot", contact: "9779241718" },
  { sr: 2, designation: "Dy CMM/D/Shell", section: "Shell Depot", contact: "9779241717" },
  { sr: 3, designation: "SMM/D/SHELL", section: "Shell Depot", contact: "9779241467" },
  { sr: 4, designation: "AMM/D/FUR", section: "Furnishing Depot", contact: "9779245119" },
  { sr: 5, designation: "AMM/D/SHELL", section: "Shell Depot", contact: "9717640110" },
];

const delhiOfficers = [
  { sr: 1, designation: "CMM/TKJ", section: "P-1, P-7", contact: "9794935117" },
  { sr: 2, designation: "Dy CMM/E", section: "General Section, P-2, P-4", contact: "9717640104" },
  { sr: 3, designation: "Dy CMM/HQ", section: "P-1, P-7", contact: "9779241709" },
];

const StoresOfficer = () => {
  return (
    <main className="so-main">
      <div className="vc-container">
        {/* Page Heading */}
        <h1 className="main-title">List of Stores Officer</h1>
        <div className="title-underline"></div>

        {/* Breadcrumb */}
        <div className="so-breadcrumb">
          <div className="so-breadcrumb-inner">
            <Link to="/">Home</Link>
            <span className="so-sep">›</span>
            <Link to="/vendor-corner">Vendor and Contractors Corner</Link>
            <span className="so-sep">›</span>
            <span>List of Stores Officer</span>
          </div>
        </div>

        <div className="so-content">
          {/* Office Timing */}
          <section className="so-timing-section">
            <div className="so-timing-card">
              <div className="so-timing-icon">🕐</div>
              <div>
                <h3>Office Timing</h3>
                <p>Monday to Friday: <strong>09:00 Hrs to 17:00 Hrs</strong></p>
                <p>Saturday: <strong>09:00 Hrs to 12:30 Hrs</strong></p>
              </div>
            </div>
            <div className="so-timing-card">
              <div className="so-timing-icon">📍</div>
              <div>
                <h3>Office Address</h3>
                <p>Principal Chief Materials Manager, ADMIN Building,<br />Rail Coach Factory, Kapurthala – <strong>India-144602</strong></p>
              </div>
            </div>
          </section>

          {/* Table 1 */}
          <section className="so-table-section">
            <h2 className="so-table-title">
              <span className="so-table-num">1</span> Purchase Officers at Kapurthala
            </h2>
            <div className="so-table-wrapper">
              <table className="so-table">
                <thead>
                  <tr>
                    <th>SR No.</th>
                    <th>Designation</th>
                    <th>Purchase Section</th>
                    <th>Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {purchaseOfficers.map((row) => (
                    <tr key={row.sr}>
                      <td className="so-td-num">{row.sr}</td>
                      <td>{row.designation}</td>
                      <td className="so-td-section">{row.section}</td>
                      <td className="so-td-contact">📞 {row.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Table 2 */}
          <section className="so-table-section">
            <h2 className="so-table-title">
              <span className="so-table-num">2</span> Depot Officers at Kapurthala
            </h2>
            <div className="so-table-wrapper">
              <table className="so-table">
                <thead>
                  <tr>
                    <th>SR No.</th>
                    <th>Designation</th>
                    <th>Section</th>
                    <th>Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {depotOfficers.map((row) => (
                    <tr key={row.sr}>
                      <td className="so-td-num">{row.sr}</td>
                      <td>{row.designation}</td>
                      <td className="so-td-section">{row.section}</td>
                      <td className="so-td-contact">📞 {row.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Table 3 */}
          <section className="so-table-section">
            <h2 className="so-table-title">
              <span className="so-table-num">3</span> Rail Coach Factory, Tilak Bridge, New Delhi
            </h2>
            <div className="so-timing-note">
              <span>🕐</span>
              <span>Office Timing: 09:30 Hrs to 18:00 Hrs (Monday to Friday) &nbsp;|&nbsp; Phone: 011-23370467 &nbsp;|&nbsp; Fax: 011-23379288</span>
            </div>
            <div className="so-table-wrapper">
              <table className="so-table">
                <thead>
                  <tr>
                    <th>SN.</th>
                    <th>Designation</th>
                    <th>Purchase Section</th>
                    <th>Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {delhiOfficers.map((row) => (
                    <tr key={row.sr}>
                      <td className="so-td-num">{row.sr}</td>
                      <td>{row.designation}</td>
                      <td className="so-td-section">{row.section}</td>
                      <td className="so-td-contact">📞 {row.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default StoresOfficer;