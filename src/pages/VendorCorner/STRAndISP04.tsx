import "./STRAndISP04.css";
import { Link } from "react-router-dom";

const strItems = [
  { sno: 1, description: "Integrated Specification Procedure for Vendor Registration, Approval & Vendor Development", document: "READ IT", notification: 0 },
  { sno: 2, description: "ISC Side Buffers & Side Buffer for LHB Coaches", document: "READ IT", notification: 0 },
  { sno: 3, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing of Mattress Items (Two piece design)", document: "READ IT", notification: 0 },
  { sno: 4, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing of Forged Steel Components", document: "READ IT", notification: 0 },
  { sno: 5, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing of Forged Steel Components", document: "READ IT", notification: 0 },
  { sno: 6, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing of Centre Axle Gearbox Housing", document: "READ IT", notification: 0 },
  { sno: 7, description: "Collar, Ring & Retaining ring for direct mounted roller bearing arrgt", document: "READ IT", notification: 0 },
  { sno: 8, description: "Sleeve Controller", document: "READ IT", notification: 0 },
  { sno: 9, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing of Stainless Steel Components", document: "READ IT", notification: 0 },
  { sno: 10, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing of Roof Ventilator Arrangement (TSA Type)", document: "READ IT", notification: 0 },
  { sno: 11, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Lifting Pad", document: "READ IT", notification: 0 },
  { sno: 12, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Water Tank Assembly (Lit & 83V)", document: "READ IT", notification: 0 },
  { sno: 13, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Side Bearer", document: "READ IT", notification: 0 },
  { sno: 14, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Outer Door Assembly (JIS Stage)", document: "READ IT", notification: 0 },
  { sno: 15, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Tension Bracket (as and B2)", document: "READ IT", notification: 0 },
  { sno: 16, description: "Stove Controller", document: "READ IT", notification: 0 },
  { sno: 17, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Hold Protector", document: "READ IT", notification: 0 },
  { sno: 18, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Foot Step Arrangement", document: "READ IT", notification: 0 },
  { sno: 19, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Thermoplastic Hose for GL, GL and AC-IT Coaches", document: "READ IT", notification: 0 },
  { sno: 20, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Tension Bracket (as and B2)", document: "READ IT", notification: 0 },
  { sno: 21, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Fold Protector", document: "READ IT", notification: 0 },
  { sno: 22, description: "Schedule of Infrastructural Requirement for Manufacturing and Testing for Luggage Rack for LHB Coaches", document: "READ IT", notification: 0 },
  { sno: 23, description: "Schedule of Infrastructural Requirement for Stainless Steel Thermostatic Items", document: "READ IT", notification: 0 },
  { sno: 24, description: "Schedule of Infrastructural Requirement for Single Slit Type Fitting", document: "READ IT", notification: 0 },
  { sno: 25, description: "Schedule of Infrastructural Requirement for Single Slit Type Fitting", document: "READ IT", notification: 0 },
  { sno: 26, description: "Schedule of Infrastructural Requirement for Flange Joint Fitting (used in Pressurized Coaches)", document: "READ IT", notification: 0 },
  { sno: 27, description: "Schedule of Infrastructural Requirement for Honeycomb Plastic Manufacturing", document: "READ IT", notification: 0 },
  { sno: 28, description: "Roll tank for LHB Power Car", document: "READ IT", notification: 0 },
  { sno: 29, description: "Sliding door for LHB Passengers Coaches", document: "READ IT", notification: 0 },
  { sno: 30, description: "Sliding door of Aluminium Roller Trains (Two piece design)", document: "READ IT", notification: 0 },
];

const STRAndISP04 = () => {
  return (
    <main className="str-main">
        {/* Page Heading */}
      <div>
        <div className="main-title">STR and ISP-04 for Mech. Item</div>
        <div className="title-underline"></div>
      </div>

      <div className="str-content">
        <section className="str-section">
          <div className="str-section-top">
            <span className="str-count">{strItems.length}+ items</span>
          </div>

          <div className="str-table-wrapper">
            <table className="str-table">
              <thead>
                <tr>
                  <th className="str-th-sno">S.No</th>
                  <th>Description</th>
                  <th className="str-th-doc">Document</th>
                  <th className="str-th-notif">Notification</th>
                </tr>
              </thead>
              <tbody>
                {strItems.map((item) => (
                  <tr key={item.sno} className="str-row">
                    <td className="str-td-sno">{item.sno}</td>
                    <td className="str-td-desc">{item.description}</td>
                    <td className="str-td-doc">
                      <a href="#" className="str-read-link">{item.document}</a>
                    </td>
                    <td className="str-td-notif">{item.notification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default STRAndISP04;