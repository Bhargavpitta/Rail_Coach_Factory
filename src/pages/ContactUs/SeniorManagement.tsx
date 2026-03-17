import "./SeniorManagement.css";

const officers = [
  { sno: 1, name: "RAVI KUMAR", designation: "PCME", bsnl: "285045", rly: "93000", email: "cme@rcf.railnet.gov.in" },
  { sno: 2, name: "KANWALJIT SINGH ASLA", designation: "PFA", bsnl: "285013", rly: "92100", email: "facao@rcf.railnet.gov.in" },
  { sno: 3, name: "RAMESH KUMAR JAIN", designation: "PCEE", bsnl: "285017", rly: "92300", email: "cee@rcf.railnet.gov.in" },
  { sno: 4, name: "HARVINDER SINGH", designation: "PCE", bsnl: "285015", rly: "92200", email: "pce@rcf.railnet.gov.in" },
  { sno: 5, name: "LATHA N RAMALINGAM", designation: "PCMO", bsnl: "285026", rly: "92500", email: "latha.ramalingam@gov.in" },
  { sno: 6, name: "SANJAY AGGARWAL", designation: "PCMM", bsnl: "285037", rly: "94900", email: "coarcf@gmail.com" },
  { sno: 7, name: "BHUPESHWAR ATTRI", designation: "PCPO", bsnl: "285030", rly: "92700", email: "cpo@rcf.railnet.gov.in" },
  { sno: 8, name: "RENU P CHHIBBER", designation: "PCSC-RPF", bsnl: "285032", rly: "92800", email: "snc.pcsc@rcf.railnet.gov.in" },
  { sno: 9, name: "LALIT KISHORE", designation: "CDE", bsnl: "285065", rly: "92800", email: "cde@rcf.railnet.gov.in" },
  { sno: 10, name: "RAMNIK SINGH", designation: "CWE/PUR", bsnl: "285054", rly: "93200", email: "ramnik.singh@gov.in" },
  { sno: 11, name: "VINOD PAL", designation: "CVO", bsnl: "285009", rly: "92040", email: "cvorcf@gmail.com" },
  { sno: 12, name: "RISHI LAL", designation: "CME/QA-I", bsnl: "285050", rly: "93100", email: "rishi.lal17@gov.in" },
  { sno: 13, name: "SHIV KUMAR", designation: "CME/IT", bsnl: "285069", rly: "93600", email: "cme.it@rcf.railnet.gov.in" },
  { sno: 14, name: "GAGANDEEP", designation: "CPE", bsnl: "285061", rly: "93400", email: "cpe@rcf.railnet.gov.in" },
  { sno: 15, name: "RAVI KANT", designation: "CMM", bsnl: "285095*", rly: "92900", email: "ravi.kant.17@gov.in" },
  { sno: 16, name: "RATTAN LAL KHULLAR", designation: "CPM", bsnl: "285076", rly: "93900", email: "lal.rattan@gov.in" },
  { sno: 17, name: "RAJESH TIWARI", designation: "CMMG", bsnl: "285095*", rly: "94910", email: "rajesh.tiwari.17@gov.in" },
  { sno: 18, name: "YOGESH KUMAR", designation: "CMM/E", bsnl: "285095*", rly: "92040", email: "yogesh.24050@gov.in" },
  { sno: 19, name: "JYOTI BHASKAR", designation: "CEDE", bsnl: "285019", rly: "92310", email: "cedeorcf@gmail.com" },
  { sno: 20, name: "KAMAL KUMAR", designation: "CPLE", bsnl: "285075", rly: "93700", email: "-" },
  { sno: 21, name: "BALDEV RAJ", designation: "CESE", bsnl: "285022", rly: "92400", email: "cese@rcf.railnet.gov.in" },
  { sno: 22, name: "AMITOJ BALLABH", designation: "CWE-SHELL", bsnl: "285057", rly: "93300", email: "cweshellrcf@gmail.com" },
];

const SeniorManagement = () => {
  return (
    <div className="sm-page">

      {/* Page Heading */}
      <div>
        <div className="main-title">Contact Details of Senior Management</div>
        <div className="title-underline"></div>
      </div>

      {/* Factory Header */}
      <div className="sm-factory-header">
        <h3>RAIL COACH FACTORY KAPURTHALA - 144602 (PUNJAB)</h3>
        <p>( Centralised FAX : 01822-285051, 285052 &nbsp;&nbsp; EPBAX : 01822-285033, 285094</p>
        <p>DID Numbers : 01822-285065, 285096 ( )</p>
      </div>

      {/* Office Hours */}
      <div className="sm-office-hours">
        <div>
          <strong>Administrative Office Working Hours</strong>
          <p>Monday to Friday : 08:45 to 17:00 Hrs</p>
          <p>Saturday : 08:45 to 12:30 Hrs</p>
          <p>(Lunch Break : 13:00 to 14:00 Hrs)</p>
        </div>
        <div>
          <strong>Tilak Bridge Office Working Hours</strong>
          <p>Monday to Friday : 09:30 to 18:00 Hrs</p>
          <p>(Lunch Break : 13:30 to 14:00 Hrs)</p>
        </div>
      </div>

      {/* Note */}
      <p className="sm-note">
        For all purpose, single point contact person is Chief Design Engineer (CDE), RCF Kapurthala,
        Contact No. 01822-285065 and Email Id cde.rcf@rcf.railnet.gov.in
      </p>

      {/* Other Officers Link */}
      <div className="sm-other-link">
        <a href="#" className="sm-link">Other Officers Contact Numbers</a>
      </div>

      {/* Table */}
      <div className="sm-table-wrapper">
        <table className="sm-table">
          <thead>
            <tr>
              <th>SrNo.</th>
              <th>Name (Sh.)</th>
              <th>Designation</th>
              <th>BSNL Phone (STD Code 01822)</th>
              <th>Rly Phone (Rly STD Code 031)</th>
              <th>Email Id</th>
            </tr>
          </thead>
          <tbody>
            {officers.map((o) => (
              <tr key={o.sno}>
                <td className="sm-td-center">{o.sno}</td>
                <td className="sm-td-bold">{o.name}</td>
                <td>{o.designation}</td>
                <td className="sm-td-center">{o.bsnl}</td>
                <td className="sm-td-center">{o.rly}</td>
                <td>
                  {o.email !== "-" ? (
                    <a href={"mailto:" + o.email} className="sm-email">{o.email}</a>
                  ) : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note Bottom */}
      <p className="sm-note-bottom">
        <strong>Note :</strong> BSNL Phone numbers with * mark - Please dial this number followed
        by Railway extension number as shown in next column against the official.
      </p>
    </div>
  );
};

export default SeniorManagement;