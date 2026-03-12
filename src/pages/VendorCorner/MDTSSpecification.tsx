import "./MDTSSpecification.css";
import { Link } from "react-router-dom";

const mdtsItems = [
  { sno: 1, description: "DISC BRAKE AXLE", document: "MDTS-001", notification: 0 },
  { sno: 2, description: "CONVENTIONAL COACH AXLE", document: "MDTS-002", notification: 0 },
  { sno: 3, description: "DISC BRAKE WHEEL", document: "MDTS-003", notification: 0 },
  { sno: 4, description: "CONVENTIONAL WHEEL", document: "MDTS-004", notification: 0 },
  { sno: 5, description: "WHEEL SET (DISC BRAKE) FOR LHB COACHES", document: "MDTS-005", notification: 0 },
  { sno: 6, description: "WHEEL SET (TREAD BRAKE) FOR LHB COACHES", document: "MDTS-006", notification: 0 },
  { sno: 7, description: "AXLE BOX HOUSING FOR LHB COACHES", document: "MDTS-007", notification: 0 },
  { sno: 8, description: "BOGIE FRAME FOR LHB COACHES", document: "MDTS-008", notification: 0 },
  { sno: 9, description: "SIDE BEARER ASSEMBLY FOR LHB COACHES", document: "MDTS-009", notification: 0 },
  { sno: 10, description: "ANTI-ROLL BAR ASSEMBLY FOR LHB COACHES", document: "MDTS-010", notification: 0 },
  { sno: 11, description: "CENTRE PIVOT FOR LHB COACHES", document: "MDTS-011", notification: 0 },
  { sno: 12, description: "TRACTION CENTRE FOR LHB COACHES", document: "MDTS-012", notification: 0 },
  { sno: 13, description: "BRAKE DISC FOR LHB COACHES", document: "MDTS-013", notification: 0 },
  { sno: 14, description: "BRAKE CALLIPER UNIT FOR LHB COACHES", document: "MDTS-014", notification: 0 },
  { sno: 15, description: "PRIMARY SUSPENSION SPRING FOR LHB COACHES", document: "MDTS-015", notification: 0 },
  { sno: 16, description: "SECONDARY SUSPENSION AIR SPRING FOR LHB COACHES", document: "MDTS-016", notification: 0 },
  { sno: 17, description: "YOKE FOR LHB COACHES", document: "MDTS-017", notification: 0 },
  { sno: 18, description: "DRAFT GEAR COMPLETE ASSEMBLY FOR LHB COACHES", document: "MDTS-018", notification: 0 },
  { sno: 19, description: "SCREW COUPLING FOR LHB COACHES", document: "MDTS-019", notification: 0 },
  { sno: 20, description: "CENTRE BUFFER COUPLER FOR LHB COACHES", document: "MDTS-020", notification: 0 },
  { sno: 21, description: "GANGWAY ASSEMBLY FOR LHB COACHES", document: "MDTS-021", notification: 0 },
  { sno: 22, description: "STAINLESS STEEL SHEETS FOR LHB COACHES", document: "MDTS-022", notification: 0 },
  { sno: 23, description: "DOOR ASSEMBLY (PLUG TYPE) FOR LHB COACHES", document: "MDTS-023", notification: 0 },
  { sno: 24, description: "WINDOW ASSEMBLY FOR LHB COACHES", document: "MDTS-024", notification: 0 },
  { sno: 25, description: "SEAT ASSEMBLY FOR LHB COACHES", document: "MDTS-025", notification: 0 },
  { sno: 26, description: "BERTH ASSEMBLY FOR LHB COACHES", document: "MDTS-026", notification: 0 },
  { sno: 27, description: "TOILET MODULE ASSEMBLY FOR LHB COACHES", document: "MDTS-027", notification: 0 },
  { sno: 28, description: "PANTRY CAR EQUIPMENT FOR LHB COACHES", document: "MDTS-028", notification: 0 },
  { sno: 29, description: "AIR CONDITIONING UNIT FOR LHB COACHES", document: "MDTS-029", notification: 0 },
  { sno: 30, description: "ROOF MOUNTED AC UNIT FOR LHB COACHES", document: "MDTS-030", notification: 0 },
  { sno: 31, description: "UNDER SLUNG AC UNIT FOR LHB COACHES", document: "MDTS-031", notification: 0 },
  { sno: 32, description: "ELECTRICAL CONTROL PANEL FOR LHB COACHES", document: "MDTS-032", notification: 0 },
  { sno: 33, description: "BATTERY CHARGER FOR LHB COACHES", document: "MDTS-033", notification: 0 },
  { sno: 34, description: "BATTERY BOX ASSEMBLY FOR LHB COACHES", document: "MDTS-034", notification: 0 },
  { sno: 35, description: "FIRE DETECTION AND SUPPRESSION SYSTEM FOR LHB COACHES", document: "MDTS-035", notification: 0 },
  { sno: 36, description: "BIO TOILET SYSTEM FOR LHB COACHES", document: "MDTS-036", notification: 0 },
  { sno: 37, description: "GRAB HANDLE FOR LHB COACHES", document: "MDTS-037", notification: 0 },
  { sno: 38, description: "LUGGAGE RACK FOR LHB COACHES", document: "MDTS-038", notification: 0 },
  { sno: 39, description: "CURTAIN ASSEMBLY FOR LHB COACHES", document: "MDTS-039", notification: 0 },
  { sno: 40, description: "FLOOR COVERING FOR LHB COACHES", document: "MDTS-040", notification: 0 },
];

const MDTSSpecification = () => {
  return (
    <main className="mdts-main">
        {/* Page Heading */}
      <div>
        <div className="main-title">MDTS Specification</div>
        <div className="title-underline"></div>
      </div>

      <div className="mdts-content">
        <section className="mdts-section">
          <div className="mdts-section-top">
            <span className="mdts-count">{mdtsItems.length}+ items</span>
          </div>

          <div className="mdts-table-wrapper">
            <table className="mdts-table">
              <thead>
                <tr>
                  <th className="mdts-th-sno">S.No</th>
                  <th>Description</th>
                  <th className="mdts-th-doc">Document</th>
                  <th className="mdts-th-notif">Notification</th>
                </tr>
              </thead>
              <tbody>
                {mdtsItems.map((item) => (
                  <tr key={item.sno} className="mdts-row">
                    <td className="mdts-td-sno">{item.sno}</td>
                    <td className="mdts-td-desc">{item.description}</td>
                    <td className="mdts-td-doc">
                      <a href="#" className="mdts-read-link">{item.document}</a>
                    </td>
                    <td className="mdts-td-notif">{item.notification}</td>
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

export default MDTSSpecification;