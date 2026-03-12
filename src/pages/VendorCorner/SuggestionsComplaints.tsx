import "./SuggestionsComplaints.css";
import { Link } from "react-router-dom";

const departments = [
  {
    section: "A",
    title: "STORES",
    color: "#003580",
    contacts: [
      { name: "Sh. Harshil Jain", designation: "Dy.CMM", email: "dycmmvendorrcf@gmail.com" },
    ],
  },
  {
    section: "B",
    title: "DESIGN",
    color: "#0055b3",
    contacts: [
      { name: "Sh. D.K. Singh", designation: "DY.CME/DESIGN", email: "designrcf08@gmail.com" },
    ],
  },
  {
    section: "C",
    title: "QUALITY",
    color: "#006aaa",
    contacts: [
      { name: "Sh. Raghuveer Singh Deora", designation: "DY.CME/QA-III", email: "dycqm1rcf@gmail.com" },
    ],
  },
  {
    section: "D",
    title: "ELECTRICAL",
    color: "#007acc",
    contacts: [
      { name: "Sh. Kulwinder Singh", designation: "DY.CEE/D&D", email: "dyceedndrdf@gmail.com" },
    ],
  },
];

const SuggestionsComplaints = () => {
  return (
    <main className="sc-main">
      {/* Page Heading */}
      <div>
        <div className="main-title">Vendor Suggestions and Complaints</div>
        <div className="title-underline"></div>
      </div>

      <div className="sc-content">
        <section className="sc-section">
          <h2 className="sc-section-title">Contact Details for Suggestions and Complaints</h2>
          <div className="sc-dept-list">
            {departments.map((dept) => (
              <div className="sc-dept-block" key={dept.section}>
                <div className="sc-dept-heading">
                  <span className="sc-dept-letter" style={{ backgroundColor: dept.color }}>
                    ({dept.section})
                  </span>
                  <span className="sc-dept-name">{dept.title}</span>
                </div>
                <div className="sc-table-wrapper">
                  <table className="sc-table">
                    <thead>
                      <tr>
                        <th className="sc-th-sno">SNo.</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>E-Mail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dept.contacts.map((c, i) => (
                        <tr key={i}>
                          <td className="sc-td-sno">{i + 1}</td>
                          <td className="sc-td-name">{c.name}</td>
                          <td className="sc-td-desig">{c.designation}</td>
                          <td>
                            <a href={"mailto:" + c.email} className="sc-email-link">{c.email}</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SuggestionsComplaints;