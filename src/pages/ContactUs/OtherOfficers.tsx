import "./OtherOfficers.css";
import { useState } from "react";

const departments = [
  "Accounts", "Administration", "Audit", "Design", "Electrical", "Electrical(S)",
  "Engineering", "Furnishing", "I.T.", "M & P", "Mechanical", "Medical",
  "Miscellaneous", "Personnel", "Planning", "Plant", "Project", "Quality", "S & T",
];

const OtherOfficers = () => {
  const [selectedDept, setSelectedDept] = useState("");

  return (
    <div className="oo-page">

      {/* Page Heading */}
      <div>
        <div className="main-title">Other Officers' Contact Numbers</div>
        <div className="title-underline"></div>
      </div>

      {/* Factory Header */}
      <div className="oo-factory-header">
        <h3>RAIL COACH FACTORY KAPURTHALA - 144602 (PUNJAB)</h3>
        <p>( Centralised FAX : 01822-285091, 285092 &nbsp;&nbsp; EPBAX : 01822-285093, 285094</p>
        <p>DID Numbers : 01822-285095, 285096 )</p>
      </div>

      {/* Office Hours */}
      <div className="oo-office-hours">
        <div>
          <strong>Administrative Office Working Hours</strong>
          <p>Monday to Friday : 08:45 to 17:00 Hrs</p>
          <p>Saturday : 08:45 to 12:30 Hrs</p>
          <p>(Lunch Break - 13:00 to 14:00 Hrs)</p>
        </div>
        <div>
          <strong>Tilak Bridge Office Working Hours</strong>
          <p>Monday to Friday : 09:30 to 18:00 Hrs</p>
          <p>(Lunch Break - 13:30 to 14:00 Hrs)</p>
        </div>
      </div>

      {/* Note */}
      <p className="oo-note">
        <strong>Note :</strong> Please dial DID Number (01822-285095, 285096) followed by
        Railway extension number as shown against the official.
      </p>

      {/* Filter */}
      <div className="oo-filter-row">
        <label className="oo-filter-label">Search By Department :</label>
        <select
          className="oo-select"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          <option value="">--Select--</option>
          {departments.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="oo-table-section">
        <h3 className="oo-table-title">List of Officers Railway Numbers</h3>
        <div className="oo-table-wrapper">
          <table className="oo-table">
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Name (Sh.)</th>
                <th>Designation</th>
                <th>Rly Phone</th>
              </tr>
            </thead>
            <tbody>
              {!selectedDept ? (
                <tr>
                  <td colSpan={4} className="oo-empty-row">
                    Please select a department to view officers.
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan={4} className="oo-empty-row">
                    No records found for <strong>{selectedDept}</strong> department.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default OtherOfficers;