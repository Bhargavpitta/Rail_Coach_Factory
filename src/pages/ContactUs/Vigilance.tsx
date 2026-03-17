import "./Vigilance.css";

const contacts = [
  { name: "Vinod Pal", role: "Chief Vigilance Officer", phone: "9779241008" },
  { name: "Jugal Kishor", role: "Dy. Chief Vigilance Officer", phone: "9779241004" },
  { name: "Gagandeep Singh Bhatti", role: "Chief Vigilance Inspector - I", phone: "9875914709" },
  { name: "Yogendra Kumar Das", role: "Chief Vigilance Inspector - III", phone: "5510532210" },
];

const vigilanceLinks = [
  "Organisation Chart", "Vigilance Manual 2018", "CVC Portal",
  "Vigilance Directorate", "RCF Work Transparency Brochure",
  "Vigilance Bulletin 2023", "Vigilance Bulletin 2024",
];

const Vigilance = () => {
  return (
    <div className="vg-page">
        <div>
        <div className="main-title">Vigilance</div>
        <div className="title-underline"></div>
      </div>

      <p className="vg-desc">
        Vigilance department of Rail Coach Factory, Kapurthala is headed by Chief Vigilance Officer (CVO).
      </p>

      <div className="vg-alert">
        <strong>Please take Integrity Pledge here &nbsp;</strong>
        <a href="#" className="vg-link">Integrity Pledge</a>
        &nbsp;&nbsp;
        <a href="#" className="vg-link">e-Pledge</a>
      </div>

      <p className="vg-desc">
        For Complaints Pertaining to Corruption and suggestion to prevent/minimize malpractices,
        please contact us at the following:
      </p>

      <div className="vg-contact-box">
        <div className="vg-contact-row">
          <span className="vg-key">Telephone No. / Fax No.:</span>
          <span className="vg-val">01822-285009, 01822-285011</span>
        </div>
        <div className="vg-contact-row">
          <span className="vg-key">Email:</span>
          <a href="mailto:cvorcf@gmail.com" className="vg-email">cvorcf@gmail.com</a>
        </div>
        <div className="vg-contact-row">
          <span className="vg-key">SMS / WhatsApp:</span>
          <span className="vg-val">9888999077</span>
        </div>
      </div>

      <div className="vg-address-block">
        <h4>Address</h4>
        <p>Chief Vigilance Officer (CVO), Rail Coach Factory, Kapurthala, Punjab - 144602</p>
      </div>

      <h3 className="vg-sub-title">Phone Nos of Vigilance Department</h3>
      <div className="vg-table-wrapper">
        <table className="vg-table">
          <thead>
            <tr><th>Name &amp; Designation</th><th>Phone No.</th></tr>
          </thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr key={i}>
                <td><strong>{c.name}</strong><br /><span className="vg-role">{c.role}</span></td>
                <td className="vg-td-center">{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="vg-sub-title">Voluntary Disclosure under Right to Information Act, 2005</h3>
      <div className="vg-links-list">
        {vigilanceLinks.map((item, i) => (
          <a key={i} href="#" className="vg-doc-link">📄 {item}</a>
        ))}
      </div>
    </div>
  );
};

export default Vigilance;