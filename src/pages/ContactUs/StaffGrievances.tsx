import "./StaffGrievances.css";

const grievanceContacts = [
  { designation: "Assistant Personnel Officer-I", phone: "9779241016" },
  { designation: "Staff & Welfare Inspector", phone: "6283285829" },
];

const StaffGrievances = () => {
  return (
    <div className="sg-page">
        <div>
        <div className="main-title">Staff Grievances</div>
        <div className="title-underline"></div>
      </div>

      <div className="sg-header-box">
        <h3>FOR GRIEVANCES, PLEASE CONTACT THE FOLLOWING</h3>
      </div>

      <div className="sg-contact-box">
        <div className="sg-contact-row">
          <span className="sg-key">SMS / WhatsApp (Mob):</span>
          <span className="sg-val">9779241016</span>
        </div>
        <div className="sg-contact-row">
          <span className="sg-key">Email:</span>
          <a href="mailto:apo1@ecf.railnet.gov.in" className="sg-email">apo1@ecf.railnet.gov.in</a>
        </div>
        <div className="sg-contact-row">
          <span className="sg-key">Telephone No.:</span>
          <span className="sg-val">92706 (Rly)</span>
        </div>
      </div>

      <div className="sg-address-block">
        <h4>Address</h4>
        <p>Assistant Personnel Officer-I</p>
        <p>Rail Coach Factory, Kapurthala</p>
        <p>Punjab - 144602</p>
      </div>

      <h3 className="sg-sub-title">Phone Nos of Grievance Department</h3>
      <div className="sg-table-wrapper">
        <table className="sg-table">
          <thead>
            <tr>
              <th>Designation</th>
              <th>Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {grievanceContacts.map((c, i) => (
              <tr key={i}>
                <td>{c.designation}</td>
                <td className="sg-td-center">{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffGrievances;